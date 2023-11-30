import Link from 'next/link'
import React from 'react'

const SiteFooter = () => {
  return (
    <footer className='bg-black text-white p-20'>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/5">
                <h1 className="text-3xl font-bold">Web Logo</h1>
                <p className="text-lg">Some Footer text about the agency. Just a little description to help people understand you better.</p>
                <div className='flex justify-between w-48'>
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
            <div className="w-full lg:w-1/5">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul>
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
            <div className="w-full lg:w-1/5">
                <h3 className="text-lg font-semibold">Address</h3>
                <p>Design agency head office <br /> Airport Road <br /> United Arab Emirates</p>
            </div>
        </div>
        <h4 className="my-5 text-lg">Copyright Design Agency 2022</h4>
    </footer>
  )
}

export default SiteFooter