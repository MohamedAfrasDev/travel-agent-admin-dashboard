"use client";
import { Button } from '@/components/ui/button';
import BreadcrumbComp from './components/BreadcrumbComp'
import { Card } from '@/components/ui/card'

import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Field, FieldLabel } from '@/components/ui/field';
import { UploadIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { createClient } from "../../../../../utils/supabase/client"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import UploadedMedia from '@/components/common/UploadedMedia';

const fileTypes = ["JPG", "PNG", "GIF"];

const CreateAirline = () => {

    const [refreshTrigger, setRefreshTrigger] = useState<number>(0)
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [name, setName] = useState<string>("")
    const [code, setCode] = useState<string>("")
    const [logoUrl, setLogoUrl] = useState<string>("")
    const [fileName, setFileName] = useState<string>("")



    const clearLogo = () => {
        setFile(null)
        setPreview(null)
        setLogoUrl("")
    }


    const setPreviewUrl = (url: string) => {
        setPreview(url)
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    const handleChange = (uploadedFile: File) => {
        setFile(uploadedFile)
        setPreview(URL.createObjectURL(uploadedFile))
        uploadFileToStorage(uploadedFile) // pass directly
    }

    const uploadFileToStorage = async (fileToUpload: File) => {
        if (!fileToUpload) return

        const supabase = createClient()
        const fileExt = fileToUpload.name.split(".").pop()
        const fileName = `${Date.now()}.${fileExt}`
        setFileName(fileName)

        const { error: uploadError } = await supabase.storage
            .from("airline-logos")
            .upload(fileName, fileToUpload)

        if (uploadError) {
            console.log(uploadError)
            return
        }

        const { data } = supabase.storage
            .from("airline-logos")
            .getPublicUrl(fileName)

        const logoUrl = data.publicUrl
        setLogoUrl(logoUrl)
        const uid = crypto.randomUUID();

        const { error } = await supabase.from("uploaded_images").insert({
            id: uid,
            url: logoUrl,
            fileName: fileName,

        })

        if (error) {
            console.log(error)
        } else {
            setRefreshTrigger(prev => prev + 1)
        }
    }

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()


        const supabase = createClient()




        const uid = crypto.randomUUID();

        const { error } = await supabase.from("airlines").insert({
            id: uid,
            name: name,
            code: code,
            logo: logoUrl === "" ? preview : logoUrl,
            status: "Active"
        })

        if (error) {
            console.log(error)
        } else {
            toast("Airline has been created", {
                description: `${name} Airline has been created successfully`,
                position: "top-center",

            })
            router.push("/airlines")
            setName("")
            setCode("")
            setFile(null)
            setPreview(null)
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <BreadcrumbComp />

            <Card className='dark:bg-white/3 px-5 py-3'>
                <h2 className='text-2xl font-semibold mb-5'>Airline Details</h2>

                <div className='flex flex-row gap-5'>


                    <div className='flex-1'>
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                        >

                            <Card className='dark:bg-white/3 px-5 py-3'>

                                {preview ? (
                                    <div className='flex flex-col gap-5 mt-5'>

                                        <img
                                            src={preview}
                                            alt="Uploaded Preview"
                                            className='w-[200px] mx-auto h-[120px] object-contain'
                                        />

                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setFile(null)
                                                setPreview(null)
                                            }}
                                        >
                                            Change
                                        </Button>

                                    </div>
                                ) : (
                                    <div className='flex flex-col gap-5'>
                                        <FieldLabel>Airline logo</FieldLabel>
                                        <UploadIcon size={50} className='mx-auto' />
                                        <p className='text-center'>
                                            Click or Drag and drop your airline logo here
                                        </p>
                                    </div>
                                )}

                            </Card>

                        </FileUploader>
                    </div>

                    <div className='flex-3 flex flex-col gap-5'>

                        <Field>
                            <FieldLabel>Airline Name</FieldLabel>
                            <Input placeholder='Enter Airline name' type='text' value={name ?? ""} onChange={handleName} />
                        </Field>

                        <Field>
                            <FieldLabel>Airline Code</FieldLabel>
                            <Input placeholder='Enter Airline code' type='text' value={code ?? ""} onChange={handleCode} />
                        </Field>
                        <UploadedMedia onDelete={clearLogo} setPreviewUrl={setPreviewUrl} refreshTrigger={refreshTrigger} />
                        <Button className="h-10" onClick={handleSubmit} disabled={!name || !code || (!file && !preview)}>
                            Create
                        </Button>

                    </div>

                </div>

            </Card>

        </div>
    )
}

export default CreateAirline