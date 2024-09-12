import { useEffect, useState } from 'react'
import './App.css'
import { Header, Footer } from './components';
import authService from './appwrite/auth';
import {useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=> dispatch(login(data)))
    .finally(()=> setLoading(false));
  },[])

  return loading ? (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  ) : (<h1>Loading....</h1>) 

}

export default App