import ComponentCard from '@/components/common/ComponentCard'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { EditIcon, Icon, PencilIcon } from 'lucide-react'

const PackageDetail = () => {
    return (
        <ComponentCard title={"Package Details"} className="w-full" icons={<PencilIcon color='grey' />}>
            <div className='grid grid-cols-2 gap-5'>
                <Field>
                    <FieldLabel htmlFor="booked-trip">Booked Trip</FieldLabel>
                    <Input
                        id="booked-trip"
                        type="text"
                        placeholder="Booked Trip"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="booked-date">Booked Date</FieldLabel>
                    <Input
                        id="booked-date"
                        type="date"
                        placeholder="Booked date"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="start-date">Start Date</FieldLabel>
                    <Input
                        id="start-date"
                        type="date"
                        placeholder="Start date"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="end-date">End Date</FieldLabel>
                    <Input
                        id="end-date"
                        type="date"
                        placeholder="End date"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="trip-code">Trip Code</FieldLabel>
                    <Input
                        id="trip-code"
                        type="text"
                        placeholder="Trip Code"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="number-of-travellers">Number of Travellers</FieldLabel>
                    <Input
                        id="number-of-travellers"
                        type="number"
                        placeholder="Number of Travellers"
                        disabled
                    />

                </Field>

            </div>
        </ComponentCard>
    )
}

export default PackageDetail