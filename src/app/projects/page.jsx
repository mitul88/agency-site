import Contact from '@/components/Contact';
import ProjectsSection from '@/components/ProjectsSection'
import PageHeader from '@/components/shared/PageHeader'

async function getData(){
  const res=await fetch(process.env.API_URL+"/api/AllProject");
  if(!res.ok){
      throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const page = async () => {
 const data = await getData()
  return (
    <>
      <PageHeader />
      <ProjectsSection projectData={data}/>
      <Contact />
    </>
  )
}

export default page