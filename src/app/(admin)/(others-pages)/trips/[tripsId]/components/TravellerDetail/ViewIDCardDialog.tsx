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

import { TripTraveller } from "./columns";
import { Card } from "@/components/ui/card";

interface ViewIDCardDialogProps {
    traveller: TripTraveller
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ViewIDCardDialog({ traveller, open, onOpenChange }: ViewIDCardDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className="sm:max-w-2xl dark:bg-gray-900">
                <DialogHeader>
                    <DialogTitle>ID Card of {traveller.name}</DialogTitle>
                    <DialogDescription>
                        Make sure the traveller information is correct.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-4">
                        <h2>Front Side</h2>
                        <Card className="bg-white">
                            <h2>{traveller.name}</h2>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Back Side</h2>
                    </div>
                </div>


                <DialogFooter className="dark:bg-gray-950 items-center justify-between">

                    <div className="flex flex-row gap-5">
                        <DialogClose>
                            <Button className="h-10" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button className="h-10" type="submit">Save changes</Button>
                    </div>


                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
