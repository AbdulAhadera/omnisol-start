import './App.css'
import Router from "../src/Routes"
import { BrowserRouter } from "react-router-dom"


function App() {
 
 return(
  <>
  <div className='bg-body'>
    <BrowserRouter>
      <div className=''>
        <Router />
      </div>
    </BrowserRouter>
  </div>
</>
 )
}

export default App
