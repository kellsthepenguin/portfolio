import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectBox({ imgUrl, name, description, stacks, github }: { imgUrl: string, name: string, description: string, stacks: string, github: string }) {
  return (
    <div className='max-md:snap-start w-96 h-96 min-w-[24rem] bg-gray-50 shrink-0 rounded-md min-w-[24rem] flex flex-col items-center text-base font-normal'>
      <img src={imgUrl} className='w-[23rem] h-48 m-2 rounded-md' />
      <p className='text-lg font-bold'>{name}</p>
      <p>{description}</p>
      <p>기술 스택: {stacks}</p>
      <a className='mt-4' href={github}>
        <FontAwesomeIcon icon={faGithub} size='3x' />
      </a>
    </div>
  )
}