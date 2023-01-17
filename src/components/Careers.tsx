import CareerBox from './CareerBox'

export default function Careers() {
  return (
    <div className='snap-start w-screen h-screen'>
      <div className='text-center sm:text-left p-24 md:text-4xl text-2xl font-light max-md:flex max-md:flex-col max-md:items-center'>
        <p>저는 이런 곳에서 일했고, 일하는 중입니다.</p>
        <p className='text-xl'>(좌, 우 스크롤)</p>
        <div className='max-md:snap-x max-md:snap-mandatory flex gap-3 max-md:w-96 max-md:min-w-[24rem] overflow-x-auto'>
          <CareerBox name='LIBIBKK' logoUrl='/logos/libibkk.png' from='2022.08.09' to='현직' description='마인크래프트 반야생, 실전연습 서버입니다.' />
          <CareerBox name='Made Server V' logoUrl='/logos/made.png' from='2022.05.05' to='현직' description='마인크래프트 반야생 서버입니다.' />
          <CareerBox name='FlagPVP' logoUrl='/logos/flag.png' from='2021.10.06' to='2022.02.19 (서비스 종료)' description='마인크래프트 PVP 서버입니다.' />
          <CareerBox name='SkyIsle(ClearSky)' logoUrl='/logos/clearsky.png' from='2020.03.30' to='2020.10.25 (탈퇴)' description='마인크래프트 RPG 서버입니다.' />
        </div>
      </div>
    </div>
  )
}