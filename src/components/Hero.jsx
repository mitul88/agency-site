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
    
  return (
    <section className="py-10 bg-[#D7F5DC]">
        <div className='px-5 md:px-20 xl:px-48 flex'>
            <div></div>
            <div></div>
        </div>
        <div className="bg-white px-5 md:px-20 xl:px-48 py-10 w-full grid gap-10 place-items-center grid-row-2 grid-cols-2 md:grid-none md:flex flex-wrap justify-between">
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