import React from 'react'

const Contact = () => {
  return (
    <section className="px-5 md:px-20 xl:px-72 py-20 bg-white">
        <h3 className="text-[#20B15A] uppercase text-center font-bold mb-5">subscribe</h3>
        <h2 className="text-2xl text-center font-bold text-black mb-3">Subscribe To Get The Latest <br /> News About Us</h2>
        <h6 className="text-sm text-[#8B8B8B] text-center">Please Drop Your Email Below To Get Daily Update About What We Do</h6>
        <div className='w-4/5 md:w-3/5 lg:w-3/6  mx-auto mt-5'>
            <form>
                <div className="rounded-2xl border border-black p-1 flex justify-between w-full">
                    <input type="text" className="border-none text-[#8B8B8B] px-2 rounded-2xl w-full mr-1" placeholder='Enter Your Email Address' />
                    <button className="bg-[#F55F1D] text-white px-5 py-3 rounded-2xl">Subscribe</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact