"use client"

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Search,
    MoreVertical,
    Phone,
    Video,
    Send,
    Smile,
    Paperclip,
    ImageIcon,
    CheckCheck,
    Info
} from 'lucide-react'

// --- MOCK DATA ---
const contacts = [
    {
        id: 1,
        name: "Alice Freeman",
        avatar: "https://ui-avatars.com/api/?name=Alice+Freeman&background=random",
        lastMessage: "Thank you for the travel guide!",
        time: "10:24 AM",
        unread: 2,
        online: true,
        role: "Premium Customer"
    },
    {
        id: 2,
        name: "David Smith",
        avatar: "https://ui-avatars.com/api/?name=David+Smith&background=random",
        lastMessage: "Can we modify the booking date?",
        time: "09:15 AM",
        unread: 0,
        online: false,
        role: "New Customer"
    },
    {
        id: 3,
        name: "Eleanor Pena",
        avatar: "https://ui-avatars.com/api/?name=Eleanor+Pena&background=random",
        lastMessage: "I need support regarding my flight.",
        time: "Yesterday",
        unread: 0,
        online: true,
        role: "Corporate Client"
    },
    {
        id: 4,
        name: "Marvin McKinney",
        avatar: "https://ui-avatars.com/api/?name=Marvin+McKinney&background=random",
        lastMessage: "Okay, I'll pay the remainder today.",
        time: "Yesterday",
        unread: 0,
        online: false,
        role: "Customer"
    },
    {
        id: 34,
        name: "Marvin McKinney",
        avatar: "https://ui-avatars.com/api/?name=Marvin+McKinney&background=random",
        lastMessage: "Okay, I'll pay the remainder today.",
        time: "Yesterday",
        unread: 0,
        online: false,
        role: "Customer"
    },
    {
        id: 41,
        name: "Marvin McKinney",
        avatar: "https://ui-avatars.com/api/?name=Marvin+McKinney&background=random",
        lastMessage: "Okay, I'll pay the remainder today.",
        time: "Yesterday",
        unread: 0,
        online: false,
        role: "Customer"
    },
    {
        id: 5,
        name: "Devon Lane",
        avatar: "https://ui-avatars.com/api/?name=Devon+Lane&background=random",
        lastMessage: "What is your refund policy?",
        time: "Tuesday",
        unread: 0,
        online: true,
        role: "Customer"
    }
]

const initialMessages = [
    {
        id: 1,
        senderId: 1,
        text: "Hi! I just reviewed the travel itinerary you sent me for the Maldives trip.",
        time: "10:15 AM",
        type: "text",
    },

    {
        id: 2,
        senderId: 'me',
        text: "Hello Alice! I'm glad you had a chance to look at it. Does everything meet your expectations?",
        time: "10:17 AM",
        type: "text",
    },
    {
        id: 3,
        senderId: 21,
        text: "Yes, it looks absolutely stunning! But I was wondering if we could add an extra day for scuba diving?",
        time: "10:20 AM",
        type: "text",
    },
    {
        id: 4,
        senderId: 'me',
        text: "Absolutely! I can easily modify the package to include a certified scuba diving session on day 4. Let me adjust the booking details.",
        time: "10:22 AM",
        type: "text",
    },
    {
        id: 5,
        senderId: 1,
        text: "Thank you for the travel guide!",
        time: "10:24 AM",
        type: "text",
    }
]

