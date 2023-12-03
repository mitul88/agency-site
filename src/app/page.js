import Subscription from '@/components/Subscription'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import WorkList from '@/components/WorkList'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Featured />
      <Subscription />
    </>
  )
}
