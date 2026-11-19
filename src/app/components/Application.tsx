import Image from "next/image"
import { Check } from 'lucide-react'

export default function Application() {
    return (
        <section className="flex flex-col gap-15 items-center py-20 px-5 sm:px-8 lg:px-15 bg-white">
            <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-center">hkb ict</h2>
                <p className="text-gray-600 text-base sm:text-lg capitalize">internet management application</p>
            </div>

            <div className="grid lg:grid-cols-3 items-center w-full">
                <div className="hidden lg:flex flex-col gap-12">
                    <div className="bg-white shadow-lg rounded-2xl pt-5">
                        <h3 className="text-lg font-bold capitalize tracking-wider px-5">your internet balance</h3>
                        <hr className="border-t border-gray-200 mt-1 mb-2" />
                        <div className="flex items-center justify-between px-6">
                            <p className="capitalize text-gray-600">data usage: 20Gb</p>
                            <div className="flex gap-1 items-center">
                                <div className="h-1.5 w-1.5 bg-[#007BE3] rounded-full" />
                                <p>Remaining: 80Gb</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center mt-4">
                            <Image
                                src={'/balance-graph.svg'}
                                alt="Balance graph"
                                height={180}
                                width={260}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <Image
                            src={'/contact.svg'}
                            alt="Contact"
                            height={50}
                            width={50}
                        />
                        <span className="capitalize text-xl font-bold w-44 text-right tracking-wide">contact customer service</span>
                    </div>
                </div>

                <div className="space-y-2 px-15 lg:hidden mb-10">
                    {['manage your internet balance', 'manage user limits', 'see internet packages', 'contact customer service'].map((works) => (
                        <div key={works} className="flex items-center gap-2">
                            <Check className="text-[#007BE3]" />
                            <p className="capitalize text-sm sm:text-base">{works}</p>
                        </div>
                    ))}
                </div>

                <Image
                    src={'/mobile-application-main.webp'}
                    alt="Application"
                    height={250}
                    width={250}
                    className="justify-self-center"
                />

                <div className="hidden lg:flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <Image
                            src={'/contact.svg'}
                            alt="Contact"
                            height={50}
                            width={50}
                        />
                        <span className="capitalize text-xl font-bold w-44 tracking-wide">contact customer service</span>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl pt-5">
                        <h3 className="text-lg font-bold capitalize tracking-wider px-5">internet packages</h3>
                        <hr className="border-t border-gray-200 mt-1" />
                        <div className="space-y-2 p-4">
                            {[1, 1.5, 2].map((speed) => (
                                <div key={speed} className="flex items-center gap-2 w-full p-2 bg-gray-50 rounded-full">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#007BE3] text-xl font-medium text-white">U2</div>
                                    <div>
                                        <p className="text-sm">Speed: {speed}Mb</p>
                                        <p className="text-gray-600 text-xs">Duration: 1 month</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
