"use client";
import ComponentCard from '@/components/common/ComponentCard'
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import React from 'react'

const BillingDetail = () => {


    return (
        <ComponentCard title='Billing' >

            <div className='grid grid-cols-2 gap-5'>
                <Field>
                    <FieldLabel htmlFor="billing-name">Name</FieldLabel>
                    <Input
                        id="billing-name"
                        type="text"
                        value='Mohamed Afras'
                        placeholder="Billing name"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="billing-email">Email</FieldLabel>
                    <Input
                        id="billing-email"
                        type="text"
                        value='afras4432@gmail.com'
                        placeholder="Billing email"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="billing-phone">Phone</FieldLabel>
                    <ButtonGroup>
                        <Button className="h-10" variant="outline">+94</Button>
                        <Input
                            id="billing-phone"
                            type="text"
                            value='0760262008'
                            placeholder="Billing phone"
                            disabled
                        />
                    </ButtonGroup>

                </Field>
                <Field>
                    <FieldLabel htmlFor="billing-address">Address</FieldLabel>
                    <Input
                        id="billing-address"
                        type="text"
                        value='Colombo'
                        placeholder="Billing address"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="billing-city">City</FieldLabel>
                    <Input
                        id="billing-city"
                        type="text"
                        value='Colombo'
                        placeholder="Billing city"
                        disabled
                    />

                </Field>
                <Field>
                    <FieldLabel htmlFor="billing-country">Country</FieldLabel>
                    <Input
                        id="billing-country"
                        type="text"
                        value='Sri Lanka'
                        placeholder="Billing country"
                        disabled
                    />

                </Field>
            </div>

        </ComponentCard>
    )
}

export default BillingDetail