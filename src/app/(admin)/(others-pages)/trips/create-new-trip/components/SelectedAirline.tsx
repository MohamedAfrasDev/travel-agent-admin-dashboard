import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import React, { useState } from 'react'

import { Airline } from '../../../airlines/components/columns'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import TouchFlight from './TouchFlight'

interface SelectedAirlineProps {
    airlineList: Airline[]
    deleteAirline: (index: number) => void
}

const SelectedAirline = ({ airlineList, deleteAirline }: SelectedAirlineProps) => {

    const [directFlightState, setDirectFlightState] = useState<Record<string, boolean>>({});
    const handleIsDirectFlight = (airlineId: string, value: boolean) => {
        setDirectFlightState((prev) => ({
            ...prev,
            [airlineId]: value,
        }));
    };
    return (
        <div>      <AnimatePresence>
            {Array.from({ length: airlineList.length }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.3 }}
                >
                    <Accordion type="multiple" defaultValue={Array.from({ length: airlineList.length }, (_, i) => `item-${i + 1}`)}>
                        <AccordionItem value={`item-${index + 1}`}>
                            <AccordionTrigger className='flex flex-row gap-2 items-center justify-between w-full text-lg'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={airlineList[index].logo} alt={airlineList[index].name} width={30} height={30} />
                                    {airlineList[index].name}
                                </div>

                            </AccordionTrigger>
                            <AccordionContent className="">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                    <Field>
                                        <FieldLabel htmlFor={`airline-${airlineList[index].id}-${index}-adult-price`}>
                                            Adult Price
                                        </FieldLabel>
                                        <ButtonGroup>
                                            <Button variant="outline" className="h-10">
                                                LKR<span className='text-xs text-gray-500'>/per adult</span>

                                            </Button>
                                            <Input id={`airline-${airlineList[index].id}-${index}-adult-price`} placeholder="Enter Adult Price" />

                                        </ButtonGroup>
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor={`airline-${airlineList[index].id}-${index}-child-price`}>
                                            Child Price
                                        </FieldLabel>
                                        <ButtonGroup>
                                            <Button variant="outline" className="h-10">
                                                LKR<span className='text-xs text-gray-500'>/per child</span>

                                            </Button>
                                            <Input id={`airline-${airlineList[index].id}-${index}-child-price`} placeholder="Enter Child Price" />
                                        </ButtonGroup>  </Field>

                                    <Field>
                                        <FieldLabel htmlFor={`airline-${airlineList[index].id}-${index}-infant-price`}>
                                            Infant Price
                                        </FieldLabel>
                                        <ButtonGroup>
                                            <Button variant="outline" className="h-10">
                                                LKR<span className='text-xs text-gray-500'>/per infant</span>
                                            </Button>
                                            <Input id={`airline-${airlineList[index].id}-${index}-infant-price`} placeholder="Enter Infant Price" />

                                        </ButtonGroup>
                                    </Field>


                                </div>
                                <Field className='mt-5'>
                                    <FieldLabel htmlFor={`airline-${airlineList[index].id}-${index}-is-direct-flight`}>
                                        Is Direct Flight
                                    </FieldLabel>
                                    <Switch
                                        size="default"
                                        checked={directFlightState[airlineList[index].id] ?? true}
                                        onCheckedChange={(value) =>
                                            handleIsDirectFlight(airlineList[index].id, value)
                                        }
                                    />
                                </Field>
                                <div className='flex flex-row mt-5'>



                                    {!directFlightState[airlineList[index].id] && (
                                        <div className='w-full'>
                                            <TouchFlight airlineList={airlineList} index={index} />
                                        </div>
                                    )}



                                </div>

                                <Button onClick={(e) => {
                                    e.stopPropagation()
                                    deleteAirline(index)
                                }} variant="destructive" className='mt-5'>Remove Airline</Button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>



                </motion.div>
            ))}
        </AnimatePresence></div>
    )
}

export default SelectedAirline