const Chat = () => {
    const [activeContact, setActiveContact] = useState(contacts[0])
    const [messageInput, setMessageInput] = useState("")
    const [messages, setMessages] = useState(initialMessages)

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!messageInput.trim()) return

        const newMessage = {
            id: messages.length + 1,
            senderId: 'me',
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "text",
        }

        setMessages([...messages, newMessage])
        setMessageInput("")
    }

    return (
        <div className="flex w-full h-[calc(100vh-140px)] bg-[#F8FAFC] dark:bg-transparent rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">

            {/* --- LEFT SIDEBAR: CONTACTS --- */}
            <div className="w-[340px] shrink-0 bg-white dark:bg-white/3 border-r border-gray-100 dark:border-gray-800 hidden md:flex flex-col h-full z-10">

                {/* Header Section */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Messages</h2>
                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded-full">
                            {contacts.reduce((acc, curr) => acc + curr.unread, 0)} New
                        </span>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search messages..."
                            className="bg-gray-50 border-none dark:bg-[#252833] pl-10 h-10 rounded-xl w-full text-sm"
                        />
                    </div>
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setActiveContact(contact)}
                            className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-800/50 ${activeContact.id === contact.id
                                ? 'bg-blue-50 dark:bg-[#252833] border-l-4 border-l-blue-600'
                                : 'hover:bg-gray-50 dark:hover:bg-[#20222B] border-l-4 border-l-transparent'
                                }`}
                        >
                            <div className="relative shrink-0">
                                <img
                                    src={contact.avatar}
                                    className="w-12 h-12 rounded-full object-cover"
                                    alt={contact.name}
                                />
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#1A1C23] rounded-full"></div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                        {contact.name}
                                    </h3>
                                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                                        {contact.time}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={`text-sm truncate w-[180px] ${contact.unread > 0
                                        ? 'text-gray-900 dark:text-gray-200 font-semibold'
                                        : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {contact.lastMessage}
                                    </p>
                                    {contact.unread > 0 && (
                                        <span className="bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0">
                                            {contact.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT SIDE: ACTIVE CHAT --- */}
            <div className="flex-1 flex flex-col h-full bg-white dark:bg-white/3 relative">

                {/* Chat Header */}
                <div className="h-[80px] shrink-0 px-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#1A1C23]/80 backdrop-blur-md z-10 w-full">
                    <div className="flex items-center gap-4">
                        <img
                            src={activeContact.avatar}
                            className="w-11 h-11 rounded-full object-cover"
                            alt={activeContact.name}
                        />
                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                                {activeContact.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {activeContact.role}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                <span className={`text-xs font-medium ${activeContact.online ? 'text-green-500' : 'text-gray-400'}`}>
                                    {activeContact.online ? 'Online now' : 'Offline'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors hidden sm:block">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors hidden sm:block">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors hidden sm:block">
                            <Info className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Chat Area (Messages) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#F8FAFC] dark:bg-gray-900">
                    {/* Timestamp divider */}
                    <div className="flex items-center justify-center my-6">
                        <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700/50">
                            Today
                        </span>
                    </div>

                    {messages.map((msg, index) => {
                        const isMe = msg.senderId === 'me'
                        const isFirstInGroup = index === 0 || messages[index - 1].senderId !== msg.senderId

                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} ${!isFirstInGroup ? 'mt-2' : 'mt-6'}`}>
                                {!isMe && isFirstInGroup && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mr-3 mt-auto mb-1 hidden sm:block">
                                        <img src={activeContact.avatar} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                {!isMe && !isFirstInGroup && <div className="w-8 mr-3 hidden sm:block"></div>}

                                <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[75%] sm:max-w-[65%]`}>
                                    <div className={`px-5 py-3 shadow-sm ${isMe
                                        ? 'bg-blue-600 text-white rounded-[24px] rounded-br-[8px]'
                                        : 'bg-white dark:bg-[#1E2028] border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 rounded-[24px] rounded-bl-[8px]'
                                        }`}>
                                        <p className="text-[14.5px] leading-relaxed wrap-break-word">{msg.text}</p>
                                    </div>

                                    {/* Message Footer Info */}
                                    <div className="flex items-center gap-1 mt-1.5 px-2">
                                        <span className="text-[11px] font-medium text-gray-400">{msg.time}</span>
                                        {isMe && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white dark:bg-[#1A1C23] border-t border-gray-100 dark:border-gray-800 sm:px-6 w-full shrink-0">
                    <form
                        onSubmit={handleSendMessage}
                        className="flex items-end gap-2 bg-gray-50 dark:bg-[#252833] rounded-2xl p-2 border border-gray-200 dark:border-gray-700/50 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all shadow-sm"
                    >
                        {/* Attachments & Tools */}
                        <div className="flex items-center gap-1 mb-1 ml-1 text-gray-400">
                            <button type="button" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-full transition-colors shrink-0">
                                <Smile className="w-5 h-5" />
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-full transition-colors shrink-0 hidden sm:block">
                                <Paperclip className="w-5 h-5 text-gray-500" />
                            </button>
                            <button type="button" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-full transition-colors shrink-0 hidden sm:block">
                                <ImageIcon className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Text Input */}
                        <textarea
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault()
                                    handleSendMessage(e)
                                }
                            }}
                            placeholder="Write your message..."
                            className="flex-1 max-h-32 min-h-[44px] bg-transparent border-none resize-none focus:outline-none focus:ring-0 p-3 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 custom-scrollbar leading-relaxed"
                            rows={1}
                        />

                        {/* Send Button */}
                        <Button
                            type="submit"
                            disabled={!messageInput.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 w-11 p-0 flex items-center justify-center shrink-0 mb-0.5 mr-0.5 shadow-md shadow-blue-600/20 disabled:opacity-50 disabled:shadow-none"
                        >
                            <Send className="w-5 h-5 ml-0.5" />
                        </Button>
                    </form>
                    <div className="text-center mt-2 hidden sm:block">
                        <p className="text-[11px] text-gray-400 font-medium">Press <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-0.5 border border-gray-200 dark:border-gray-700">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-0.5 border border-gray-200 dark:border-gray-700">Shift + Enter</kbd> for new line</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat