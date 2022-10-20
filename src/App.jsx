import { useState } from 'react'
import './App.css'
import { Info, About, Footer } from './containers'


function App() {
  return (
    <div className="App">
              <Info />
              <About />
              <Footer />
          </div>
  )
}

export default App
