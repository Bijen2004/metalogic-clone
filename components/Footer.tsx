
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='w-full px-4 pb-8 pt-24 text-white md:px-16' style={{ backgroundImage: "url('/herobg.svg')" }}>
      <div className='flex flex-col justify-between gap-y-8 xl:flex-row'>
        <div className='mt-8 flex items-start justify-start gap-4 lg:gap-2 md:mt-0 flex-col md:flex-row'>
          <Image src="/meta_Logo.png" alt="Logo" width={50} height={50}/>
            <h1 className='mb-4 flex flex-col text-2xl font-bold md:hidden'>
              <span className='tracking-widest '>
                MetaLogic
              </span>
              <span className='text-xs font-normal'>
              Software Private Limited
              </span>
            </h1>
          <div className='flex w-full flex-col md:flex-row xl:flex-col justify-between'>
              <h1 className='mb-4 hidden md:block'>
                <span className='tracking-widest text-3xl font-semibold'>
                  MetaLogic
                </span><br />
                <span className='text-sm font-normal'>
                Software Private Limited
                </span>
              </h1>
              <ul className='flex flex-col gap-2 text-sm'>
                <li className='flex gap-2 items-center'>
                  <div className='font-semibold'><IoLocationOutline /></div>
                  <div>Saptakhel, Lalitpur (Head office)</div>
                </li>
                <li className='flex gap-2 items-center'>
                  <div className='text-l'><IoCallOutline /></div>
                  <div>+ 977 9851353599</div>
                  </li>
                <li className='flex gap-2 items-center'>
                  <div className='text-l'><MdOutlineMailOutline /></div>
                  <div >info@metalogic.com.np</div>
                  </li>
              </ul>
          </div>
          </div>
          <div className='flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-8 lg:gap-16 xl:mx-0'>
            <div>
              <h3 className='mb-2 font-semibold'>
                Company
              </h3>
              <div className='flex flex-col gap-2 text-xs'>
                <Link href={'/#'}>Feedback</Link>
                <Link href={'/#'}>Partnership</Link>
                <Link href={'/#'}>Terms and Conditions</Link>
              </div>
            </div>
            <div>
              <h3 className='mb-2 font-semibold'>
                Services
              </h3>
              <div className='flex flex-col gap-2 text-xs'>
                <Link href={'/#'}>Custom Software Development</Link>
                <Link href={'/#'}>Web Development</Link>
                <Link href={'/#'}>Mobile App Development</Link>
                <Link href={'/#'}>Cloud Computing Services</Link>
                <Link href={'/#'}>Quality Assurance and Testing</Link>
                <Link href={'/#'}>UI/UX Designing</Link>
                <Link href={'/#'}>Maintenance and Support</Link>
                <Link href={'/#'}>Dev Ops</Link>
                <Link href={'/#'}>Blockchain Solutions</Link>
              </div>
            </div>
            <div>
              <h3 className='mb-2 font-semibold'>
                Join
              </h3>
              <div className='flex flex-col gap-2 text-xs'>
                <Link href={'/#'}>Careers at MetaLogic</Link>
                <Link href={'/#'}>Internships</Link>
              </div>
            </div>
            <div>
              <h3 className='mb-2 font-semibold'>
              Join us on Social Medias
              </h3>
              <div className='flex gap-4 text-sm'>
                <Link className='rounded-full border-2 p-2 text-xl' href={'/#'}><FaWhatsapp /></Link>
                <Link className='rounded-full border-2 p-2 text-xl' href={'/#'}><FiFacebook /></Link>
                <Link className='rounded-full border-2 p-2 text-xl' href={'/#'}><FaInstagram /></Link>
                <Link className='rounded-full border-2 p-2 text-xl' href={'/#'}><FiLinkedin /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 gap-y-2 text-sm'>
          <span>
          © Copyright 2024 MetaLogic. All rights reserved.
          </span>
        </div>
    </div>
  )
}

export default Footer