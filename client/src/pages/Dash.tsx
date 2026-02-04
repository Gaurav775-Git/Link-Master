import React, { useState } from 'react'
import LinkForm from '../components/LinkForm'
import '../App.css'

const Dash = () => {
  const [popup, setPopup] = useState(false)

  function addlink() {
    setPopup(true)
  }

  async function handleaddlink(data) {
    try {
      await fetch('http://localhost:3000/api/addlink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log("Link added successfully")
      setPopup(false) // close popup after submit
    } catch (err) {
      console.error("Error adding link:", err)
    }
  }

  return (
    <div className='min-h-screen pt-10 bg-black flex flex-col items-center text-white'>
      
      {/* Add Link Button */}
      <button
        className='border-4 rounded-2xl w-29 h-12 font-bold'
        onClick={addlink}
      >
        Add Links +
      </button>

      {/* Popup Form */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <LinkForm onSubmit={handleaddlink} />
        </div>
      )}
    </div>
  )
}

export default Dash
