import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import SignIn from './pages/signin'
import Dashboard from './pages/dashboard'
import Projects from './pages/projects'
import Signup from './pages/signup'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/sign-in" element={<SignIn/>} />
       <Route path="/sign-up" element={<Signup/>} />
       <Route path="/dashboard" element={<Dashboard/>} /> 
       <Route path="/projects" element={<Projects/>} />
    </Routes>
    
    </BrowserRouter>
    
  )
}
