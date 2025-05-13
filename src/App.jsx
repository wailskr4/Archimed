import { Routes, Route} from 'react-router-dom';

import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About';
import Footer from './Conponents/Footer/Footer';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CourseDetail';
function App() {

  return (
    <>  
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Contact' element= {<Contact />} />
        <Route path='/Courses' element = { <Courses /> } />
        <Route path='/CourseDetail' element = { <CourseDetail /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
