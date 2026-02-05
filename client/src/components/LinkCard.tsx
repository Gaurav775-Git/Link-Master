type Link = {
  id: string
  title: string
  url: string
}

type LinkCardProps = {
  link: Link
}


const LinkCard = ({ link }: LinkCardProps) => {
  return (
    <div className='border-4 border-white p-6 bg-black hover:bg-white hover:text-black transition-all duration-300 group h-full flex flex-col'>
      <a 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-lg sm:text-xl font-bold mb-4 hover:underline break-all line-clamp-2'
      >
        {link.url}
      </a>
      
      <p className='text-sm sm:text-base text-gray-300 group-hover:text-gray-700 flex-1 line-clamp-3'>
        {link.context}
      </p>
      
      <div className='mt-4 pt-4 border-t-2 border-white group-hover:border-black'>
        <p className='text-xs text-gray-500 group-hover:text-gray-600'>
          {new Date(link.createdAt).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </p>
      </div>
    </div>
  )
}

export default LinkCard