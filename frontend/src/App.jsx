import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Login from './components/shared/Login.jsx'
import SignUp from './components/shared/SignUp.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import Browse from './pages/Browse.jsx'
import Profile from './pages/Profile.jsx'
import JobDescription from './components/shared/JobDescription.jsx'
import AdminCompanies from './pages/AdminCompanies.jsx'
import AdminJobs from './pages/AdminJobs.jsx'

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  //admin
  {
    path:"/admin/companies",
    element:<AdminCompanies/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },


])

function App() {

  return (
    <>
      <RouterProvider router ={appRouter}/>
    </>
  )
}

export default App
