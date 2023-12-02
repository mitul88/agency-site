import Link from "next/link";

const fetchData = async (url) => {
    const response=await fetch(url);
    return await response.json();
}

async function getData(){

    try {
        let statUrl=process.env.API_URL+"/api/StatList";
        let workUrl=process.env.API_URL+"/api/WorkList";
    
        const [statData, workData] = await Promise.all([
            fetchData(statUrl),
            fetchData(workUrl),
        ])
    
        return {statData, workData}
    }catch(error) {
        return {statData:null, workData: []}
    }
}

const WorkList = async () => {
    const data = await getData(); 
    const works = data['workData']
    const stats = data['statData']
    const statData = Object.keys(stats)
    const statItems = statData.filter((item)=> {
        if(item !== "id" && item !== "created_at" && item !== "updated_at" ){
            return true
        }
    })

  return (
    <section className="px-5 md:px-20 xl:px-72 py-10 bg-white">
        <div>
            <h3 className="text-[#20B15A] uppercase font-bold mb-5">work list</h3>
            <h2 className="text-2xl font-bold text-black w-96 mb-10">We provide the Perfect Solution to your business growth</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between xs:p-10 md:p-0 mt-15">
            {works.map((item, index)=> {
                return (
                    <div key={item['id']} className="sm:w-full md:w-1/3 lg:w-1/5">
                        <div className="rounded-xl bg-[#D7F5DC] p-5 mx-auto md:ml-0 flex justify-center items-center w-fit">
                            <img src={item['step']+`.png`}alt="" />
                        </div>
                        <div className="mt-3 mb-10 text-center md:text-start">
                            <h4 className="text-lg font-bold mb-5">{item['title']}</h4>
                            <h5 className="text-sm">{item['des']}</h5>
                        </div>
                        <Link href="/" className="w-32 mx-auto md:ml-5 flex items-center font-bold mb-10">Learn More <img src="/right-arrow.png" className="ml-3 h-4" alt="" /></Link>
                    </div>
                )
            })}
        </div>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {statItems.map((item, index)=> {
                return (
                    <div className="rounded-lg shadow-lg p-5 flex flex-col justify-center items-center" key={index}>
                        <div className="rounded-xl bg-[#D7F5DC] p-5 flex justify-center items-center w-fit">
                            <img src={item+`.png`}alt="" />
                        </div>
                        <h4 className="text-lg font-bold mt-5 mb-2">{stats[item]}</h4>
                        <h5 className="text-sm font-bold capitalize">{item}</h5>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default WorkList