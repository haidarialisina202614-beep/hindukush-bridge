import Image from 'next/image';
import Link from 'next/link'

type ButtonProps = {
    icon: string;
    des: string;
    name: string;
    link: string;
}

export default function FooterButton({ icon, des, name, link }: ButtonProps) {
    return (
        <Link
            href={link}
            className='p-2 py-1 rounded-md bg-black text-white flex items-center gap-2'
        >
            <Image
                src={icon}
                alt={name}
                height={30}
                width={20}
            />
            <div className='-space-y-1'>
                <p className='text-[9px]'>{des}</p>
                <span className='tracking-wider text-sm font-semibold capitalize'>{name}</span>
            </div>
        </Link>
    )
}
