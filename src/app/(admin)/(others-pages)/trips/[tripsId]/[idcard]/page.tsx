"use client"

import { useRef } from "react"
import { toPng } from 'html-to-image'

const IdCard = ({ params }: { params: { idCard: string, tripsId?: string } }) => {
    // Handling generic id properties directly. 
    const { idCard } = params
    const cardRef = useRef<HTMLDivElement>(null)

    // Using placeholder details similar to the image
    const name = "MARY BROWN"
    const role = "MANAGER"
    const phone = "+00-0000-0000-00"
    const email = "contact@email.com"

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
        <div className="flex flex-col xl:flex-row gap-8 min-h-screen p-6 lg:p-12 items-start justify-center">

            {/* LEFT SIDE: ID Cards Wrapper for Download */}
            <div className="flex-1 w-full flex justify-center pb-4 max-w-full overflow-x-auto">
                {/* 
                  The wrapper has a slightly darker transparent background just inside the capture
                  so the shapes pop perfectly 
                */}
                <div
                    ref={cardRef}
                    className="flex flex-col md:flex-row gap-8 p-8 shrink-0 relative"
                    style={{ backgroundColor: '#457989' }}
                >
                    {/* --- FRONT CARD --- */}
                    <div className="relative w-[260px] h-[420px] bg-white rounded-md overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center">

                        {/* Wavy Background Elements */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 540" preserveAspectRatio="none">
                            {/* Top Left Shape */}
                            <path d="M 0 0 L 260 0 C 260 50, 200 130, 0 80 Z" fill="#D3EBEA" />
                            {/* Top Right Shape */}
                            <path d="M 340 0 L 290 0 C 350 40, 310 160, 340 220 Z" fill="#D3EBEA" />

                            {/* Bottom Wave Shape */}
                            <path d="M 0 420 C 130 380, 200 480, 340 450 L 340 540 L 0 540 Z" fill="#D3EBEA" />
                            {/* Left Bottom corner Wave */}
                            <path d="M 0 350 C 40 400, 100 500, 0 520 Z" fill="#D3EBEA" />

                            {/* Simple Clouds (Top) */}
                            <g fill="#D3EBEA" transform="translate(60, 80)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                            <g fill="#D3EBEA" transform="translate(180, 280)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                            <g fill="#white" opacity="0.8" transform="translate(230, 480)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                        </svg>

                        {/* Front Content */}
                        <div className="relative z-10 flex flex-col items-center w-full h-full pt-10 pb-4 px-6">

                            {/* Logo */}
                            <div className="text-[#325A6B] font-extrabold text-2xl tracking-widest mb-6">
                                LOGO
                            </div>

                            {/* Avatar */}
                            <div className="relative p-[5px] rounded-full bg-[#1F2B30] mb-8">
                                <div className="relative w-[190px] h-[190px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=256&bold=true`}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                            </div>

                            {/* Name & Role */}
                            <h1 className="mt-2 text-[28px] font-black text-[#436C7C] font-serif uppercase tracking-widest text-center leading-tight">
                                {name.split(' ')[0]} <br /> {name.split(' ')[1] || ''}
                            </h1>
                            <div className="text-[#325A6B] font-bold text-[15px] tracking-[0.2em] mt-3 mb-6 uppercase">
                                {role}
                            </div>

                            {/* Details Info */}
                            <div className="flex flex-col gap-2 w-full text-[#325A6B] text-[13px] font-bold mb-auto items-center">
                                <div className="mb-2 text-sm flex gap-2 tracking-widest opacity-80">
                                    <span>ID</span>
                                    <span>{idCard}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#325A6B]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <span>{phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#325A6B]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    <span>{email}</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="text-[11px] text-[#325A6B] font-bold opacity-60 tracking-wider">
                                Valid until 2026
                            </div>
                        </div>
                    </div>

                    {/* --- BACK CARD --- */}
                    <div className="relative w-[260px] h-[420px] bg-white rounded-md overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center">

                        {/* Wavy Background Elements & Plane */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 540" preserveAspectRatio="none">
                            {/* Clouds on back top */}
                            <g fill="#D3EBEA" transform="translate(60, 40) scale(1.2)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                            <g fill="#D3EBEA" transform="translate(240, 70) scale(0.8)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                            <g fill="#D3EBEA" transform="translate(40, 310) scale(0.9)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>
                            <g fill="#D3EBEA" transform="translate(250, 310) scale(0.9)">
                                <circle cx="15" cy="15" r="15" />
                                <circle cx="35" cy="10" r="10" />
                                <rect x="15" y="15" width="20" height="15" rx="5" />
                            </g>

                            {/* Earth / Large bottom hills background */}
                            <path d="M 0 450 C 40 300, 200 180, 450 450 L 340 540 L 0 540 Z" fill="#D3EBEA" />
                            <path d="M -50 480 C 150 400, 250 430, 380 540 L -50 540 Z" fill="#A4D7CF" />

                            {/* Airplane Illustration (Center Bottom) */}
                            {/* We use basic SVG primitive shapes to approximate the front-facing jet from the image */}
                            <g transform="translate(170, 420) scale(1)">
                                {/* Wings base */}
                                <path d="M -130 5 L -20 10 L 20 10 L 130 5 C 130 5, 140 10, 130 15 L -130 15 Z" fill="#2E5564" />
                                {/* Engine left */}
                                <ellipse cx="-60" cy="22" rx="10" ry="14" fill="#2E5564" />
                                {/* Engine right */}
                                <ellipse cx="60" cy="22" rx="10" ry="14" fill="#2E5564" />
                                {/* Jet Body */}
                                <ellipse cx="0" cy="5" rx="30" ry="40" fill="#FFFFFF" />
                                {/* Nose cone */}
                                <path d="M -20 -15 C 0 -40, 20 -15, 0 -35 Z" fill="#FFFFFF" />
                                <path d="M -3 30 L 3 30 L 0 -50 Z" fill="#FFFFFF" />
                                {/* Windshield */}
                                <path d="M -22 -12 Q 0 -22 22 -12 Q 0 -5 -22 -12 Z" fill="#2E5564" />
                                {/* Tail Fin */}
                                <path d="M -4 -30 L -10 -65 L 10 -65 L 4 -30 Z" fill="#2E5564" />
                            </g>

                            {/* Overlapping lower clouds */}
                            <g transform="translate(90, 460) scale(1.1)">
                                {/* Cloud filling to block the plane's lower section */}
                                <circle cx="15" cy="15" r="15" fill="#FFFFFF" />
                                <circle cx="35" cy="10" r="10" fill="#FFFFFF" />
                                <circle cx="-5" cy="20" r="10" fill="#FFFFFF" />
                                <rect x="-5" y="15" width="45" height="15" rx="5" fill="#FFFFFF" />
                            </g>
                            <g transform="translate(20, 440) scale(0.9)">
                                <circle cx="15" cy="15" r="15" fill="#FFFFFF" />
                                <circle cx="35" cy="10" r="10" fill="#FFFFFF" />
                                <rect x="15" y="15" width="20" height="15" rx="5" fill="#FFFFFF" />
                            </g>
                        </svg>

                        {/* Back Content */}
                        <div className="relative z-10 w-full h-full pt-16 px-8 flex flex-col items-center">
                            <h2 className="text-[#325A6B] text-xl font-bold tracking-widest font-serif uppercase mb-10">
                                TERM & CONDITION
                            </h2>

                            <div className="text-[#325A6B] text-center text-[10.5px] leading-[1.8] flex flex-col gap-6 font-bold px-2 opacity-90">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Details and Actions */}
            <div className="w-full xl:w-[300px] shrink-0 bg-white rounded-xl shadow-xl p-8 flex flex-col gap-6 sticky top-12">
                <h2 className="text-2xl font-black text-[#224859] border-b border-gray-100 pb-4">
                    Download ID Component
                </h2>

                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Traveller Name</span>
                    <span className="text-lg font-bold text-gray-800">{name}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Traveller ID</span>
                    <div className="font-mono bg-[#EDF3F5] p-3 rounded-md text-[#224859] font-bold text-sm tracking-wider border border-gray-100">
                        {idCard}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Trip ID</span>
                    <div className="font-mono bg-[#EDF3F5] p-3 rounded-md text-[#224859] font-bold text-sm tracking-wider border border-gray-100">
                        {params.tripsId || 'Unknown Trip'}
                    </div>
                </div>

                <p className="text-xs font-semibold text-gray-400 mt-2">
                    Clicking download will capture both the front and the back of the ID card simultaneously exactly as they appear in the viewer.
                </p>

                <button
                    onClick={downloadCard}
                    className="mt-2 w-full bg-[#183944] hover:bg-[#112932] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] active:shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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