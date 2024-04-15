import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-[1000] hidden lg:block'>
        <div className='bg-[#10103f]'>
        <div className='flex justify-between max-w-[95%] mx-auto min-h-[60px] items-center'>
            <Link href={'/'} className='text-[white] font-sans font-semibold'>
                MetaLogic
            </Link>
            <div className='text-[white] flex gap-7'>
                <Link href={'/'}>Home</Link>
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Career'}>Career</Link>
                <Link href={'/Blogs'}>Blogs</Link>
                <Link href={'/About'}>About Us</Link>
            </div>
            <button className='text-[white] bg-[#df4242] px-[12px] py-[5px] font-semibold rounded-[8px]'>
                Get in touch
            </button>
        </div>
    </div>
    </nav>
  )
}

export default Navbar