import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewList from './components/ViewList'


const router = createBrowserRouter(
  [{
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: "/paste",
    element:
      <div>
        <Navbar />
        <Paste />
      </div>
  },
  {
    path: "/paste/:id",
    element:
      <div>
        <Navbar />
        <ViewList />
      </div>
  },]

)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
