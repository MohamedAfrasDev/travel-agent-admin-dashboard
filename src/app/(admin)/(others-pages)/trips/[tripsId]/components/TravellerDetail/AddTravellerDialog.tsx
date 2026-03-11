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
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuPortal } from "@/components/ui/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDownIcon, Plus } from "lucide-react"
import { Portal } from "@radix-ui/react-portal"
import { ButtonGroup } from "@/components/ui/button-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export function AddTravellerDialog({ travellerId }: { travellerId: number }) {
    return (
        <Dialog>
            <form>
                <DialogTrigger>
                    <div className='gap-2 flex flex-row items-center cursor-pointer text-gray-500 dark:text-gray-400'><p className='text-sm'>Add New Traveller</p><Plus className='w-4 h-4' /></div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl dark:bg-gray-900">
                    <DialogHeader>
                        <DialogTitle>Traveller #{travellerId}</DialogTitle>
                        <DialogDescription>
                            Make sure the traveller information is correct.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="grid grid-cols-3 gap-5">
                        <Field>
                            <FieldLabel htmlFor="traveller-name">Full Name</FieldLabel>
                            <Input
                                id="traveller-name"
                                type="text"
                                placeholder="Full Name"

                            />

                        </Field>
                        <Field className="mt-1">
                            <Label htmlFor="traveller-type">Traveller Type</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger >
                                    <Field>
                                        <Input type="text" placeholder="Traveller Type" value="Adult" />
                                    </Field>
                                </DropdownMenuTrigger>

                                <DropdownMenuPortal>
                                    <DropdownMenuContent
                                        align="start"
                                        side="bottom"
                                        sideOffset={4}
                                        className="dark:bg-gray-800"
                                    >
                                        <DropdownMenuGroup>
                                            <DropdownMenuLabel>Change Traveller Type</DropdownMenuLabel>
                                            <DropdownMenuItem>Adult</DropdownMenuItem>
                                            <DropdownMenuItem>Child</DropdownMenuItem>
                                            <DropdownMenuItem>Infant</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenuPortal>
                            </DropdownMenu>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="traveller-email">Email</FieldLabel>
                            <Input
                                id="traveller-email"
                                type="text"
                                placeholder="Email"

                            />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="traveller-phone">Phone</FieldLabel>
                            <ButtonGroup>
                                <Button className="h-10" variant="outline">+94</Button>
                                <Input
                                    id="traveller-phone"
                                    type="text"
                                    placeholder="Phone"

                                />
                            </ButtonGroup>

                        </Field>

                        <Field>
                            <FieldLabel htmlFor="traveller-address">Address</FieldLabel>
                            <Input
                                id="traveller-address"
                                type="text"
                                placeholder="Address"
                            />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="traveller-country">Country</FieldLabel>
                            <Input
                                id="traveller-country"
                                type="text"
                                placeholder="Country"
                            />

                        </Field>

                    </FieldGroup>


                    <DialogFooter className="dark:bg-gray-950 items-center justify-between">

                        <div className="flex flex-row gap-5">
                            <DialogClose>
                                <Button className="h-10" variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button className="h-10" type="submit">Save changes</Button>
                        </div>


                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog >
    )
}
