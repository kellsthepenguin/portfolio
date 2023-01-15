import TypeIt from 'typeit-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Introduce() {
  return (
    <div className='snap-start w-screen h-screen flex items-center'>
      <div className='ml-48 mb-48 text-4xl font-light'>
        <TypeIt options={{ cursor: false }}>
          <div className='font-sans inline'>
            <span>안녕하세요.</span> <br />
            <span>저는 학생 개발자, <span className='font-bold'>김지우</span>입니다.</span> <br />
            <a href='https://github.com/kellsthepenguin'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </TypeIt>
      </div>
    </div>
  )
}