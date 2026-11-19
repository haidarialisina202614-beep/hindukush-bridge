'use client'
import Image from "next/image";
import Form from "../components/Form";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import { Mail, MapPin, Music4, PhoneCall } from "lucide-react";

interface ConnectionMethod {
  icon: IconType;
  title: string;
  subTitle: string;
}

export default function ContactUs() {
  const [selectedTab, setSelectedTab] = useState<string>('Kabul');

  const connectionMethods: ConnectionMethod[] = [
    { icon: PhoneCall, title: 'sales', subTitle: '+93785222722' },
    { icon: Music4, title: 'support', subTitle: '+93785222722' },
    { icon: Mail, title: 'email', subTitle: 'sales@hindukush-bridge.com' },
    { icon: MapPin, title: 'location', subTitle: 'Street 10, Old Taimani Kabul, 1007, Afghanistan' },
  ]

  return (
    <div>
      <main>
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 py-15">
          <div className="flex flex-col justify-around">
            <div className="flex flex-col items-center text-center md:items-start md:text-start">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4">Contact us</h1>
              <p className="text-base md:text-2xl text-black/90 leading-relaxed">Have questions or need assistance? Our team is here to help! Reach out to us for inquiries about our internet services, support, or business solutions.</p>
            </div>

            <div className="hidden md:flex gap-8">
              <div>
                <span className="font-bold text-lg tracking-wider">Feedback and Suggestions</span>
                <p className="text-black/70 mt-1">Your opinion matters! Share your feedback and suggestions to help us improve and serve you better.</p>
              </div>
              <div>
                <span className="font-bold text-lg tracking-wider">Customer Support</span>
                <p className="text-black/70 mt-1">We're here to help! Contact our support team for any questions or assistance. Your satisfaction is our priority.</p>
              </div>
            </div>
          </div>

          <Form />
        </section>

        <section className="pb-15 pt-10 grid lg:grid-cols-2 items-center max-w-7xl px-5 sm:px-8 md:px-10 gap-8">
          <Image
            src={'/dinasor.png'}
            alt="Location Map"
            height={1500}
            width={1500}
            className="rounded-2xl"
          />
          <div>
            <span className="text-base md:text-xl text-black/70 capitalize">our location</span>
            <h2 className="font-bold text-2xl md:text-4xl tracking-wider">Connecting Near and Far</h2>
            <div className="flex items-center gap-5">
              {['Kabul', 'Herat', 'Mazar', 'Jowzjan'].map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`text-lg mt-4 pb-1 px-2 ${tab === selectedTab ? 'border-b-[2px] border-blue-500 text-blue-500' : 'text-gray-600'} transition cursor-pointer`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="space-y-4 mt-6">
              {connectionMethods.map((method, index) => (
                <article key={index} className="flex items-center gap-4">
                  <method.icon size={26} />
                  <div>
                    <span className="text-xl font-semibold capitalize tracking-wider">{method.title}</span>
                    <p className="text-sm text-black/70 font-medium">{method.subTitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
