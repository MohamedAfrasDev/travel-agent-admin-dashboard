"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Badge from "@/components/ui/badge/Badge"
import { MapPin, Calendar, Clock, Plane, Utensils, Hotel, Camera, Plus, GripVertical, Trash2, Edit2, Save, Map, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

// Mock Data
const initialDays = [
    {
        id: 1,
        title: "Arrival in Paris",
        date: "Day 1 - Oct 12",
        activities: [
            { id: 101, type: "flight", time: "10:00 AM", title: "Arrival at CDG", description: "Flight AF1234 lands at Charles de Gaulle.", icon: Plane, color: "bg-blue-500" },
            { id: 102, type: "hotel", time: "01:00 PM", title: "Check-in at Ritz Paris", description: "Luxury stay in the heart of the city.", icon: Hotel, color: "bg-indigo-500" },
            { id: 103, type: "food", time: "07:30 PM", title: "Dinner at Le Jules Verne", description: "Exclusive dining at the Eiffel Tower.", icon: Utensils, color: "bg-orange-500" },
        ]
    },
    {
        id: 2,
        title: "Exploring the City of Light",
        date: "Day 2 - Oct 13",
        activities: [
            { id: 201, type: "sightseeing", time: "09:00 AM", title: "Louvre Museum Tour", description: "Private guided tour of the masterpieces.", icon: Camera, color: "bg-pink-500" },
            { id: 202, type: "food", time: "01:00 PM", title: "Lunch at Cafe de Flore", description: "Iconic Parisian cafe experience.", icon: Utensils, color: "bg-orange-500" },
            { id: 203, type: "sightseeing", time: "04:00 PM", title: "Seine River Cruise", description: "Sunset cruise along the Seine.", icon: Map, color: "bg-teal-500" },
        ]
    }
]

export default function CreateItinerary() {
    const [days, setDays] = useState(initialDays)
    const [expandedDays, setExpandedDays] = useState<number[]>([1, 2])

    const toggleDay = (dayId: number) => {
        setExpandedDays(prev =>
            prev.includes(dayId) ? prev.filter(id => id !== dayId) : [...prev, dayId]
        )
    }

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50 p-6 lg:p-8">
            {/* Header Section */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create Itinerary</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Design a beautiful, day-by-day travel plan for your clients.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden sm:flex shadow-sm">
                        <Save className="mr-2 h-4 w-4" /> Save Draft
                    </Button>
                    <Button className="shadow-theme-xs">
                        Publish Itinerary
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

                {/* Left Column: Timeline Builder */}
                <div className="xl:col-span-2 space-y-6">
                    {days.map((day, index) => (
                        <Card key={day.id} className="border border-gray-200/60 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div
                                className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-gray-800/50 cursor-pointer border-b border-gray-100 dark:border-gray-800 rounded-t-xl"
                                onClick={() => toggleDay(day.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 font-bold text-sm">
                                        D{index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{day.title}</h3>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                            <Calendar className="w-3.5 h-3.5" /> {day.date}
                                        </p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                                    {expandedDays.includes(day.id) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                </Button>
                            </div>

                            {expandedDays.includes(day.id) && (
                                <CardContent className="p-0">
                                    <div className="p-4 sm:p-6 space-y-4 relative before:absolute before:inset-y-0 before:left-8 sm:before:left-10 before:w-0.5 before:bg-linear-to-b before:from-gray-200 before:via-gray-200 before:to-transparent dark:before:from-gray-700 dark:before:via-gray-700">
                                        {day.activities.map((activity, actIndex) => (
                                            <div key={activity.id} className="relative flex items-start gap-4 sm:gap-6 group">
                                                {/* Timeline Connector */}
                                                <div className="absolute left-4 sm:left-6 -translate-x-1/2 mt-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-900 z-10 group-hover:border-brand-500 transition-colors"></div>

                                                {/* Left Time / Icon Box */}
                                                <div className="flex-none pt-1 hidden sm:block w-24 text-right">
                                                    <p className="text-sm font-medium text-gray-500">{activity.time}</p>
                                                </div>

                                                {/* Activity Card */}
                                                <div className="flex-1 bg-white dark:bg-gray-800/80 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-[0_1px_3px_rgb(0,0,0,0.02)] hover:shadow-md transition-all group/card relative pl-12 sm:pl-4">
                                                    {/* Mobile Time */}
                                                    <div className="sm:hidden mb-2 text-xs font-medium text-muted-foreground flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {activity.time}
                                                    </div>

                                                    {/* Grip helper (visible on hover) */}
                                                    <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity cursor-grab hidden sm:flex">
                                                        <GripVertical className="h-4 w-4 text-gray-400" />
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                                        <div className="flex items-start gap-3 flex-1">
                                                            <div className={`p-2.5 rounded-lg text-white shrink-0 ${activity.color} shadow-sm hidden sm:block`}>
                                                                <activity.icon className="h-5 w-5" />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                                                    {activity.title}
                                                                </h4>
                                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                                                    {activity.description}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Actions Dropdown / Icons */}
                                                        <div className="flex items-center gap-1 sm:opacity-0 group-hover/card:opacity-100 transition-opacity self-end sm:self-start">
                                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-brand-600 hover:bg-brand-50">
                                                                <Edit2 className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-error-600 hover:bg-error-50">
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Add Activity Button */}
                                        <div className="relative flex items-center gap-6 mt-4 pt-2">
                                            <div className="absolute left-4 sm:left-6 -translate-x-1/2 w-8 h-px bg-gray-200 dark:bg-gray-700"></div>
                                            <Button variant="outline" className="ml-8 sm:ml-30 border-dashed text-gray-500 hover:text-brand-600 hover:bg-brand-50 hover:border-brand-200 transition-colors w-full sm:w-auto">
                                                <Plus className="mr-2 h-4 w-4" /> Add Activity
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    ))}

                    <Button variant="outline" className="w-full py-8 border-dashed border-2 border-gray-200 dark:border-gray-700 text-gray-500 hover:text-brand-600 hover:bg-brand-50/50 hover:border-brand-200 transition-all font-medium text-base rounded-xl">
                        <Plus className="mr-2 h-5 w-5" /> Add New Day
                    </Button>
                </div>

                {/* Right Column: Sticky Trip Summary */}
                <div className="xl:col-span-1">
                    <div className="sticky top-24">
                        <Card className="overflow-hidden border-0 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-800">
                            {/* Cover Image */}
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="https://royalalfathimatravels.com/wp-content/uploads/2025/03/pexels-photo-5659779-2048x1536.jpeg"
                                    alt="Paris Cover"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
                                    <div className="w-fit mb-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full overflow-hidden">
                                        <Badge color="primary" variant="solid" size="sm">4 Days • 3 Nights</Badge>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white leading-tight">Romantic Paris Getaway</h2>
                                </div>
                                <Button size="icon" variant="ghost" className="absolute top-3 right-3 text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md">
                                    <Edit2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <CardContent className="p-5">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-brand-50 dark:bg-brand-500/10 p-2 rounded-lg text-brand-600 dark:text-brand-400 shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">Destination</p>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Paris, France</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-blue-50 dark:bg-blue-500/10 p-2 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">Travel Dates</p>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Oct 12, 2024 - Oct 15, 2024</p>
                                        </div>
                                    </div>

                                    <hr className="border-gray-100 dark:border-gray-800 my-4" />

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Total Activities</span>
                                            <span className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline">12 Planned</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Status</span>
                                            <Badge color="warning" variant="light" size="sm">Draft</Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="bg-gray-50/80 dark:bg-gray-800/50 p-5 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800">
                                <Button className="w-full shadow-theme-xs">Generate PDF</Button>
                                <Button variant="outline" className="w-full bg-white dark:bg-gray-800">Copy Client Link</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}