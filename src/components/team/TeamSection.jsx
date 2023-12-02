import Link from 'next/link'
import React from 'react'

const TeamSection = ({teamData}) => {
    console.log(teamData)
  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">our team member</h3>
            <h2 className="text-2xl font-bold text-black w-96 mb-10">Check our awesome team members</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
            {teamData.map((item, index)=> {
                return (
                    <div key={item['id']} className="rounded-xl shadow">
                        <div className="relative">
                            <img src={item['image']} alt="" className='rounded-t-xl object-contain ' width="100%" />
                            <div className="bg-white px-3 py-2 rounded-3xl absolute bottom-2 left-0 right-0 mx-auto w-fit flex items-center justify-between">
                                <Link href={`https://${item['facebook']}`}>
                                    <img src="/fb.png" alt="" />
                                </Link>
                                <Link href={`https://${item['twitter']}`} className='px-4'>
                                    <img src="/tw.png" alt="" />
                                </Link>
                                <Link href={`https://${item['instagram']}`}>
                                    <img src="/insta.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="rounded-b-xl p-5 font-bold capitalize text-center lg:text-lg">{item['name']}</div>    
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default TeamSection