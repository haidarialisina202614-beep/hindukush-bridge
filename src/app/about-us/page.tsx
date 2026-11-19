import Image from 'next/image'

export default function AboutUs() {
  return (
    <div>
      <main>
        <section className='flex flex-col items-center justify-center gap-6 text-center h-[260px] md:h-[400px]'>
          <Image
            src={'/logo.webp'}
            alt='Logo'
            height={130}
            width={130}
            className='h-15 w-60 object-contain'
          />
          <h1 className='text-lg md:text-4xl max-w-3xl px-5'>Empowering Your Connection to a Faster, Smarter, and Boundless World</h1>
        </section>

        <section className='grid lg:grid-cols-[4fr_6fr] items-center gap-8 max-w-6xl mx-auto px-5 sm:px-6 md:px-8 pb-20'>
          <Image
            src={'/about.webp'}
            alt='About image'
            height={420}
            width={420}
          />
          <div className="space-y-6">
            <h2 className='text-2xl md:text-4xl font-bold tracking-wider'>Hindukush Bridge: Connecting Afghanistan to the Digital World</h2>
            <p className='text-black/80 text-base sm:text-lg'>Hindukush Bridge ICT Services Company is a Kabul-based, 100% Afghan-owned provider of internet and ICT services, catering to NGOs, government entities, businesses, and home users across Afghanistan. Managed by a team of experienced professionals with over a decade of expertise in the ISP and ICT sectors, the company ensures reliable, high-quality services.</p>
            <p className='text-black/80 text-base sm:text-lg'>With strong partnerships in the satellite and telecom industries, Hindukush Bridge offers value-added services nationwide, supported by a 24/7 Network Operation Center. Operating under License No. 66724 issued by the Ministry of Commerce and Industry, the company employs skilled professionals specializing in project management, surveying, analysis, budgeting, reporting, and data solutions.</p>
          </div>
        </section>

        <section className='flex flex-col items-center gap-15 max-w-5xl mx-auto px-5 pb-15'>
          <div className="text-center space-y-2">
            <h2 className='text-2xl md:text-4xl font-bold capitalize tracking-wider'>covered provinces</h2>
            <p className='text-black/80 text-base md:text-xl max-w-md'>High-speed Internet Coverage in Kabul, Herat, Mazar-e-Sharif and Jowzjan</p>
          </div>

          <Image
            src={'/map.webp'}
            alt='Map'
            height={2000}
            width={1000}
          />
        </section>
      </main>
    </div>
  )
}