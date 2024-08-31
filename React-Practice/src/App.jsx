import { useState } from 'react'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'
import CurrencyConverter from './components/CurrencyConverter'
import CurrencyConvSecond from './components/CurrencyConvSecond'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React Projects</h1>
      {/* <PasswordGenerator/> */}
      {/* <CurrencyConverter/> */}
      {/* <CurrencyConvSecond /> */}
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
