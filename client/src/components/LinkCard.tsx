import React from 'react'

const LinkCard = ({link}) => {
  return (
    <div className='mt-20 p-14 w-1/2 h-20 border border-3 rounded-2xl flex flex-col justify-center font-bold gap-10'>
        <a href={link.url} target='_blank' className='text-blue-400'>{link.url}</a>
        <p>Context: {link.context}</p>
    </div>
  )
}

export default LinkCard