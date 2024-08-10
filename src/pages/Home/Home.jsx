import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Banner from './Banner'
import Searching from './Searching'

import NewItem from './NewItem'
import AllRooms from './Rooms/AllRooms'


const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Banner />
   
      <Categories />
      {/* <Searching /> */}
      {/* <Rooms /> */}
      <AllRooms />

    {/* <Destination /> */}
    <NewItem />
    </div>
  )
}

export default Home
