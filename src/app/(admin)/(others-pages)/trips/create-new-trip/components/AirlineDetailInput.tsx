"use client";
import { Card } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import LinkTripDropDown from './LinkTripDropDown'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Airline } from '../../../airlines/components/columns';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Delete, Trash, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import SelectedAirline from './SelectedAirline';

const AirlineDetailInput = () => {
    const supabase = createClient()
    const [airlineData, setAirlineData] = useState<Airline[]>([]);
    const [selectedAirline, setSelectedAirline] = useState<Airline | null>(null);
    const [isShowImage, setIsShowImage] = useState<boolean>(false);
    const [selectedAirlineName, setSelectedAirlineName] = useState<string>("");


    const [airlineList, setAirlineList] = useState<Airline[]>([]);
    const handleSelectAirline = (airline: Airline) => {
        setSelectedAirline(airline);
    };

    const handleSelectAirlineName = (name: string) => {
        setSelectedAirlineName(name);
    };

    const handleShowImage = (value: boolean) => {
        setIsShowImage(value);
    };



    // Fetch data on mount
    const fetchAirlines = async () => {
        const { data, error } = await supabase.from("airlines").select("*")
        if (data) {
            const formatted: Airline[] = data.map((item) => ({
                id: String(item.id),
                name: item.name,
                code: item.code,
                logo: item.logo,
                status: item.status as "Active" | "Inactive",
                date: new Date(item.date).getTime(),
            }))
            setAirlineData(formatted)
        }
        if (error) console.log(error)
    }

    useEffect(() => {
        fetchAirlines()
    }, [])

    const handleAirlineList = (airline: Airline) => {
        setAirlineList([...airlineList, airline]);
        setSelectedAirlineName("")
        setSelectedAirline(null)
        handleShowImage(false)
    }
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-2xl font-semibold mb-5'>Airline Details</h2>

            <div className='flex flex-row'>
                <Field className='w-[350px]'>
                    <FieldLabel htmlFor="airlineName">Airline Name</FieldLabel>
                    <ButtonGroup>
                        <Combobox value={selectedAirlineName} items={airlineData} onInputValueChange={(e) => {
                            airlineData.map((val) => {
                                if (val.name.toLowerCase() === e.toLowerCase()) {
                                    handleSelectAirline(val)
                                    handleSelectAirlineName(val.name)
                                    handleShowImage(true)
                                } else {
                                    handleShowImage(true)
                                }
                            })
                        }}>
                            <ComboboxInput onChange={(e) => {
                                handleSelectAirlineName(e.target.value);

                            }} prefixWidget={isShowImage && <div>
                                <Image src={selectedAirline?.logo || ""} alt={selectedAirline?.name || ""} width={30} height={30} />
                            </div>} showTrigger={false} placeholder="Select an Airline" className="h-10 w-full min-w-0 rounded-sm border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40" />
                            <ComboboxContent className="dark:bg-gray-900">
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList onSelect={(e) => {
                                    handleSelectAirline(airlineData[0])
                                    console.log(airlineData[0])
                                }}>
                                    {(item) => (
                                        <ComboboxItem key={item.id} value={item.name} className="text-sm">
                                            <Image src={item.logo} alt={item.name} width={30} height={30} />
                                            <p className='pl-2'>{item.name}</p>
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>

                        <Button className="h-10" variant="outline" disabled={selectedAirlineName === ""} onClick={(e) => {
                            if (airlineList.some((val) => val.name.toLowerCase() === selectedAirlineName.toLowerCase())) {
                                return
                            } else {
                                handleAirlineList(selectedAirline!)
                                handleShowImage(false)
                            }
                        }}>
                            Add Airline
                        </Button>
                    </ButtonGroup>
                </Field>




            </div>

            <SelectedAirline airlineList={airlineList} deleteAirline={(index) => {
                setAirlineList((prev) =>
                    prev.filter((val) => val.id !== airlineList[index].id)
                )
            }} />
        </Card>
    )
}

export default AirlineDetailInput