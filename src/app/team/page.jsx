import Subscription from '@/components/Subscription';
import PageHeader from '@/components/shared/PageHeader'
import TeamSection from '@/components/TeamSection'

async function getData(){
  const res=await fetch(process.env.API_URL+"/api/TeamList");
  if(!res.ok){
      throw new Error("TeamList Calling Fail");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <PageHeader />
      <TeamSection teamData={data} />
      <Subscription />
    </>
  )
}

export default page