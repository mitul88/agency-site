import Link from 'next/link'
import React from 'react'

const ProjectsSection = ({projectData}) => {
  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">all projects</h3>
            <h2 className="text-2xl font-bold text-black w-96 mb-10">Better Agency/SEO Solutions at Your Fingertips </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-10'>
          {projectData.map((item, index)=> {
            return (
              <Link href={`https://${item['live']}`} key={item['id']} className="shadow-[-0px_4px_20px_2px_rgba(0,0,0,0.1)] rounded-xl p-3">
                <img className='w-full xl:h-96 p-1 object-cover rounded-xl' src={item['image']} alt=''/>
                <h3 className="uppercase font-bold xl:text-sm mt-3 text-center">{item['title']}</h3>
              </Link>
            )
          })}
        </div>
    </section>
  )
}

export default ProjectsSection