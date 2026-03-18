"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { AirlineList } from "../../../../../constant/Airlinelist";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { InfoIcon } from "lucide-react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];


interface InputTravellersDetailsProps {
    noOfTravellers: number;
    isShowTravellersDetails: boolean;
}

const InputTravellersDetails = ({
    noOfTravellers,
    isShowTravellersDetails,
}: InputTravellersDetailsProps) => {

    // ✅ ONE STATE PER TRAVELLER (BEST APPROACH)
    const [travellers, setTravellers] = React.useState(
        Array.from({ length: noOfTravellers }, () => ({
            name: "",
            email: "",
            phone: "",
            passport: "",
            photo: "",
            airline: "",
            type: "Adult",
        }))
    );

    // ✅ Sync when count changes
    React.useEffect(() => {
        setTravellers((prev) => {
            const newTravellers = [...prev];

            if (noOfTravellers > prev.length) {
                // ➕ Add new travellers
                for (let i = prev.length; i < noOfTravellers; i++) {
                    newTravellers.push({
                        name: "",
                        email: "",
                        phone: "",
                        passport: "",
                        photo: "",
                        airline: "",
                        type: "Adult",
                    });
                }
            } else if (noOfTravellers < prev.length) {
                // ➖ Remove extra travellers (but keep existing data)
                return newTravellers.slice(0, noOfTravellers);
            }

            return newTravellers;
        });
    }, [noOfTravellers]);

    // ✅ Update helper
    const updateTraveller = (
        index: number,
        field: "airline" | "type" | "name" | "email" | "phone" | "passport" | "photo",
        value: string
    ) => {
        setTravellers((prev) => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: value };
            return updated;
        });
    };
    const [refreshTrigger, setRefreshTrigger] = useState<number>(0)
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const handleChange = (uploadedFile: File) => {
        setFile(uploadedFile)
        setPreview(URL.createObjectURL(uploadedFile))
        //  uploadFileToStorage(uploadedFile) // pass directly
    }
    return (
        <Card className="dark:bg-white/3 px-5 py-3">
            <h2 className="text-lg">Travellers Details</h2>

            {isShowTravellersDetails ? (
                <p className="text-center text-lg">
                    Complete the above step to continue
                </p>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* ✅ SINGLE ACCORDION */}
                        <Accordion
                            type="multiple"
                            defaultValue={Array.from(
                                { length: noOfTravellers },
                                (_, i) => `item-${i + 1}`
                            )}
                        >
                            {travellers.map((traveller, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                >
                                    <AccordionTrigger>
                                        <h3 className="text-xl">
                                            Traveller {traveller.name ? (`| ${traveller.name}`) : (`#${index + 1}`)}
                                        </h3>
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        <div className="">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

                                                {/* NAME */}
                                                <Field>
                                                    <FieldLabel>Name</FieldLabel>
                                                    <Input placeholder="Enter Traveller Name" onChange={(e) => {
                                                        updateTraveller(index, "name", e.target.value)
                                                    }} value={traveller.name} />
                                                </Field>

                                                {/* EMAIL */}
                                                <Field>
                                                    <FieldLabel>Email</FieldLabel>
                                                    <Input placeholder="Enter Traveller Email" value={traveller.email} onChange={(e) => {
                                                        updateTraveller(index, "email", e.target.value)
                                                    }} />
                                                </Field>

                                                {/* PHONE */}
                                                <Field>
                                                    <FieldLabel>Phone</FieldLabel>
                                                    <InputGroup className="h-10">
                                                        <InputGroupInput id="input-group-url" placeholder="Enter your phone number" value={traveller.phone} onChange={(e) => {
                                                            updateTraveller(index, "phone", e.target.value)

                                                        }} type="number" />
                                                        <InputGroupAddon>
                                                            <InputGroupText>+94</InputGroupText>
                                                        </InputGroupAddon>

                                                    </InputGroup>
                                                </Field>

                                                {/* TYPE */}
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-full"
                                                    >
                                                        <Field>
                                                            <FieldLabel>Type</FieldLabel>
                                                            <Input
                                                                value={traveller.type}
                                                                disabled
                                                            />
                                                        </Field>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent>
                                                        <DropdownMenuGroup>
                                                            {["Adult", "Child", "Infant"].map((type) => (
                                                                <DropdownMenuItem
                                                                    key={type}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        updateTraveller(index, "type", type);
                                                                    }}
                                                                >
                                                                    {type}
                                                                </DropdownMenuItem>
                                                            ))}
                                                        </DropdownMenuGroup>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>

                                                {/* PASSPORT */}
                                                <Field>
                                                    <FieldLabel>Passport</FieldLabel>
                                                    <ButtonGroup>
                                                        <Input
                                                            disabled
                                                            placeholder={`Upload Passport Traveller ${index + 1}`}
                                                        />
                                                        <Button variant="outline" className="h-10">
                                                            Upload
                                                        </Button>
                                                    </ButtonGroup>
                                                </Field>

                                                {/* AIRLINE */}
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-full"
                                                    >
                                                        <Field>
                                                            <FieldLabel>Airline</FieldLabel>
                                                            <Input
                                                                value={
                                                                    traveller.airline || "Select Airline"
                                                                }
                                                                disabled
                                                            />
                                                        </Field>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent>
                                                        <DropdownMenuGroup>
                                                            {AirlineList.airLineList.map((airline) => (
                                                                <DropdownMenuItem
                                                                    key={airline.name}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        updateTraveller(
                                                                            index,
                                                                            "airline",
                                                                            airline.name
                                                                        );
                                                                    }}
                                                                    className="flex items-center gap-2 py-2"
                                                                >
                                                                    <Image
                                                                        src={airline.image}
                                                                        alt=""
                                                                        width={30}
                                                                        height={30}
                                                                    />
                                                                    {airline.name}
                                                                </DropdownMenuItem>
                                                            ))}
                                                        </DropdownMenuGroup>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>

                                            </div>
                                            <div className="flex md:flex-row flex-col mt-5 gap-5">
                                                <FileUploader
                                                    handleChange={handleChange}
                                                    name="file"
                                                    types={fileTypes}
                                                >
                                                    <Card className="dark:bg-white/3 p-5">
                                                        <div className="flex flex-col items-center justify-center gap-2">
                                                            <p className="text-sm font-medium">Upload Photo</p>
                                                            <p className="text-xs text-muted-foreground">Click or drag file here to upload</p>
                                                        </div>
                                                    </Card>

                                                </FileUploader>

                                                <Field>
                                                    <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
                                                    <InputGroup>
                                                        <InputGroupTextarea
                                                            id="block-end-textarea"
                                                            placeholder="Write a comment..."
                                                        />

                                                    </InputGroup>

                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </AnimatePresence>
            )}
        </Card>
    );
};

export default InputTravellersDetails;