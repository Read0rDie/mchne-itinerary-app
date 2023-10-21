import { useState } from 'react'
import './App.css'

import { Header, ContentWindow, Footer } from './containers'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= "App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
          <ContentWindow />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
