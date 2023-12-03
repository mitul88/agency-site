import Subscription from '@/components/Subscription';
import TestimonialSection from '@/components/TestimonialSection'
import PageHeader from '@/components/shared/PageHeader'

async function getData(){
  const res=await fetch(process.env.API_URL+"/api/TestimonialList");
  if(!res.ok){
      throw new Error("TestimonialList Calling Fail");
  }
  return res.json();
}

const page = async() => {
  const data = await getData()
  return (
    <>
      <PageHeader />
      <TestimonialSection testimonialData={data}/>
      <Subscription />
    </>
  )
}

export default page