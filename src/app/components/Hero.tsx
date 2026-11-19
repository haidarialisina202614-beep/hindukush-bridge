import Link from 'next/link'
import FillButton from './FillButton'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

export default function HeroPage() {
  return (
    <div>
      <section className='flex flex-col items-center text-center px-5 py-15 sm:pb-30 sm:pt-35 bg-gray-50'>
        <div className="flex flex-col justify-center items-center">
          <div className="p-1 px-4 rounded-full border border-black/15 text-gray-600 flex items-center gap-1">
            <div className="bg-[#007BE3] h-1.5 w-1.5 animate-pulse rounded-full mr-1"></div>
            <p className='text-xs sm:text-base'>Your communication bridge to the world</p>
            <Link
              href={'/about-us'}
              className='text-[#007BE3] capitalize text-xs sm:text-base'
            >
              explore now
            </Link>
          </div>
          <h1 className='text-4xl sm:text-6xl font-bold capitalize mb-5 mt-3'><span className='text-[#007BE3]'>hindukush</span> bridge<span className='text-[#007BE3] font-serif'>.</span></h1>
          <p className='text-black/50 text-base sm:text-2xl mb-8 max-w-4xl'>Your trusted path to better connectivity, delivering fast, reliable, and secure internet tailored to meet your needs every step of the way.</p>
          <div className="flex items-center gap-4">
            <FillButton link={''} name='See new packages' padding={2} px={8} resPx={5} radius='full' />
            <Link
              href={'/about-us'}
              className={`rounded-full px-5 p-2 text-gray-600 capitalize flex items-center gap-2 transition-all hover:gap-4 duration-200 border border-black/15 text-sm sm:text-base`}
            >
              learn more <p>➜</p>
            </Link>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-2 max-w-md">
          <div className="grid grid-row-2 gap-2">
            <div className="relative h-full w-full">
              <Image
                src={'/building.jpg'}
                alt='Building'
                fill
                priority
                className='object-cover'
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src={'/application.webp'}
                alt='Building'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={'/customer.png'}
              alt='Building'
              fill
              priority
              className='object-cover'
            />
          </div>
        </div> */}
      </section>
    </div>
  )
}