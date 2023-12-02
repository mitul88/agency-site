import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import WorkList from '@/components/WorkList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Featured />
    </>
  )
}
