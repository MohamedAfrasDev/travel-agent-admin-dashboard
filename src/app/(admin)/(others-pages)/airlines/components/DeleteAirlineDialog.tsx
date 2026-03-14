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
} from "@/components/ui/dialog"
import { Airline } from "./columns"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { createClient } from "@/utils/supabase/client"

interface DeleteAirlineDialogProps {
    open: boolean
    setOpen: (val: boolean) => void
    airlineData: Airline
    onDelete?: (id: string) => void
}

const DeleteAirlineDialog = ({ open, setOpen, airlineData, onDelete }: DeleteAirlineDialogProps) => {

    const supabase = createClient()
    const handleDelete = async () => {
        const { error } = await supabase
            .from("airlines")
            .delete()
            .eq("id", airlineData.id)

        if (!error) {
            onDelete?.(airlineData.id)  // <-- removes row from table state
            setOpen(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-xl dark:bg-gray-900">
                <DialogHeader>
                    <DialogTitle>Delete Airline</DialogTitle>

                </DialogHeader>
                <Card className="flex items-center gap-3 flex-row px-5 py-5 dark:bg-white/3">
                    <Image src={airlineData.logo} alt={airlineData.logo} width={80} height={80} className="mt-3 items-center" />
                    <div className="mt-3">
                        <p className="font-semibold text-gray-800 text-lg dark:text-white/90">
                            {airlineData.name}
                        </p>
                        <span className="text-gray-500 text-sm dark:text-gray-400">
                            {airlineData.code}
                        </span>
                    </div>
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
                            handleDelete()
                        }}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteAirlineDialog