interface Props {
  name: string,
  logoUrl: string,
  from: string,
  to: string,
  description: string
}

export default function CareerBox({ name, logoUrl, from, to, description }: Props) {
  return (
    <div className='max-md:snap-start h-96 w-96 min-w-[24rem] bg-slate-200 rounded-md text-base shrink-0 flex flex-col items-center'>
      <p className='mt-2 font-bold'>{name}</p>
      <img src={logoUrl} width={256} height={256} />
      <p>{from} ~ {to}</p>
      <p>{description}</p>
    </div>
  )
}
