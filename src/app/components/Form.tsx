'use client'
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FormData {
    label: string;
    inputType: string;
    placeholder: string;
}

export default function Form() {
    const [open, setOpen] = useState<boolean>(false);
    const [province, setProvince] = useState<string>('Select Province');
    const [message, setMessage] = useState<string>('');
    const maxCharacters = 100;

    const formData: FormData[] = [
        { label: 'first name', inputType: 'text', placeholder: 'Your first name' },
        { label: 'last name', inputType: 'text', placeholder: 'Your last name' },
        { label: 'email', inputType: 'email', placeholder: 'you@example.com' },
        { label: 'phone', inputType: 'tel', placeholder: '07xxxxxxxx' },
    ]

    const provinces = [
        'kabul',
        'herat',
        'mazar',
        'jowzjan'
    ]

    return (
        <div className="p-6 bg-white rounded-2xl border border-black/10 w-full space-y-10 max-w-lg justify-self-end">
            <div className="mt-2">
                <span className="text-3xl font-bold tracking-wider">Get in Touch</span>
                <p className="text-black/70">You can reach us anytime.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                {formData.map((form, index) => (
                    <div key={index} className={`flex flex-col space-y-1 ${index >= 2 ? 'lg:col-span-2' : ''}`}>
                        <label htmlFor={form.label} className="font-medium text-sm tracking-wider capitalize">{form.label}</label>
                        <input
                            id={form.label}
                            type={form.inputType}
                            placeholder={form.placeholder}
                            className="px-4 p-2.5 rounded-lg border border-black/15 text-sm"
                        />
                    </div>
                ))}

                <div className="relative flex flex-col lg:col-span-2">
                    <p className="font-medium text-sm tracking-wider capitalize mb-1">province</p>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="px-4 p-2.5 rounded-lg border border-black/15 flex items-center justify-between cursor-pointer"
                    >
                        <p className={`${province === 'Select Province' ? 'text-black/50' : 'text-black'} capitalize text-sm`}>{province}</p>
                        <ChevronDown size={15} className="text-black/50" />
                    </button>

                    {open && (
                        <div className="mt-1 bg-white absolute top-full w-full flex flex-col gap-1 border p-1 rounded-xl">
                            {provinces.map((prv, id) => (
                                <article
                                    key={id}
                                    onClick={() => {
                                        setProvince(prv)
                                        setOpen(false)
                                    }}
                                    className={`flex items-center justify-between p-1.5 px-4 ${province === prv ? 'bg-gray-100/80' : ''} transition hover:bg-gray-100/80 cursor-pointer rounded-lg`}
                                >
                                    <p className="capitalize text-sm">{prv}</p>
                                    {province === prv && (
                                        <Check size={16} color="gray" />
                                    )}
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-1 lg:col-span-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <span className="text-black/60 text-sm font-medium">{message.trim().length}/{maxCharacters}</span>
                    </div>
                    <textarea
                        id="message"
                        value={message}
                        maxLength={maxCharacters}
                        rows={5}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="How can we help?"
                        className="resize-none rounded-lg px-2.5 p-2 text-sm border border-black/15"
                    />
                </div>
            </div>
        </div>
    )
}
