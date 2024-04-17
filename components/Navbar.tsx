'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const currentPath = usePathname()

  return (
    
    <>
    <div className='absolute z-[100] flex w-full items-center justify-between lg:hidden'>
    <a className='text-white absolute left-[70%] top-[30%] hover:scale-110  active:scale-105  transition cursor-pointer text-3xl' href='/Documentation.pdf' download><FaInfoCircle /></a>
    <div className='bg-transparent w-full p-4'>
        <div className='flex justify-between min-h-fit items-center'>
            <Link href={'/'} className='text-[white] font-sans font-semibold flex gap-4 items-center'>
            <Image src="/meta_Logo.png" alt="Logo" width={48} height={48}/>
            <span className='tracking-widest text-3xl'>MetaLogic</span>
            </Link>
            <div className='text-red-600 text-3xl cursor-pointer'>
            <GiHamburgerMenu />
            </div>
        </div>
    </div>
    </div>
    <nav className='sticky top-0 w-full z-[1000] hidden lg:block'>
    <a className='text-white absolute left-[80%] top-5 hover:scale-110  active:scale-105  transition cursor-pointer text-3xl' href='/Documentation.pdf' download><FaInfoCircle /></a>
        <div className='bg-[rgb(0,28,72)] border-b border-white/10'>
        <div className='flex justify-between min-h-fit py-3 px-8 items-center'>
            <Link href={'/'} className='text-[white] font-sans font-semibold flex gap-4 items-center'>
            <Image src="/meta_Logo.png" alt="Logo" width={48} height={48}/>
            <span className='tracking-widest text-3xl'>MetaLogic</span>
            </Link>
            <div className='text-[white] flex gap-7 font-semibold'>
                <Link href={'/'} className={`link ${currentPath === '/' ? 'active-link' : ''}`}>Home</Link>
                <Link href={'/Services'} className={`link ${currentPath === '/Services' ? 'active-link' : ''}`}>Services</Link>
                <Link href={'/Career'} className={`link ${currentPath === '/Career' ? 'active-link' : ''}`}>Career</Link>
                <Link href={'/Blogs'} className={`link ${currentPath === '/Blogs' ? 'active-link' : ''}`}>Blogs</Link>
                <Link href={'/About'} className={`link ${currentPath === '/About' ? 'active-link' : ''}`}>About Us</Link>
            </div>
            <button className='text-[white] bg-[rgb(229,59,58)] px-4 py-2 font-semibold rounded-[8px]'>
                Get in touch
            </button>
        </div>
    </div>
    </nav>
    </>
    
  )
}

export default Navbar