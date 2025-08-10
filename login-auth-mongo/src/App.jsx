import { useState } from 'react'
import Signup from './singnup.jsx';
import Login from "./login.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./home.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>

          
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
