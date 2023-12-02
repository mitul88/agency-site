import React from 'react'

const ServiceSection = ({serviceData}) => {
  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">our all services</h3>
            <h2 className="text-2xl font-bold text-black w-96 mb-10">We Provide Best Web design services</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
          {serviceData.map((item, index)=> {
            return (
              <div className="shadow-lg rounded-xl p-10">
                <h3 className="uppercase font-bold text-lg mb-5">{item['title']}</h3>
                <p className="text-[#9D9D9D] text-sm capitalize mb-10">{item['des']}</p>
    
                <div className='w-full rounded-xl'>
                    <div className='flex flex-wrap rounded-xl'>
                        <img className='w-1/2 lg:w-1/3 h-44 p-1 object-cover rounded-xl' src={item['image1']} alt=''/>
                        <img className='w-1/2 lg:w-2/3 h-44 p-1 object-cover rounded-xl' src={item['image2']} alt=''/>
                    </div>
                    <div className='flex flex-wrap  rounded-xl'>
                        <img className='w-1/2 lg:w-2/3 h-44 p-1 object-cover rounded-xl' src={item['image3']} alt=''/>
                        <img className='w-1/2 lg:w-1/3 h-44 p-1 object-cover rounded-xl' src={item['image4']} alt=''/>
                    </div>
                </div>
    
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default ServiceSection