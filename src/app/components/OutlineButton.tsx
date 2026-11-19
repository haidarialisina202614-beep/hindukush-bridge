import Link from 'next/link'

export default function OutlineButton() {
    return (
        <button
            type='button'
            className='w-full text-center tracking-wider border border-[#007BE3] rounded-full font-bold text-[#007BE3] capitalize p-3 cursor-pointer hover:bg-[#007BE3] hover:text-white transition duration-300 text-sm'
        >
            get started
        </button>
    )
}
