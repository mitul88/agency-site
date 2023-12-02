import Contact from '@/components/Contact'
import ServiceSection from '@/components/ServiceSection'
import PageHeader from '@/components/shared/PageHeader'

async function getData(){
  const res=await fetch(process.env.API_URL+"/api/AllService");
  if(!res.ok){
      throw new Error("AllService Calling Fail");
  }
  return res.json();
}

const page = async () => {
  const data = await getData()
  return (
    <>
      <PageHeader />
      <ServiceSection serviceData={data} />
      <Contact /> 
    </>
  )
}

export default page