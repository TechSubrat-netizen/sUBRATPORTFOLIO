import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Skills from "./Components/Skills"
import CodingProfile from "./Components/CodingProfile"
function App() {
 

  return (
    <>
    <BrowserRouter> 
    <Header/>
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/skill" element={<Skills/>}/>
      <Route path="/codingprofile" element={<CodingProfile/>}/>

    </Routes> 
     </BrowserRouter>
     {/* <Header/> */}
      
    </>
  )
}

export default App
