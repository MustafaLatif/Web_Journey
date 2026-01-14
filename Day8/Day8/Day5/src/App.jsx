import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './About'
import NotFound from './Notfound'
import Contact from './Contact'
import Home from './Home'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </Router>
        </div>
    )
}

export default App
