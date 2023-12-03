"use client"
import toast, { Toaster } from 'react-hot-toast';
import {useState} from "react";


const ContactSection = () => {
    let [FormValue,SetFormValue]=useState({fname:"",lname:"",email:"",msg:""})

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
        if (FormValue.fname.length === 0) {
            toast.error('First Name Required');
        } else if (FormValue.lname.length === 0) {
            toast.error('Last Name Required');
        } else if (FormValue.email.length === 0) {
            toast.error('Email Required');
        } else if (FormValue.msg.length === 0) {
            toast.error('Message Required');
        } else {
            const rawResponse = await fetch('/api/contact',{
                method: "POST",
                body: JSON.stringify(FormValue)
            });
            
            let serverResponse;
            if(!rawResponse.ok) {
                serverResponse = "Something is not right! Please try again later."
             }else {
                serverResponse = await rawResponse.text()
            }
            toast.success(JSON.parse(serverResponse)["message"])
        }
    }

  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">contact</h3>
            <h2 className="text-2xl font-bold text-black w-96 ">Contact us for information</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center -mx-4">
                    <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
                        <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                            <img className="h-8" src="/DesignAGENCY.png" alt="" width="auto"/>
                        </a>
                        <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                            So much more than just consultant agency
                        </h2>
                        <p className="mb-8 text-gray-500 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            efficitur nisl sodales egestas lobortis.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                            <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                                <form onSubmit={FormSubmit} action="">
                                    <div className="mb-6">
                                        <span className="text-sm text-gray-400">Sign Up</span>
                                        <h4 className="text-2xl">Create an account</h4>
                                    </div>
                                    <div className="mb-4 flex flex-wrap -mx-2">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                                            <input value={FormValue.fname} onChange={(e)=>{inputOnChange('fname',e.target.value)}} className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2">
                                            <input value={FormValue.lname} onChange={(e)=>{inputOnChange('lname',e.target.value)}} className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <input  value={FormValue.email} onChange={(e)=>{inputOnChange('email',e.target.value)}} className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="hello@example.com"/>
                                    <textarea value={FormValue.msg} onChange={(e)=>{inputOnChange('msg',e.target.value)}} className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="Message"/>

                                    <button type={"submit"} className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        <Toaster position="bottom-center"/>
    </section>
  )
}

export default ContactSection