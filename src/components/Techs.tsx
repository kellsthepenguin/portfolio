import LanguageBox from './LanguageBox'

export default function Techs() {
  return (
    <div className='snap-start w-screen h-screen'>
      <div className='p-24 sm:text-4xl text-2xl font-light'>
        <p className='mb-2'>저는 이러한 기술들을 사용할 수 있습니다.</p> 
        <div className='flex flex-row gap-3 flex-wrap'>
          <LanguageBox name='TypeScript' logoUrl='/logos/ts.svg' description='가장 많이 사용하며, 웹에 주로 사용합니다.' />
          <LanguageBox name='JavaScript' logoUrl='/logos/js.svg' description='간단한 프로그램에 사용합니다.' />
          <LanguageBox name='Next.js' logoUrl='/logos/nextjs.svg' description='TypeScript와 함께 웹에 주로 사용합니다.' />
          <LanguageBox name='Java' logoUrl='/logos/java.svg' description='주로 마인크래프트 플러그인을 만들 때 사용합니다.' />
          <LanguageBox name='PostgresSQL' logoUrl='/logos/psql.svg' description='보통 웹 프로젝트에 사용합니다.' />
          <LanguageBox name='Python' logoUrl='/logos/py.svg' description='알고리즘이나 간단한 프로그램에 사용합니다.' />
        </div>
      </div>
    </div>
  )
}