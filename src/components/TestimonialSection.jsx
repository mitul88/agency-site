import React from 'react'

const TestimonialSection = ({testimonialData}) => {
  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">testimonials</h3>
            <h2 className="text-2xl font-bold text-black w-96 mb-10">What our Clients say about us </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center">
            {testimonialData.map((item, index)=> {
                return (
                    <div key={item['id']} className="rounded-xl shadow-[-0px_4px_20px_2px_rgba(0,0,0,0.1)] px-3 py-5 m-3 my-2 text-center md:w-[40%] lg:w-[30%]">
                        <img src={item['image']} alt="" className='h-24 w-24 rounded-lg mx-auto' />
                        <p className="text-sm text-[#9D9D9D] mt-3">{item['msg']}</p>
                        <h3 className="uppercase font-bold xl:text-md mt-3 text-center">{item['name']}</h3>
                        <h4 className="capitalize font-semi-bold text-sm">{item['designation']}</h4>
                    </div>
                )   
            })}
        </div>
    </section>
  )
}

export default TestimonialSection