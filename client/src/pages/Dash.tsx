import React, { useEffect, useState } from 'react'
import LinkForm from '../components/LinkForm'
import '../App.css'
import LinkCard from '../components/LinkCard'
import SearchBar from '../components/SearchBar'

const Dash = () => {
  const [popup, setPopup] = useState(false)
  const [links, setLinks] = useState([])
  const [filterlinks , setfilterlinks] = useState([]);

  function handlesearch(query){
    const filtered = links.filter(link =>
      link.url.toLowerCase().includes(query.toLowerCase()) ||
      link.context.toLowerCase().includes(query.toLowerCase())
    );
    setfilterlinks(filtered);
    
  }

  async function fetchlinks(){
    try{
      const response = await fetch("http://localhost:3000/api/fetchlinks");
      const results = await response.json();
      console.log(results);
      setLinks(results.data);
      setfilterlinks(results.data);
    }catch(err){
      console.log("error in fetching the links", err);
    }
  }

  useEffect(() => {
    fetchlinks();
  }, [])

  function addlink() {
    setPopup(true)
  }

  async function handleaddlink(data) {
    try {
      const response = await fetch('http://localhost:3000/api/addlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        console.log("Link added successfully")
        setPopup(false)
        fetchlinks()
      }
    } catch (err) {
      console.error("Error adding link:", err)
    }
  }

  return (
    <div className='min-h-screen pt-10 bg-black flex flex-col items-center text-white'>

      <div className='mb-10 '>
        <SearchBar onSearch={handlesearch}/>
      </div>
      
      <button
        className='border-4 rounded-2xl w-29 h-12 font-bold'
        onClick={addlink}
      >
        Add Links +
      </button>

      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <LinkForm onSubmit={handleaddlink} />
        </div>
      )}

      <div className="w-full flex flex-col items-center">
        {links.length === 0 ? (
          <p className="mt-10">No links yet. Add your first link!</p>
        ) : (
          filterlinks.map((link) => (
            <LinkCard
              key={link._id}
              link={link}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Dash