
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import React from 'react'
import SriLankanAirlines from "../../../../../../../public/images/logo/srilankan-airlines-logo.png";
import AirArabia from "../../../../../../../public/images/logo/air-arabia.png";
import KuwaitAirways from "../../../../../../../public/images/logo/kuwait-airways-logo.png";
import Emirates from "../../../../../../../public/images/logo/emirates-logo.png";

import { AirlineList } from "../../../../../constant/Airlinelist";

const InputTravellersDetails = ({ noOfTravellers }: { noOfTravellers: number }) => {
    const airlineList = new AirlineList();

    const [selectedAirline, setSelectedAirline] = React.useState<string>("");

    const handleSelectAirline = (airlineName: string) => {
        setSelectedAirline(airlineName);
    }

    const [selectedTravellerType, setSelectedTravellerType] = React.useState<string>("Adult");

    const handleSelectTravellerType = (travellerType: string) => {
        setSelectedTravellerType(travellerType);
    }

    const price_list = [
        { "1": "LKR 325,500" },
        { "2": "LKR 265,500" },
        { "3": "LKR 155,500" },
        { "4": "LKR 255,500" },
        { "5": "LKR 425,500" },
        { "6": "LKR 125,500" },
        { "7": "LKR 385,500" },
        { "8": "LKR 215,500" },
        { "9": "LKR 315,500" },
        { "10": "LKR 195,500" }]

    return (
        <Card className="dark:bg-white/3 px-5 py-3">
            <h2 className="text-lg">Travellers Details</h2>

            <AnimatePresence>
                {Array.from({ length: noOfTravellers }).map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Accordion type="multiple" defaultValue={Array.from({ length: noOfTravellers }, (_, i) => `item-${i + 1}`)}>
                            <AccordionItem value={`item-${index + 1}`}>
                                <AccordionTrigger>  <h3 className="text-xl">
                                    Traveller #{index + 1}
                                </h3></AccordionTrigger>
                                <AccordionContent >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                        <Field>
                                            <FieldLabel htmlFor={`traveller-name-${index}`}>
                                                Name
                                            </FieldLabel>
                                            <Input id={`traveller-name-${index}`} placeholder="Enter Traveller Name" />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor={`traveller-email-${index}`}>
                                                Email
                                            </FieldLabel>
                                            <Input id={`traveller-email-${index}`} placeholder="Enter Traveller Email" />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor={`traveller-phone-${index}`}>
                                                Phone
                                            </FieldLabel>
                                            <Input id={`traveller-phone-${index}`} placeholder="Enter Traveller Phone" />
                                        </Field>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}
                                                className="ml-auto w-full"

                                            >

                                                <Field>
                                                    <FieldLabel htmlFor='trip-name'>Type</FieldLabel>
                                                    <Input id='trip-name' placeholder='Select Traveller Type' value="Adult" disabled />
                                                </Field>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}>Adult</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}>Child</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}>Infant</DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                        <Field>
                                            <FieldLabel htmlFor={`traveller-passport-${index}`}>
                                                Passport
                                            </FieldLabel>
                                            <ButtonGroup>
                                                <Input disabled id={`traveller-passport-${index}`} placeholder={`Upload Passport Traveller ${index + 1}`} />

                                                <Button className="h-10" variant="outline">
                                                    Upload
                                                </Button>
                                            </ButtonGroup>
                                        </Field>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}
                                                className="ml-auto w-full"

                                            >

                                                <Field>
                                                    <FieldLabel htmlFor='trip-name'>Airline</FieldLabel>
                                                    <Input id='trip-name' placeholder='Select Airline' value={selectedAirline + " " + price_list[index][(index + 1).toString()]} disabled />
                                                </Field>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuGroup>

                                                    {AirlineList.airLineList.map((airline, index) => (
                                                        <DropdownMenuItem className="py-3" key={airline.name} onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSelectAirline(airline.name);
                                                        }}><Image src={airline.image} alt="" width={35} height={35} /> {airline.name} {price_list[index][(index + 1).toString()]}</DropdownMenuItem>
                                                    ))}

                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>



                    </motion.div>
                ))}
            </AnimatePresence>

        </Card>
    )
}

export default InputTravellersDetails