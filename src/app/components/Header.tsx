'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from 'lucide-react'
import FillButton from "./FillButton";

interface NavLink {
    label: string;
    link: string;
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('English')

    const navlinks: NavLink[] = [
        { label: 'Home', link: '/' },
        { label: 'About us', link: '/about-us' },
        { label: 'Packages', link: '/packages' },
        { label: 'Services', link: '/services' },
        { label: 'Contact us', link: '/contact-us' },
    ]

    const pathname = usePathname();

    return (
        <header className="sticky bg-white top-0 z-50 w-full p-2">
            <nav className="mx-auto max-w-7xl px-3 lg:px-10 py-2 flex items-center justify-between">
                <Link
                    href={'/'}
                >
                    <Image
                        src={'/logo.svg'}
                        alt="Logo"
                        height={150}
                        width={120}
                        priority
                    />
                </Link>

                <ul className="lg:flex hidden items-center gap-10">
                    {navlinks.map((nav, id) => {
                        if (nav.label === 'Packages') {
                            return (
                                <li
                                    key={id}
                                    className="relative"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 py-2 text-gray-600 hover:text-black transition"
                                    >
                                        {nav.label} <ChevronDown size={14} className={`transform ${open ? 'rotate-180' : ''} transition`} />
                                    </button>
                                    {open && (
                                        <div className="absolute top-10 bg-white p-2 rounded-xl border border-gray-100 shadow-xs w-45 -ml-4">
                                            {['Kabul', 'Herat', 'Mazar', 'Jawzjan'].map((pkg) => (
                                                <button
                                                    key={pkg}
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="p-2 px-4 w-full text-left text-black/60 hover:bg-gray-100 rounded-lg cursor-pointer transition duration-200 font-medium text-sm"
                                                >
                                                    {pkg}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            )
                        } return (
                            <li key={id}>
                                <Link
                                    href={nav.link}
                                    className={`hover:text-black transition ${pathname === nav.link ? 'text-black' : 'text-gray-600'}`}
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden cursor-pointer"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <div className="lg:flex hidden items-center gap-3">
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="p-1.5 text-gray-600 bg-white border border-black/10 cursor-pointer flex items-center justify-center gap-2 rounded-md w-30"
                        >
                            {selectedLanguage} <ChevronDown size={14} className={`transform ${isLanguageOpen ? 'rotate-180' : ''} transition`} />
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute top-12 space-y-1 bg-white border border-black/10 p-1 rounded-xl">
                                {['English', 'فارسی'].map((language) => (
                                    <button
                                        key={language}
                                        type="button"
                                        onClick={() => {
                                            setIsLanguageOpen(false);
                                            setSelectedLanguage(language);
                                        }}
                                        className={`p-2 w-full  rounded-lg cursor-pointer ${selectedLanguage === language ? 'bg-gray-100/90 text-black' : 'text-gray-600 hover:bg-gray-100/60 transition'}`}
                                    >
                                        {language}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <FillButton link="https://www.movieland.com" name="Movieland" padding={1.5} px={6} resPx={6} radius="md" />

                </div>
            </nav>

            {menuOpen && (
                <div className="lg:hidden fixed inset-0 p-2 bg-white">
                    <div className="h-full w-full bg-linear-to-b from-[#ECF2FF] via-25% via-white to-white flex flex-col gap-5 px-3 py-2 rounded-xl">
                        <div className="flex items-center justify-between">
                            <Link
                                href={'/'}
                            >
                                <Image
                                    src={'/logo.svg'}
                                    alt="Logo"
                                    height={150}
                                    width={120}
                                    priority
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="cursor-pointer"
                            >
                                <X />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            {navlinks.map((nav, index) => {
                                if (nav.label === 'Packages') {
                                    return (
                                        <li
                                            key={index}
                                            onMouseEnter={() => setOpen(true)}
                                            onMouseLeave={() => setOpen(false)}
                                            onClick={() => setOpen(!open)}
                                            className="list-none w-full"
                                        >
                                            <div
                                                className={`bg-white rounded-md w-full font-medium px-3 p-2.5 text-sm text-gray-600 flex items-center justify-between`}
                                            >
                                                <p>{nav.label}</p>
                                                <ChevronDown size={14} className={`transform ${open ? 'rotate-180' : ''} transition`} />
                                            </div>
                                            {open && (
                                                <div className="bg-white px-2">
                                                    {['Kabul', 'Herat', 'Mazar', 'Jawzjan'].map((pkg) => (
                                                        <button
                                                            key={pkg}
                                                            type="button"
                                                            onClick={() => setOpen(false)}
                                                            className="p-2 px-4 w-full text-left text-black/60 hover:bg-gray-100 rounded-lg cursor-pointer transition duration-200 font-medium text-sm"
                                                        >
                                                            {pkg}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    )
                                } return (
                                    <Link
                                        key={index}
                                        href={nav.link}
                                        onClick={() => setMenuOpen(false)}
                                        className={`bg-white rounded-md w-full font-medium px-3 p-2.5 text-sm ${pathname === nav.link ? 'text-[#007BE3]' : 'text-gray-600 hover:text-gray-800 transition'}`}
                                    >
                                        {nav.label}
                                    </Link>
                                )

                            })}
                            <div>
                                <div
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="px-3 p-2.5 bg-white text-gray-600 cursor-pointer flex items-center justify-between gap-2 rounded-md"
                                >
                                    <p className="text-sm font-medium">Language ({selectedLanguage})</p>
                                    <ChevronDown size={14} className={`transform ${isLanguageOpen ? 'rotate-180' : ''} transition`} />
                                </div>

                                {isLanguageOpen && (
                                    <div className="px-3">
                                        {['فارسی', 'English'].map((language) => (
                                            <div
                                                key={language}
                                                onClick={() => {
                                                    setIsLanguageOpen(false);
                                                    setSelectedLanguage(language);
                                                }}
                                                className={`px-3 p-2 rounded-md cursor-pointer ${selectedLanguage === language ? 'text-[#007BE3]' : 'text-gray-600 hover:bg-gray-100 transition'}`}
                                            >
                                                {language}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
