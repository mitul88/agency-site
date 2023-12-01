import Featured from '@/components/Featured'
import WorkList from '@/components/WorkList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <WorkList />
      <Featured />
    </>
  )
}
