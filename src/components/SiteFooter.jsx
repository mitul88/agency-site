import Link from 'next/link'
import React from 'react'

const SiteFooter = () => {

    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <footer className='bg-black text-white p-20'>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/5 mb-10 md:mb-0">
                <h1 className="text-2xl lg:text-3xl font-bold mb-5">Web Logo</h1>
                <p className="text-sm md:text-md lg:text-lg">Some Footer text about the agency. Just a little description to help people understand you better.</p>
                <div className='flex justify-between w-48 mt-3'>
                    <div className="flex flex-col items-center justify-center bg-[#20B15A] rounded-full px-4 py-3">
                        <img src="/facebook.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center bg-[#20B15A] rounded-full px-3 py-3">
                        <img src="/twitter.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center bg-[#20B15A] rounded-full px-4 py-3">
                        <img src="/instagram.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/5 mb-10 md:mb-0">
                <h3 className="text-md lg:text-lg font-semibold mb-3">Quick Links</h3>
                <ul className='w-full flex justify-between md:flex-col'>
                    <li className='mb-1'>
                        <Link className='block' href={'/'}>Start</Link>
                    </li>
                    <li className='mb-1'>
                        <Link className='block' href={'/team'}>Team</Link>
                    </li>
                    <li className='mb-1'>
                        <Link className='block' href={'/services'}>Services</Link>
                    </li>
                    <li className='mb-1'>
                        <Link className='block' href={'/projects'}>Projects</Link>
                    </li>
                    <li className='mb-1'>
                        <Link className='block' href={'/testimonials'}>Testimonials</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/5 mb-10 md:mb-0">
                <h3 className="text-md lg:text-lg font-semibold mb-3">Address</h3>
                <p className='text-sm md:text-md lg:text-lg'>Design agency head office <br /> Airport Road <br /> United Arab Emirates</p>
            </div>
        </div>
        <h4 className="mt-5 text-md lg:text-lg">Copyright Design Agency {currentYear}</h4>
    </footer>
  )
}

export default SiteFooter