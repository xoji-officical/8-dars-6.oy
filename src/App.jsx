
import { createBrowserRouter, Navigate, RouterProvider, Routes } from 'react-router-dom'

import {Home, About, Login, Register, ErorPages} from './pages'
import MainLayouyt from './Layout/MainLayout'

import {action as RegisterAction} from './pages/Register'
import {action as LoginAction} from './pages/Login'
import ProtektedRout from './companents/ProtehtedRout'

import { useGlobalContex } from './hoocs/useGlobalContex'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/FirebaseConfic'

function App() {
  const {user, dispatch, isAuthReady} = useGlobalContex();
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErorPages />,
      element: <ProtektedRout user={user}>
        <MainLayouyt />
      </ProtektedRout>,
      children:[
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    },
    {
      path: "/login",
      errorElement: <ErorPages />,
      element: user ? <Navigate to="/" /> : <Login />,
      action:LoginAction,
    },
    {
      path: '/Register',
      errorElement: <ErorPages />,
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({type:"LOG_IN", payload: user});
      dispatch({type: "IS_AUTH_READY"});
    })
  }, [])
 

  return <>{isAuthReady && < RouterProvider router={routes} />}</>
}

export default App
