'use client'

import Link from "next/link"
import {usePathname} from "next/navigation";

const SiteNavbar = () => {

    const NavClick = () => {}

    const current=usePathname();
  
return (
    <div>
        <nav className="relative lg:px-20 px-6 py-6 flex justify-between items-center bg-transparent">
            <a className='text-3xl font-bold leading-none' href='#'>
                <img src='/DesignAGENCY.png' alt='' width='auto'/>
            </a>

            <div className='lg:hidden'>
                <button onClick={()=>{NavClick()}} className='navbar-burger flex items-center text-green-600 p-3'>
                    <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Mobile menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>

            <ul className='hidden lg:flex lg:flex lg:items-center lg:justify-end lg:w-auto lg:space-x-6'>
                <li>
                    <Link className={current==="/"?" text-[#20B15A] font-semibold":" text-black font-semibold hover:text-[#20B15A] "} href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className={current==="/team"?" text-[#20B15A] font-semibold":" text-black font-semibold hover:text-[#20B15A] "} href={"/team"}>Team</Link>
                </li>
                <li>
                    <Link  className={current==="/services"?" text-[#20B15A] font-semibold":" text-black font-semibold hover:text-[#20B15A] "} href={'/services'}>Service</Link>
                </li>
                <li>
                    <Link className={current==="/projects"?" text-[#20B15A] font-semibold":" text-black font-semibold hover:text-[#20B15A] "} href={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link className={current==="/testimonials"?" text-[#20B15A] font-semibold":" text-black font-semibold hover:text-[#20B15A] "}  href={'/testimonials'}>Testimonials</Link>
                </li>
                <li>
                    <Link className='border-2 border-[#20B15A] rounded-lg px-5 py-3 text-[#20B15A] font-semibold'  href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link className='rounded-lg bg-[#20B15A] px-5 py-3 text-white font-semibold'  href={'/signup'}>Signup</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SiteNavbar