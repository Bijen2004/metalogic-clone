import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#10103f]'>
        <div className='flex justify-between max-w-[95%] mx-auto min-h-[60px] items-center'>
            <div className='text-[white]'>
                Metalogic
            </div>
            <div className='text-[white]'>
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Services'}>Services</Link>
            </div>
            <button className='text-[white] bg-[#df4242] px-[12px] py-[5px] font-semibold rounded-[8px]'>
                Get in touch
            </button>
        </div>
    </div>
  )
}

export default Navbar