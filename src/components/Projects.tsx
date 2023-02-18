import ProjectBox from './ProjectBox'

export default function Projects() {
  return (
    <div className='snap-start w-screen h-screen'>
      <div className='text-center sm:text-left p-24 md:text-4xl text-2xl font-light max-md:flex max-md:flex-col max-md:items-center'>
        <p>그리고, 저는 이런 프로젝트를 만들었습니다.</p>
        <div className='max-md:snap-x max-md:snap-mandatory flex gap-3 max-md:w-96 max-md:min-w-[24rem] overflow-x-auto'>
          <ProjectBox
            imgUrl='/img/sh0r7.png'
            name='sh0r7.xyz(shorten)'
            description='URL을 단축시켜주는 서비스입니다.'
            stacks='Next.js, Prisma, TailwindCSS'
            github='https://github.com/kellsthepenguin/shorten'
          />
          <ProjectBox
            imgUrl='/img/sharein.png'
            name='Sharein'
            description='파일 공유 서비스입니다.'
            stacks='Next.js, Prisma, TailwindCSS'
            github='https://github.com/kellsthepenguin/sharein'
          />
          <ProjectBox
            imgUrl='/img/overdose.png'
            name='Overdose'
            description='종단간 암호화가 적용된 채팅 서비스입니다.'
            stacks='Next.js, Prisma, TailwindCSS, eccrypto'
            github='https://github.com/kellsthepenguin/overdose'
          />
        </div>
      </div>
    </div>
  )
}