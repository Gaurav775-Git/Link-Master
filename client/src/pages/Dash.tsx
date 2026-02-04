import React from 'react'
import LinkForm from '../components/LinkForm'
import '../App.css'

const Dash = () => {
  
  async function handleaddlink(data){
    try{
      await fetch('http://localhost:3000/api/addlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    }
    );console.log("Link added successfully");
    }catch(err){
      console.error("Error adding link:", err);
    }
  }

  return (
    <div className='min-h-screen bg-black flex flex-col justify-center items-center'>
        <LinkForm
          onSubmit={handleaddlink}
        />
    </div>
  )
}

export default Dash