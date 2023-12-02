'use client'

import { usePathname } from 'next/navigation'
const PageHeader = () => {
    const router = usePathname()
    let currentPage
    if(router === "/services" ) {
      currentPage = "Our Service"
    } else if(router === "/team") {
      currentPage = "Team"
    } else if (router === "/projects") {
      currentPage = "All Projects"
    } else if (router === "/testimonials") {
        currentPage = "Testimonial List"
    }
  return (
    <section className='bg-[#F8F9FC] px-5 md:px-20 xl:px-72 py-20 md:py-24'>
        <h3 className="text-lg md:text-2xl font-bold">{currentPage}</h3>
        <h4 className="text-sm md:text-md font-bold">Home <span className='text-[#20B15A]'>{currentPage}</span></h4>
    </section>
  )
}

export default PageHeader