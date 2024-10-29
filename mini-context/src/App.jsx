
// import { useEffect, useState } from 'react'
// import './App.css'
// import { ThemeProvider } from './contexts/theme'
// import ThemeBtn from './components/ThemeBtn'
// import Card from './components/Card'

// function App() {
//   const [themeMode, setThemeMode] = useState("light")

//   const lightTheme = () => {
//     setThemeMode("light")
//   }

//   const darkTheme = () => {
//     setThemeMode("dark")
//   }

//   // actual change in theme

//   useEffect(() => {
//     document.querySelector('html').classList.remove("light", "dark")
//     document.querySelector('html').classList.add(themeMode)
//   }, [themeMode])
  

//   return (
//     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
//       <div className="flex flex-wrap min-h-screen items-center">
//           <div className="w-full">
//               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                   <ThemeBtn />
//               </div>

//               <div className="w-full max-w-sm mx-auto">
//                   <Card />
//               </div>
//           </div>
//       </div>
//     </ThemeProvider>
//   )
// }

// export default App






// import React from 'react'
// import UserContextApi from './components/UserContext'
// import Form from './components/Form'
// import Profile from './components/Profile'

// function App() {
//   return (
//     <UserContextApi>
//       <Form />
//       <Profile/>
//     </UserContextApi>
//   )
// }

// export default App







import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/useTheme'
import ToggleThemeButton from './components/ToggleThemeButton'
import ItemCard from './components/ItemCard'

function App() {

  const [mode, setMode] = useState("lightbox")

  const darkTheme = () =>{
    setMode("dark")
  }

  const lightTheme = () =>{
    setMode("light")
  }

    useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(mode)
  }, [mode])

  return (
    <ThemeProvider value={{mode, darkTheme, lightTheme}}>
      <ToggleThemeButton />
      <ItemCard/>
    </ThemeProvider>
  )
}

export default App