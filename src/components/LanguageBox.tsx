interface Props {
  logoUrl: string,
  name: string,
  description: string
}

export default function LanguageBox({ logoUrl, name, description }: Props) {
  return (
    <div className='max-md:inline md:h-32 md:w-64 rounded-md md:bg-slate-200 text-base flex'>
      <img className='md:m-[14px]' src={logoUrl} alt={name} height={100} width={100} />
      <div className='max-md:hidden my-[14px]'>
        <p className='font-bold'>{name}</p>
        <p className='text-sm font-normal break-all'>
          {description}
        </p>
      </div>
    </div>
  )
}