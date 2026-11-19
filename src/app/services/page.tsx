import Link from "next/link"
import Image from "next/image"

export default function Services() {
  return (
    <main>
      <section className='flex flex-col gap-6 justify-center px-5 md:px-8 lg:px-15 min-h-[250px] md:min-h-[400px]'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-wide leading-tight capitalize'>more <br /> features <br /> with application</h1>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 w-50 md:w-full">
          <Link
            href={'https://play.google.com/store/apps/details?id=com.routerManager.hindukushbridge&hl=en'}
            className='p-2 py-1 rounded-md border border-black/20 flex items-center gap-2'
          >
            <Image
              src={'/google-play.svg'}
              alt='Google Play'
              height={30}
              width={20}
            />
            <div className='-space-y-1'>
              <p className='text-[9px]'>Get it on</p>
              <span className='tracking-widest text-sm font-bold capitalize'>google play</span>
            </div>
          </Link>

          <Link
            href={'https://apps.apple.com/us/app/hkb-ict/id6757099439'}
            className='p-2 py-1 rounded-md border border-black/20 flex items-center gap-2'
          >
            <Image
              src={'/apple-black.svg'}
              alt='App Store'
              height={30}
              width={20}
            />
            <div className='-space-y-1'>
              <p className='text-[9px]'>Download on the</p>
              <span className='tracking-widest text-sm font-bold capitalize'>app store</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-5 py-20">
        <div className="relative flex items-end md:items-center pb-15 h-[80vh] px-5 sm:px-8 lg:px-10 text-white">
          <div className="bg-[#248EEA] absolute inset-0 overflow-hidden rounded-3xl">
            <p className="text-[420px] font-bold opacity-10 text-white leading-none">Alisina</p>
          </div>
          <div className="relative space-y-5 max-w-md">
            <h2 className="relative text-2xl md:text-4xl">Easily Manage Your Internet with Our App!</h2>
            <p className="text-base md:text-xl">With our dedicated app, you have full control over your internet. Easily manage your package, restrict users, monitor usage, and connect directly with our support team. Everything is designed in a simple and user-friendly interface, always at your fingertips!</p>
            <button className="text-black rounded-full cursor-pointer border border-white bg-white px-8 p-1.5 hover:bg-transparent transition duration-200 hover:text-white">Learn more</button>
          </div>
        </div>
        <div className="absolute lg:-top-1/3 -top-20 right-2 lg:right-30">
          <Image
            src={'/mobile-application-rotate.webp'}
            alt="Application"
            height={400}
            width={400}
            className="h-80 sm:h-180 w-50 sm:w-100 object-contain"
          />
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-5 pb-20 pt-20 md:pt-30">
        <div className="relative flex items-end md:items-center pb-15 h-[80vh] px-5 sm:px-8 lg:px-10 text-white">
          <div className="bg-[#27282B] absolute inset-0 overflow-hidden rounded-3xl">
            <p className="text-[400px] font-bold opacity-10 text-white">Alisina</p>
          </div>
          <div className="relative space-y-5 max-w-md">
            <h2 className="relative text-2xl md:text-4xl">Watch the Latest Movies & Series on Movieland!</h2>
            <p className="text-base md:text-xl">On Movieland, access all the latest movies and series with the best speed and highest quality. From the newest blockbusters to the most popular shows, enjoy seamless streaming. Enter the world of cinema now!</p>
            <button className="text-black rounded-full cursor-pointer border border-white bg-white px-8 p-1.5 hover:bg-transparent transition duration-200 hover:text-white">Learn more</button>
          </div>
        </div>
        <div className="absolute lg:-top-1/4 -top-10 right-10 lg:right-30">
          <Image
            src={'/movieland-website.webp'}
            alt="Movieland Website"
            height={400}
            width={400}
            className="h-70 sm:h-200 w-70 sm:w-120 object-contain"
          />
        </div>
      </section>
    </main>
  )
}
