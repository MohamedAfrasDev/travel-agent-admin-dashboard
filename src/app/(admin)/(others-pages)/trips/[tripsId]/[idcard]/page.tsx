"use client"

import { useRef } from "react"
import { toPng } from 'html-to-image'
import { Instagram, Twitter, Facebook } from 'lucide-react'

import Logo from "../../../../../../../public/images/logo/rf-logo.png"
import Image from "next/image"

const IdCard = ({ params }: { params: { idCard: string, tripsId?: string } }) => {
    // Handling generic id properties directly. 
    const { idCard } = params
    const cardRef = useRef<HTMLDivElement>(null)

    // Using placeholder details similar to the image
    const name = "JANE AUSTEN"
    const role = "TRAVEL AGENT"

    const downloadCard = async () => {
        if (!cardRef.current) return

        try {
            await new Promise(r => setTimeout(r, 100))

            const dataUrl = await toPng(cardRef.current, {
                pixelRatio: 2,
                cacheBust: true,
                style: {
                    transform: 'scale(1)',
                    margin: '0',
                }
            })

            const link = document.createElement("a")
            link.href = dataUrl
            link.download = `id-card-${idCard}.png`
            link.click()
        } catch (err) {
            console.error('Capture failed:', err)
        }
    }

    return (
        <div className="flex flex-col xl:flex-row gap-8 min-h-screen p-6 lg:p-12 items-start justify-center bg-gray-50 dark:bg-gray-900">

            {/* LEFT SIDE: ID Cards Wrapper for Download */}
            <div className="flex-1 w-full flex justify-center pb-4 max-w-full overflow-x-auto">
                {/* A light purple background matching the presentation in the reference */}
                <div
                    ref={cardRef}
                    className="flex flex-col md:flex-row gap-8 p-8 shrink-0 relative bg-[#AAB4EE]"
                >
                    {/* --- FRONT CARD --- */}
                    <div className="relative w-[260px] h-[420px] bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col items-center shrink-0">

                        {/* Abstract Background SVG (Front) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 260 420" preserveAspectRatio="none">
                            {/* Top Left Green Leaf SVG */}
                            <path d="M 0 0 L 50 0 C 60 70, 30 120, 0 160 Z" fill="#7FCDA5" />
                            <path d="M 0 0 L 80 0 L 60 40 Z" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                            <path d="M 80 0 L 25 100" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Top Right Cloud SVG */}
                            <path d="M 260 55 C 220 50, 200 80, 200 110 C 200 130, 260 110, 260 110 Z" fill="#EAEBFA" />
                            <path d="M 260 65 C 230 45, 185 60, 205 110 C 210 125, 260 110, 260 110" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            <circle cx="210" cy="35" r="5" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Left Middle Shape */}
                            <circle cx="25" cy="245" r="5" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Right Middle Plus */}
                            <path d="M 235 145 L 245 145 M 240 140 L 240 150" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                        </svg>

                        {/* Front Content */}
                        <div className="relative z-10 flex flex-col items-center w-full h-full pt-8 pb-4">

                            {/* Logo */}
                            <div className="w-22 mb-1 flex justify-center">
                                <Image src={Logo} alt="Travel Agency Logo" width={100} height={100} className="w-full h-auto object-contain" />
                            </div>

                            {/* Avatar Section */}
                            <div className="relative mb-6 flex justify-center items-center w-full mt-2">
                                {/* Yellow Circular Background */}
                                <div className="absolute w-[100px] h-[100px] bg-[#F1C84D] rounded-full"></div>
                                {/* User Portrait Container */}
                                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden flex items-end justify-center z-10 mt-5 shadow-sm border border-transparent">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=transparent&color=333&size=256&bold=true`}
                                        alt="Profile"
                                        className="w-[110%] h-[110%] object-cover object-center"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                            </div>

                            {/* Name & Role */}
                            <h1 className="text-[24px] font-[900] text-[#6B3C9B] uppercase tracking-wide leading-[1.1] text-center mt-2 px-4 w-full">
                                {name.split(' ')[0]} {name.split(' ')[1]}
                            </h1>
                            <div className="text-[#2D2D2D] text-[13px] tracking-wide mt-2 pb-[10px] w-[70%] text-center font-medium border-b border-[#2D2D2D]">
                                {role}
                            </div>

                            {/* Details Info */}
                            <div className="flex flex-col items-center mt-6 w-full">
                                <div className="text-[14px] text-[#2D2D2D] font-medium tracking-wide">
                                    ID: {idCard}
                                </div>
                                <div className="text-[9px] text-[#2D2D2D] font-semibold uppercase tracking-wider mt-5 opacity-80">
                                    Expired Date: 7/04/2030
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- BACK CARD --- */}
                    <div className="relative w-[260px] h-[420px] bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col items-center shrink-0">

                        {/* Abstract Background SVG (Back) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 260 420" preserveAspectRatio="none">
                            {/* Top Left Elements */}
                            <path d="M 0 85 C 30 85, 30 35, 15 0" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                            <circle cx="180" cy="15" r="5" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                            <path d="M 45 65 L 55 65 M 50 60 L 50 70" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Top Right Leaf SVG */}
                            <path d="M 210 0 L 260 0 L 260 60 C 240 60, 220 30, 210 0 Z" fill="#7FCDA5" />
                            <path d="M 220 0 L 260 0 L 260 120 C 240 100, 220 80, 230 0 Z" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                            <path d="M 260 40 L 245 75 Z" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Bottom Left Elements */}
                            <path d="M 0 330 C 40 370, 60 400, 30 420" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />

                            {/* Bottom Right Elements */}
                            <circle cx="230" cy="375" r="3" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                            <path d="M 235 345 L 245 345 M 240 340 L 240 350" fill="none" stroke="#2D2D2D" strokeWidth="1.5" />
                        </svg>

                        {/* Back Content */}
                        <div className="relative z-10 w-full h-full pt-10 px-8 flex flex-col items-center">

                            {/* Logo */}
                            <div className="w-14 mb-[2.2rem] flex justify-center mt-2">
                                <Image src={Logo} alt="Travel Agency Logo" width={60} height={60} className="w-full h-auto object-contain" />
                            </div>

                            <h2 className="text-[#2D2D2D] text-[13px] font-[500] tracking-wide mb-[1.7rem]">
                                TERMS AND CONDITIONS
                            </h2>

                            <div className="w-full flex flex-col gap-[1.35rem] px-2 mb-auto">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-start gap-[0.85rem]">
                                        <div className="mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full border-[2px] border-[#2D2D2D]"></div>
                                        <p className="text-[#2D2D2D] text-[10.5px] leading-[1.3] font-medium opacity-90 tracking-tight">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer / Socials */}
                            <div className="mb-8 mt-4 flex flex-col items-center gap-2">
                                <div className="flex gap-2.5">
                                    <div className="w-[20px] h-[20px] bg-[#F1C84D] rounded-full flex items-center justify-center text-[#2D2D2D]">
                                        <Instagram size={11} strokeWidth={2.5} />
                                    </div>
                                    <div className="w-[20px] h-[20px] bg-[#F1C84D] rounded-full flex items-center justify-center text-[#2D2D2D]">
                                        <Twitter size={11} strokeWidth={2.5} fill="currentColor" stroke="none" />
                                    </div>
                                    <div className="w-[20px] h-[20px] bg-[#F1C84D] rounded-full flex items-center justify-center text-[#2D2D2D]">
                                        <Facebook size={11} fill="currentColor" stroke="none" />
                                    </div>
                                </div>
                                <p className="text-[8px] font-bold text-[#2D2D2D] tracking-[0.15em] mt-1">@TRAVELAGENCY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Details and Actions */}
            <div className="w-full xl:w-[320px] shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col gap-6 sticky top-12">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                    Digital ID Card
                </h2>

                <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Traveller Name</span>
                    <span className="text-base font-semibold text-gray-800">{name}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Traveller ID</span>
                    <div className="font-mono bg-gray-50 px-3 py-2 rounded-md text-gray-800 font-semibold text-sm tracking-widest border border-gray-100">
                        {idCard}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Trip ID</span>
                    <div className="font-mono bg-gray-50 px-3 py-2 rounded-md text-gray-800 font-semibold text-sm tracking-widest border border-gray-100">
                        {params.tripsId || 'Unknown'}
                    </div>
                </div>

                <button
                    onClick={downloadCard}
                    className="mt-4 w-full bg-[#183944] hover:bg-[#112932] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Download Digital ID
                </button>
            </div>
        </div>
    )
}

export default IdCard;