import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Gallery from './Components/Gallery';
import EventDetails from './Components/EventDetails';
import AuthProvider from './Components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/events.json') 
      },
      {
        path: "/events/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: ()=> fetch('/events.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </AuthProvider>
  </React.StrictMode>,
)
