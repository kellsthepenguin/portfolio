interface Props {
  logoUrl: string,
  name: string,
  description: string
}

export default function LanguageBox({ logoUrl, name, description }: Props) {
  return (
    <div className='h-32 w-64 rounded-md bg-slate-200 text-base flex'>
      <img className='m-[14px]' src={logoUrl} alt={name} height={100} width={100} />
      <div className='my-[14px]'>
        <p className='font-bold'>{name}</p>
        <p className='font-normal break-all'>
          {description}
        </p>
      </div>
    </div>
  )
}