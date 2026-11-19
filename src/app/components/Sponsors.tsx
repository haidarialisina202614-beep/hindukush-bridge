'use client'
import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function Sponsors() {
    const collaborators = [
        'nh.svg',
        'shelter.svg',
        'unhcr.svg',
        'ap.svg',
    ]

    return (
        <section className='flex flex-col items-center gap-15 py-20 px-5 md:px-30'>
            <div className="flex items-center gap-5">
                <div className="h-[2px] w-25 sm:w-40 bg-linear-to-l from-gray-300/60 to-transparent" />
                <p className='text-gray-500 text-sm sm:text-base text-center'>Collaboration with 100+ of companies</p>
                <div className="h-[2px] w-25 sm:w-40 bg-linear-to-r from-gray-300/60 to-transparent" />
            </div>

            <Marquee
                gradient
                gradientWidth={100}
                pauseOnHover
                pauseOnClick

                className='max-w-4xl mx-auto'
            >
                {collaborators.map((collaborator, index) => (
                    <div key={index} className='relative h-6 md:h-12 w-20 md:w-32 mx-6 md:mx-12'>
                        <Image
                            src={collaborator}
                            alt='Collaborator'
                            fill
                            className='object-contain'
                        />
                    </div>
                ))}
            </Marquee>

            <div className="shadow-md w-full mt-6 rounded-tl-4xl rounded-br-4xl flex sm:flex-row items-center justify-around py-4 sm:py-6 border border-gray-200/70 bg-[#007BE3] text-white">
                <div className="flex flex-col sm:gap-2 items-center sm:border-r-2 border-white/60 flex-1">
                    <span className="text-lg md:text-5xl font-bold">10k</span>
                    <p className="text-xs md:text-xl tracking-wide">Happy clients</p>
                </div>
                <div className="flex flex-col sm:gap-2 items-center sm:border-r-2 border-white/60 flex-1">
                    <span className="text-lg md:text-5xl font-bold">99%</span>
                    <p className="text-xs md:text-xl tracking-wide">Satisfied clients</p>
                </div>
                <div className="flex flex-col sm:gap-2 items-center flex-1">
                    <span className="text-lg md:text-5xl font-bold">115</span>
                    <p className="text-xs md:text-xl tracking-wide">Active antenna</p>
                </div>
            </div>
        </section>
    )
}
