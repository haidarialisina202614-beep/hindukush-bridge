import Image from 'next/image'
import FillButton from './FillButton'
import { internetPackages } from '../lib/package'
import OutlineButton from './OutlineButton'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Packages() {
    return (
        <section className='grid lg:grid-cols-[4.5fr_6fr] gap-10 max-w-7xl mx-auto px-5 md:px-10 py-15 sm:py-20'>
            <div className="flex flex-col justify-between">
                <div className="space-y-9">
                    <h2 className='text-2xl md:text-4xl font-bold tracking-wider max-w-md'>Find the internet package for your needs</h2>
                    <FillButton link={''} name='See all packages' padding={2} px={6} radius='full' resPx={5} />
                </div>
                <div className="space-y-3 hidden sm:flex flex-col">
                    <p className='text-black/60 max-w-xs'>If you need help choosing the right internet package, we're here to assist you!</p>
                    <Link
                        href={'/contact-us'}
                        className='text-[#007BE3]'
                    >
                        Contact us ➜
                    </Link>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 px-8 sm:px-0 gap-5">
                {internetPackages.map((pkg, id) => (
                    <article key={id} className='outline outline-black/10 border-6 border-white bg-linear-to-b from-[#EBF2FF] via-white to-white flex flex-col items-center p-8 pb-15 rounded-4xl'>
                        <div className={`bg-[#DDEDFF] px-5 p-1.5 rounded-full ${pkg.isUnlimited ? 'flex items-center gap-2' : ''}`}>
                            {pkg.isUnlimited && (
                                <Image src='/unlimited.svg' alt='Unlimited' height={20} width={20} />
                            )}
                            <p className='text-[#007BE3] font-medium text-sm'>{pkg.badge}</p>
                        </div>
                        <span className={`text-5xl md:text-6xl font-bold mt-10 md:mt-15 ${pkg.freeTime ? 'mb-0' : 'mb-6'}`}>{pkg.internet}</span>
                        {pkg.speed && <p className='mt-2 mb-2'>{pkg.speed}</p>}
                        {pkg.free && <p className='text-sm mb-6'>{pkg.free} <span className='text-gray-600'>{pkg.freeTime}</span></p>}
                        <OutlineButton />
                        <hr className='border-t border-gray-300 w-full mt-10 mb-5' />
                        <ul className='space-y-2 w-full'>
                            {pkg.features.map((feature, index) => (
                                <li key={index} className='flex items-center gap-4'>
                                    <Check className='text-[#6ED704]' />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
            <div className="space-y-3 sm:hidden">
                <p className='text-black/60 max-w-xs'>If you need help choosing the right internet package, we're here to assist you!</p>
                <Link
                    href={'/contact-us'}
                    className='text-[#007BE3]'
                >
                    Contact us ➜
                </Link>
            </div>
        </section>
    )
}
