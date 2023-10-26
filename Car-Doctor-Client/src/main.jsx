import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Authentication/Login/Login.jsx';
import Register from './Components/Authentication/Register/Register.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/inventory",
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
