import Careers from '@/components/Careers'
import Introduce from '@/components/Introduce'
import Techs from '@/components/Techs'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-x-hidden overflow-scroll'>
      <Introduce />
      <Techs />
      <Careers />
    </div>
  )
}
