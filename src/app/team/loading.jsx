import CardLoading from '@/components/shared/CardLoading'
import React from 'react'

const loading = () => {
  return (
    <section className='border-2 border-[#F8F9FC] px-5 md:px-20 xl:px-72 py-20 md:py-24 animate-pulse bg-white'>
          <h3 className="text-slate-700 w-28 animate-pulse">LOADING...</h3>
          <h4 className="bg-[#A9A9A9] w-20 animate-pulse"></h4> <span className='ml-3 bg-[#A9A9A9] w-10 animate-pulse'></span>
          <div className="py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-pulse">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </div>
      </section>
  )
}

export default loading