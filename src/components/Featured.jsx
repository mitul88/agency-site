import Link from "next/link";

async function getData(){
    const res=await fetch(process.env.API_URL+"/api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProject Calling Fail");
    }
    return res.json();
}

const Featured = async () => {
    
  const data = await getData();

  return (
    <section className="px-5 md:px-20 xl:px-48 py-10 bg-[#F0FDF4]">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">featured project</h3>
            <h2 className="text-3xl font-bold text-black w-96 mb-10">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div className="grid grid-rows-5  md:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 lg:gap-y-3">
            {
                data.slice(0, 5).map((item, index)=> {
                    return (
                        <Link key={item.id} className={index == 0 ?'col-span--1 md:col-span-2 row-span-1 lg:row-span-2':'' } href={item['live']}>
                            <img className={`${index == 0 ? 'sm:h-72 lg:h-5/6' : 'sm:h-72 lg:h-52'} rounded-lg w-full`} src={item['image']} />
                            <div className="py-3">
                                <h4 className="text-[#2E3E5C] text-sm mb-1 ">{item['remark']}</h4>
                                <h2 className="text-lg text-[#1E1F4B] font-bold">{item['title']}</h2>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Featured