import { Cable, Network, Wifi } from "lucide-react";

interface Service {
    icon: any;
    title: string;
    subTitle: string;
}

export default function Services() {
    const services: Service[] = [
        { icon: Wifi, title: 'high-speed wireless internet', subTitle: 'Providing fast, reliable, and cable-free connectivity with extensive coverage, ideal for both residential and commercial use.' },
        { icon: Cable, title: 'fiber optic internet', subTitle: 'Ultra-fast, stable, and low-latency connectivity, perfect for businesses and high-demand users.' },
        { icon: Network, title: 'dedicated business internet', subTitle: 'Exclusive, stable, and high-reliability connectivity for organizations and businesses, ideal for servers, video conferencing, and online operations.' },
    ]

    return (
        <section className='py-10 sm:py-15 flex flex-col items-center gap-15'>
            <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold capitalize text-center">services</h2>
                <p className="text-gray-600 text-base sm:text-lg">Lightening-Fast Connectivity</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5 md:px-15 lg:px-30">
                {services.map((service, index) => (
                    <article key={index} className="group hover:bg-linear-to-b hover:from-[#EBF2FF] hover:via-white transition-all group-hover:to-white shadow-lg rounded-2xl bg-white p-6 space-y-4">
                        <div className="bg-gray-100 rounded-md p-3 w-fit">
                            <service.icon className="group-hover:text-[#007BE3]" />
                        </div>
                        <h3 className="text-2xl capitalize group-hover:text-[#007BE3]">{service.title}</h3>
                        <p className="text-black/80">{service.subTitle}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
