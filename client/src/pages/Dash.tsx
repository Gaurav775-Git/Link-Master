import React, { useEffect, useState } from 'react'
import LinkForm from '../components/LinkForm'
import SearchBar from '../components/SearchBar'
import LinkCard from '../components/LinkCard'
import '../App.css'

const Dash = () => {
  const [popup, setPopup] = useState(false)
  const [links, setLinks] = useState([])
  const [filteredLinks, setFilteredLinks] = useState([])

  async function fetchlinks(){
    try{
      const response = await fetch("https://link-master.onrender.com/api/fetchlinks");
      const results = await response.json();
      setLinks(results.data);
      setFilteredLinks(results.data);
    }catch(err){
      console.log("error in fetching the links", err);
    }
  }

  useEffect(() => {
    fetchlinks();
  }, [])

  function handleSearch(query) {
    if (query === '') {
      setFilteredLinks(links);
    } else {
      const filtered = links.filter(link =>
        link.url.toLowerCase().includes(query.toLowerCase()) ||
        link.context.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLinks(filtered);
    }
  }

  function addlink() {
    setPopup(true)
  }

  async function handleaddlink(data) {
    try {
      const response = await fetch('https://link-master.onrender.com/api/addlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setPopup(false)
        fetchlinks()
      }
    } catch (err) {
      console.error("Error adding link:", err)
    }
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        
        <div className='mb-8 sm:mb-12 space-y-6'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight'>
            Link Master
          </h1>
          
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1'>
              <SearchBar onSearch={handleSearch} />
            </div>
            <button
              className='border-4 border-white px-6 py-3 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap'
              onClick={addlink}
            >
              + Add Link
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredLinks.length === 0 ? (
            <div className='col-span-full text-center py-20'>
              <p className='text-xl text-gray-400'>No links found</p>
            </div>
          ) : (
            filteredLinks.map((link) => (
              <LinkCard key={link._id} link={link} />
            ))
          )}
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
          <div className='relative w-full max-w-md'>
            <button
              onClick={() => setPopup(false)}
              className='absolute -top-12 right-0 text-white text-2xl font-bold hover:text-gray-400'
            >
              ✕
            </button>
            <LinkForm onSubmit={handleaddlink} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dash