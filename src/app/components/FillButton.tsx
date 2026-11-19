import Link from 'next/link';
import React from 'react'

type ButtonProps = {
    name: string;
    radius: string;
    link: string | null;
    padding: number;
    px: number;
    resPx: number;
}

export default function FillButton({ name, radius, link, padding, px, resPx }: ButtonProps) {
    return (
        <Link
            href={link ?? '#'}
            className={`text-white bg-[#007BE3] px-${resPx} sm:px-${px} p-${padding} rounded-${radius} hover:bg-[#08589C] text-sm sm:text-base transition duration-200 font-medium`}
        >
            {name}
        </Link>
    )
}
