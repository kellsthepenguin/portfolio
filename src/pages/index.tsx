import Introduce from '@/components/Introduce'
import Techs from '@/components/Techs'

export default function Home() {
  return (
    <div id='main' className='snap-y snap-mandatory h-screen overflow-scroll'>
      <Introduce />
      <Techs />
    </div>
  )
}
