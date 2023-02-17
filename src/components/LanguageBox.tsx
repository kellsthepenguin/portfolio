interface Props {
  logoUrl: string,
  name: string,
  description: string
}

export default function LanguageBox({ logoUrl, name, description }: Props) {
  return (
    <div className='max-lg:inline lg:h-32 lg:w-96 rounded-lg lg:bg-gray-50 text-base flex'>
      <img className='lg:m-[14px]' src={logoUrl} alt={name} height={100} width={100} />
      <div className='max-lg:hidden my-[14px]'>
        <p className='font-bold'>{name}</p>
        <p className='text-sm font-normal break-all'>
          {description}
        </p>
      </div>
    </div>
  )
}