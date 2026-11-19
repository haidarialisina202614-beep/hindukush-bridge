import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import FooterButton from "./FooterButton";

export default function Footer() {
    return (
        <footer className='max-w-6xl px-5 bg-[#EBF3FA] mx-auto py-10 md:py-15 rounded-t-2xl'>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
                    <p className="text-black/80 text-sm mt-6 mb-2">Hindukush Bridge ICT Services Company is a Kabul-based company specializing in providing internet services to NGOs, government entities, businesses, and home users in Afghanistan.</p>
                    <div className="flex gap-4 items-center">
                        {[FaFacebook, FaInstagram, FaTelegram].map((Icon, index) => (
                            <div key={index} className="p-2 border border-black/10 rounded-sm curor-pointer">
                                <Icon size={16} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
                    <span className="capitalize">packages</span>
                    <ul className="space-y-2">
                        {['herat packages', 'kabul packages', 'mazar-e-sharif packages', 'jawzjan packages'].map((pkg, index) => (
                            <li key={index} className="text-black/80 text-sm capitalize">
                                {pkg}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
                    <span className="capitalize">services</span>
                    <ul className="space-y-2">
                        {['high-Speed wireless internet', 'fiber optic internet', 'dedicated business internet'].map((srv, index) => (
                            <li key={index} className="text-black/80 text-sm capitalize">
                                {srv}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center text-center md:text-start  md:items-start gap-4">
                    <span className="capitalize">helpful links</span>
                    <ul className="space-y-2">
                        {['Services', 'About us', 'Contact us', 'FAQs'].map((srv, index) => (
                            <li key={index} className="text-black/80 text-sm">
                                {srv}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="border-t border-black/15 my-8" />
            <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                    <FooterButton link="https://play.google.com/store/apps/details?id=com.routerManager.hindukushbridge&hl=en" icon="/google-play.svg" des="Get it on" name="google play" />
                    <FooterButton link="https://apps.apple.com/us/app/hkb-ict/id6757099439" icon="/app-store.svg" des="Download on the" name="app store" />
                    <FooterButton link="https://www.movieland.com" icon="/movieland.webp" des="Free movies on" name="movieland" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <li className="text-xs capitalize tracking-wider text-black/80 list-none">© 2026 hindukush bridge, all rights reserved.</li>
                    <ul className="flex items-center gap-4">
                        {['security', 'privacy', 'terms'].map((text) => (
                            <li key={text} className="text-xs capitalize tracking-wider text-black/80 cursor-pointer">
                                <Link href={'/'}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
