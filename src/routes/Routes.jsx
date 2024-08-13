import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import About from '../pages/About/About'
import AllRooms from '../pages/AllRoom/AllRooms'
import Dashboard from '../pages/Dashboard/Dashboard'
import Stastistics from '../pages/Dashboard/Common/Stastistics'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import PrivateRoute from './PrivateRoute'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import AdminRoute from './AdminRoute'
import HostRoute from './HostRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/all-rooms',
        element: <AllRooms />
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
       index: true,
       element: <Stastistics />
      },
      {
        path: 'add-room',
        element: <HostRoute><AddRoom /></HostRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: 'my-listings',
        element: <HostRoute><MyListings /></HostRoute>
      },
      {
        path: 'my-bookings',
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: 'manage-bookings',
        element: <HostRoute><ManageBookings /></HostRoute>
      }
    ]
  }
])
