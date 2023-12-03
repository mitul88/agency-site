"use client"
import toast, { Toaster } from 'react-hot-toast';
import {useState} from "react";

const Contact = () => {

  let [FormValue,SetFormValue]=useState({subscription:""})

  const inputOnChange = (name,value) => {
      SetFormValue(
          FormValue=>({
              ...FormValue,
              [name]:value
          })
      )
  }

  const FormSubmit=async (e) => {
    e.preventDefault();
    if (FormValue.subscription.length === 0) {
        toast.error('Email Required');
    } else {
        const rawResponse = await fetch('/api/subscription',{
          method: 'POST',
          body: JSON.stringify(FormValue)
        });
        let serverResponse;
        if(!rawResponse.ok) {
          serverResponse = "Something is not right! Please try again later."
        } else {
          serverResponse = await rawResponse.text()
        }
        toast.error(JSON.parse(serverResponse).message)
    }
}

  return (
    <section className="px-5 md:px-20 xl:px-72 py-20 bg-white">
        <h3 className="text-[#20B15A] uppercase text-center font-bold mb-5">subscribe</h3>
        <h2 className="text-2xl text-center font-bold text-black mb-3">Subscribe To Get The Latest <br /> News About Us</h2>
        <h6 className="text-sm text-[#8B8B8B] text-center">Please Drop Your Email Below To Get Daily Update About What We Do</h6>
        <div className='w-4/5 md:w-3/5 lg:w-3/6  mx-auto mt-5'>
            <form onSubmit={FormSubmit}>
                <div className="rounded-2xl border border-black p-1 flex justify-between w-full">
                    <input value={FormValue.subscription} onChange={(e)=>{inputOnChange('subscription',e.target.value)}} type="text" className="border-none text-[#8B8B8B] px-2 rounded-2xl w-full mr-1" placeholder='Enter Your Email Address' />
                    <button type={'submit'} className="bg-[#F55F1D] text-white px-5 py-3 rounded-2xl">Subscribe</button>
                </div>
            </form>
        </div>
        <Toaster position="boottom-center"/>
    </section>
  )
}

export default Contact