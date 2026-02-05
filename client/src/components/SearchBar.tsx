const SearchBar = ({ onSearch }) => {
  return (
    <input 
      type="text" 
      placeholder='Search links...'
      onChange={(e) => onSearch(e.target.value)}
      className='w-full h-12 sm:h-14 px-4 sm:px-6 border-4 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors text-base sm:text-lg'
    />
  )
}

export default SearchBar