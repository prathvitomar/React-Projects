import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Layout from './Layout.jsx'
import Github, { githubApi } from './components/Github.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Theme from './components/Theme.jsx';
import { ThemeProvider } from './context/ThemeContext.js'
import Todo from './components/Todo/Todo.jsx'
import TodoTwo from './components/Todo/TodoTwo.jsx'
import TodoReduxToolkit from './components/Todo/TodoReduxToolkit.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import DarkMode from './Practice-Projects/DarkMode/DarkMode.jsx'
import PasswordGenerator from './Practice-Projects/PasswordGenerator/PasswordGenerator.jsx'
import CurrencyConverterPractice from './Practice-Projects/CurrencyConverter/CurrencyConverterPractice.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='theme' element={<Theme/>}/>
      <Route path='todo' element={<Todo/>}/>
      <Route path='todo-two' element={<TodoTwo/>}/>
      <Route path='todo-redux' element={<TodoReduxToolkit/>}/>
      <Route
      loader={githubApi}
      path='github'
      element={<Github/>}/>
      <Route path='dark-mode' element={<DarkMode/>}/>
      <Route path='password-generator' element={<PasswordGenerator/>}/>
      <Route path='currency-converter' element={<CurrencyConverterPractice/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </Provider>
)
