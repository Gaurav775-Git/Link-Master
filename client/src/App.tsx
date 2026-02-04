import React from 'react'
import './App.css'
import LinkForm from './components/LinkForm'

const App = () => {
  async function handleaddurl(data: any) {
    try{
      await fetch('http://localhost:3000/api/addlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  
    })
    console.log(data)
    }
    catch(err){
      console.error('Error:', err);
    }

    
  }
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
      <h1>Hello World</h1>
      <LinkForm onSubmit={handleaddurl}/>
    </div>
  )
}

export default App