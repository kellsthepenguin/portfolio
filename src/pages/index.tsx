import Introduce from '@/components/Introduce'

export default function Home() {
  return (
    <div>
      <div className='snap-y snap-mandatory h-screen overflow-scroll'>
        <Introduce />
        <div className='snap-start w-screen h-screen flex items-center'>whats next</div>
      </div>
    </div>
  )
}
