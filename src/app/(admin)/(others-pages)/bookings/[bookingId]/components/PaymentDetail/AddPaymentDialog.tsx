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

export function AddPaymentDialog({ paymentId }: { paymentId: number }) {
    return (
        <Dialog>
            <form>
                <DialogTrigger>
                    <div className='gap-2 flex flex-row items-center cursor-pointer text-gray-500 dark:text-gray-400'><p className='text-sm'>Add New Payment</p><Plus className='w-4 h-4' /></div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl dark:bg-gray-900">
                    <DialogHeader>
                        <DialogTitle>Payment #{paymentId}</DialogTitle>
                        <DialogDescription>
                            Make sure the payment information is correct.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="grid grid-cols-3 gap-5">
                        <Field>
                            <Label htmlFor="payment-id">Payment ID</Label>
                            <Input id="payment-id" name="payment-id" defaultValue="1212123" disabled />
                        </Field>
                        <Field>
                            <Label htmlFor="payment-status">Payment Status</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Field>
                                        <Input type="text" placeholder="Payment Status" value="Pending" />
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
                                            <DropdownMenuLabel>Change Payment Status</DropdownMenuLabel>
                                            <DropdownMenuItem>Completed</DropdownMenuItem>
                                            <DropdownMenuItem>Pending</DropdownMenuItem>
                                            <DropdownMenuItem>Failed</DropdownMenuItem>
                                            <DropdownMenuItem>Refunded</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenuPortal>
                            </DropdownMenu>
                        </Field>
                        <Field>
                            <Label htmlFor="payment-status">Payment Gateway</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Field>
                                        <Input type="text" placeholder="Payment Gateway" value="Bank Transfer" />
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
                                            <DropdownMenuLabel>Change Payment Gateway</DropdownMenuLabel>
                                            <DropdownMenuItem>Bank Transfer</DropdownMenuItem>
                                            <DropdownMenuItem>Cash</DropdownMenuItem>
                                            <DropdownMenuItem>Cheque</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenuPortal>
                            </DropdownMenu>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="payment-transaction">Transaction ID</FieldLabel>
                            <Input
                                id="payment-transaction"
                                type="text"
                                placeholder="Transaction ID"

                            />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="payment-deposit">Deposit Amount</FieldLabel>
                            <ButtonGroup>
                                <Button className="h-10" variant="outline">LKR රු</Button>
                                <Input
                                    id="payment-deposit"
                                    type="text"
                                    placeholder="Deposit Amount"

                                />
                            </ButtonGroup>

                        </Field>

                        <Field>
                            <FieldLabel htmlFor="payment-paid">Paid Amount</FieldLabel>
                            <ButtonGroup>
                                <Button className="h-10" variant="outline">LKR රු</Button>
                                <Input
                                    id="payment-paid"
                                    type="text"
                                    placeholder="Paid Amount"
                                />
                            </ButtonGroup>

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="payment-note">Note</FieldLabel>
                            <Input
                                id="payment-note"
                                type="text"
                                placeholder="Note"
                            />

                        </Field>
                        <Field>
                            <FieldLabel htmlFor="payment-date">Payment Date</FieldLabel>

                            <Popover>
                                <PopoverTrigger className="w-[220px]">
                                    <ButtonGroup>
                                        <Button
                                            variant="outline"
                                            className="h-10 border rounded-sm"
                                        >
                                            {new Date(Date.now()) ? format(new Date(Date.now()), "PPP") : <span>Pick a date</span>}
                                        </Button>
                                        <Button className="h-10" variant="outline">
                                            <ChevronDownIcon />
                                        </Button>
                                    </ButtonGroup>



                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={new Date(Date.now())}
                                        onSelect={() => { }}
                                        className="dark:bg-gray-900"
                                        defaultMonth={new Date(Date.now())}
                                    />
                                </PopoverContent>
                            </Popover>
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
