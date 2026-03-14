"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { createClient } from "@/utils/supabase/client"
import { useState } from "react"

interface DeleteMediaProps {
    onDelete: () => void
}

const DeleteMediaDialog = ({ onDelete }: DeleteMediaProps) => {

    const supabase = createClient()

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity w-full"
            >
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl dark:bg-gray-900">
                <DialogHeader>
                    <DialogTitle>Delete Media</DialogTitle>

                </DialogHeader>
                <Card className="flex items-center gap-3 flex-row px-5 py-5">

                </Card>
                <DialogDescription>
                    Are you sure you want to delete this airline?
                </DialogDescription>
                <DialogFooter className="dark:bg-gray-950 flex justify-end gap-3">
                    <DialogClose >
                        Cancel
                    </DialogClose>

                    <Button
                        variant="destructive"
                        onClick={() => {
                            onDelete()
                        }}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteMediaDialog