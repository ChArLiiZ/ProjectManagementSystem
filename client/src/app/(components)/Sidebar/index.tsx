"use client"
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { Icon, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'


const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
        transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
        w-64`;

    return <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/* TOP LOGO */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    專案管理
                </div>
            </div>
            {/* Team */}
            <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
                <h1 className='text-md font-bold tracking-wide dark:text-gray-200'>
                    MADE BY CHARLIZ
                </h1>
            </div>
            {/* Navbar Links */}

        </div>
    </div>
};

interface SidebarLinkProps{
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname=== "/" && href === "/dashboard");
    const screenWidth = window.innerWidth;

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    return (
        <Link href={href} className='w-full'>
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors
                hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
                    isActive ? "bg-gray-100 text-white dark:bg-gray-600" : "" }`}
            >
            
            </div>
        </Link>
    )
}

export default Sidebar