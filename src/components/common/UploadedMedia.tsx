import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import { createClient } from '@/utils/supabase/client'
import { Button } from '../ui/button'
import DeleteMediaDialog from './DeleteMediaDialog'
export type Media = {
    id: string
    url: string
    fileName: string
    date: number

}

interface UploadedMediaProps {
    setPreviewUrl: (url: string) => void
    refreshTrigger?: number
    onDelete: () => void
}
const UploadedMedia = ({ setPreviewUrl, refreshTrigger, onDelete }: UploadedMediaProps) => {
    const supabase = createClient()
    const [mediaData, setMediaData] = useState<Media[]>([])

    // Fetch data on mount
    const fetchMedia = async () => {
        const { data, error } = await supabase.from("uploaded_images").select("*")
        if (data) {
            const formatted: Media[] = data.map((item) => ({
                id: String(item.id),
                url: item.url,
                logo: item.logo,
                fileName: item.fileName,
                date: new Date(item.date).getTime(),
            }))
            setMediaData(formatted)
        }
        if (error) console.log(error)
    }

    useEffect(() => {
        fetchMedia()
    }, [refreshTrigger])
    const deleteImage = async (bucketName: string, filePath: string) => {
        try {
            // Supabase storage expects the exact path in the bucket
            const { data, error } = await supabase.storage
                .from(bucketName)
                .remove([filePath]);

            if (error) {
                console.error('Error deleting image from storage:', error.message);
                return false;
            } else {
                console.log('Image deleted successfully from storage:', data);
                return true;
            }
        } catch (err) {
            console.error('Unexpected error deleting image:', err);
            return false;
        }
    };
    // Handle row deletion
    const handleDelete = async (id: string, fileName: string) => {
        const { error } = await supabase.from("uploaded_images").delete().eq("id", id)
        if (!error) {
            // Remove the deleted row from state
            deleteImage("airline-logos", fileName)
            setMediaData((prev) => prev.filter((media) => media.id !== id))
            onDelete()
        } else {
            console.log(error)
        }
    }
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-lg font-semibold'>Media</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mediaData.map((media) => (
                    <Card key={media.id} className="relative group dark:bg-white/3 p-5 items-center justify-center ">
                        <img
                            src={media.url}
                            alt={media.url}
                            className="w-100 h-20 object-contain rounded-lg mx-auto mt-2"
                            onClick={() => setPreviewUrl(media.url)}
                        />
                        <DeleteMediaDialog onDelete={() => handleDelete(media.id, media.fileName)} />

                    </Card>
                ))}
            </div>
        </Card>
    )
}

export default UploadedMedia