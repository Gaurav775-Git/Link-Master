import React from 'react'
import { Router , Routes ,Route, BrowserRouter} from 'react-router-dom'
import Dash from './pages/Dash'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dash/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App