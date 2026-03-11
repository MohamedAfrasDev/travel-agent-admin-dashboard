"use client";

import { useState } from 'react';
import {
    Inbox,
    Send,
    FileText,
    AlertCircle,
    Trash2,
    Archive,
    Search,
    MoreVertical,
    Star,
    Edit3,
    Bookmark,
    ChevronRight
} from 'lucide-react';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';

const MAIL_FOLDERS = [
    { id: 'inbox', name: 'Inbox', icon: Inbox, count: 12 },
    { id: 'sent', name: 'Sent', icon: Send, count: 0 },
    { id: 'drafts', name: 'Drafts', icon: FileText, count: 3 },
    { id: 'spam', name: 'Spam', icon: AlertCircle, count: 5 },
    { id: 'trash', name: 'Trash', icon: Trash2, count: 0 },
    { id: 'archive', name: 'Archive', icon: Archive, count: 0 },
];

const FILTER_FOLDERS = [
    { id: 'starred', name: 'Starred', icon: Star, count: 12 },
    { id: 'important', name: 'Important', icon: Send, count: 0 },

];


const LABEL_FOLDERS = [
    { id: 'work', name: 'Work', color: "green", count: 12 },
    { id: 'personal', name: 'Personal', color: "blue", count: 0 },
    { id: 'payments', name: 'Payments', color: "red", count: 0 },
    { id: 'invoice', name: 'Invoice', color: "yellow", count: 0 },
    { id: 'blank', name: 'Blank', color: "purple", count: 0 },


];
const DUMMY_MAILS = [
    {
        id: 1,
        sender: 'GitHub',
        subject: '[GitHub] Please verify your device',
        snippet: 'Hey there, we need to verify your new device logging in to your GitHub account...',
        time: '10:42 AM',
        isUnread: true,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 2,
        sender: 'Vercel',
        subject: 'Deployment successful',
        snippet: 'Your latest commit to main has been deployed successfully. View the logs here.',
        time: '09:15 AM',
        isUnread: true,
        isStarred: true,
        folder: 'inbox',
    },
    {
        id: 3,
        sender: 'Figma',
        subject: 'Alex mentioned you in a comment',
        snippet: 'Alex commented on the new Dashboard design: "Can we make the sidebar slightly darker?"',
        time: 'Yesterday',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 4,
        sender: 'Stripe',
        subject: 'Your payout is on the way',
        snippet: 'A payout of $4,200.00 is on its way to your bank account. It should arrive in 2-3 days.',
        time: 'Yesterday',
        isUnread: false,
        isStarred: true,
        folder: 'inbox',
    },
    {
        id: 5,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 6,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 7,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 8,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 9,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 15,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
    {
        id: 52,
        sender: 'Netflix',
        subject: 'New sign-in to your account',
        snippet: 'We noticed a new sign-in to your Netflix account from a Mac device.',
        time: 'Oct 12',
        isUnread: false,
        isStarred: false,
        folder: 'inbox',
    },
];

const MailPage = () => {
    const [activeFolder, setActiveFolder] = useState('inbox');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMails = DUMMY_MAILS.filter(
        mail => mail.folder === activeFolder &&
            (mail.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mail.subject.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (

        <div className='overflow-hidden'>
            <PageBreadcrumb pageTitle="Mail" />

            <div className="flex w-full max-h-[500px] overflow-hidden bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm relative z-0">
                {/* Sidebar */}

                <div className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hidden md:flex md:flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                            <Edit3 className="w-4 h-4" />
                            Compose
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-3 px-3 custom-scrollbar">
                        <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">MAILBOX</span>

                        <div className="space-y-1 mt-5">
                            {MAIL_FOLDERS.map((folder) => {
                                const Icon = folder.icon;
                                const isActive = activeFolder === folder.id;

                                return (
                                    <button
                                        key={folder.id}
                                        onClick={() => setActiveFolder(folder.id)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isActive
                                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-4 h-4" />
                                            <span className="font-medium text-sm">{folder.name}</span>
                                        </div>
                                        {folder.count > 0 && (
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive
                                                ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                                                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}>
                                                {folder.count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>


                        <div className="mt-3">
                            <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90 ">FILTERS</span>

                            <div className="space-y-1 mt-5">
                                {FILTER_FOLDERS.map((folder) => {
                                    const Icon = folder.icon;
                                    const isActive = activeFolder === folder.id;

                                    return (
                                        <button
                                            key={folder.id}
                                            onClick={() => setActiveFolder(folder.id)}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isActive
                                                ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-4 h-4" />
                                                <span className="font-medium text-sm">{folder.name}</span>
                                            </div>
                                            {folder.count > 0 && (
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive
                                                    ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                    }`}>
                                                    {folder.count}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>



                        <div className="mt-3">
                            <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90 ">LABELS</span>

                            <div className="space-y-1 mt-5">
                                {LABEL_FOLDERS.map((folder) => {
                                    const isActive = activeFolder === folder.id;

                                    return (
                                        <button
                                            key={folder.id}
                                            onClick={() => setActiveFolder(folder.id)}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${isActive
                                                ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <ChevronRight color={folder.color} />
                                                <span className="font-medium text-sm">{folder.name}</span>
                                            </div>
                                            {folder.count > 0 && (
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive
                                                    ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                    }`}>
                                                    {folder.count}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-gray-900 overflow-hidden">
                    {/* Header */}
                    <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 justify-between shrink-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 w-full">
                        <div className="flex items-center flex-1 max-w-md">
                            <div className="relative w-full">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search mail..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all dark:text-gray-200"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Mail List */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar">
                        {filteredMails.length > 0 ? (
                            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                {filteredMails.map((mail) => (
                                    <div
                                        key={mail.id}
                                        className={`group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors ${mail.isUnread ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/30 dark:bg-gray-900/30'
                                            }`}
                                    >
                                        {/* Actions & Sender (Mobile Layout Adapter) */}
                                        <div className="flex items-center justify-between sm:justify-start sm:w-48 shrink-0 gap-3">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                    onChange={() => { }}
                                                />
                                                <button className="text-gray-300 hover:text-yellow-400 transition-colors">
                                                    <Star className={`w-4 h-4 ${mail.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                                                </button>
                                            </div>
                                            <div className={`truncate text-sm sm:flex-1 ${mail.isUnread ? 'font-semibold text-gray-900 dark:text-white' : 'font-medium text-gray-600 dark:text-gray-300'}`}>
                                                {mail.sender}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center">
                                            <span className={`block min-w-0 text-sm truncate sm:max-w-[200px] md:max-w-xs ${mail.isUnread ? 'font-semibold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-gray-200'}`}>
                                                {mail.subject}
                                            </span>
                                            <span className="hidden sm:inline mx-2 text-gray-400 shrink-0">-</span>
                                            <span className="block min-w-0 flex-1 text-sm text-gray-500 dark:text-gray-400 truncate mt-1 sm:mt-0">
                                                {mail.snippet}
                                            </span>
                                        </div>

                                        {/* Time / Hover Actions */}
                                        <div className="hidden sm:flex items-center gap-2 sm:w-20 sm:justify-end shrink-0">
                                            <div className={`text-xs ${mail.isUnread ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-500'}`}>
                                                {mail.time}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center px-4 absolute inset-0">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                                    <Inbox className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Nothing to see here</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                                    There are no emails matching your criteria in the {MAIL_FOLDERS.find(f => f.id === activeFolder)?.name} folder.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailPage;