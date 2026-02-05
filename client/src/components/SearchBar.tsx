import React from 'react'

const SearchBar = ({ onSearch }) => {
  return (
    <input 
      type="text" 
      placeholder='Search for links here ...'
      onChange={(e) => onSearch(e.target.value)}
      className='border-4 h-12 w-full max-w-2xl px-6 border-white rounded-2xl outline-none bg-black text-white placeholder-gray-400 focus:border-gray-400'
    />
  )
}

export default SearchBar