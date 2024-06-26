import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home';
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact_us",
//           element: <Contact />
//         }
//       ]
//     }
//   ]
// )


    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact_us' element={<Contact />} />
          <Route path='user/:userId' element={<User />} />
          <Route path='github' loader={githubInfoLoader} element={<Github />} />
          
        </Route>
      )
    )
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
