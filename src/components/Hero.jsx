import Link from "next/link";

const fetchData = async (url) => {
    const response=await fetch(url);
    return await response.json();
}

async function getData(){

    try {
        let heroUrl=process.env.API_URL+"/api/HeroList";
        let brandUrl=process.env.API_URL+"/api/BrandList";
    
        const [heroData, brandData] = await Promise.all([
            fetchData(heroUrl),
            fetchData(brandUrl),
        ])
    
        return {heroData, brandData}
    }catch(error) {
        return {heroData:null, brandData: []}
    }
}

const Hero = async () => {
    const data = await getData();
    const brandList = data['brandData']
    const heroData = data['heroData']

  return (
    <section className="pt-24 pb-10 bg-[#D7F5DC]">
        <div className='px-5 md:px-20 xl:px-72 flex flex-col md:flex-row'>
            <div className="text-center md:text-start md:w-1/2 mb-10 md:my-auto">
                <h1 className="text-5xl md:text-3xl lg:text-5xl font-bold">{heroData['title']}</h1>
                <h4 className="font-semibold mt-5 md:text-sm lg:text-lg mb-10 lg:w-96">{heroData['description']}</h4>
                <Link href="/" className="rounded-lg bg-[#20B15A] text-white px-5 py-3 ">Get Started</Link>
            </div>
            <div className='w-full md:w-1/2 px-4 rounded-xl'>
                <div className='flex flex-wrap lg:mb-4 rounded-xl'>
                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-xl' src={heroData['image1']} alt=''/>
                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-xl' src={heroData['image2']} alt=''/>
                </div>
                <div className='flex flex-wrap lg:mb-4 rounded-xl'>
                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-xl' src={heroData['image3']} alt=''/>
                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-xl' src={heroData['image4']} alt=''/>
                </div>
            </div>
        </div>
        <div className="bg-white mt-10 px-5 md:px-20 xl:px-72 py-10 w-full grid gap-10 place-items-center grid-row-2 grid-cols-2 md:grid-none md:flex flex-wrap justify-between">
            {brandList.map((item, index)=> {
                return (
                    <img src={item['image']} alt={item['name']} key={item['id']} />
                )
            })}
        </div>
    </section>
  )
}

export default Hero