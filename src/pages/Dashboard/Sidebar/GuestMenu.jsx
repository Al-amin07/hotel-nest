import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './/MenuItem'
import HostModal from '../../../components/Modal/HostModal'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useAuth from '../../../hooks/useAuth'

const GuestMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth()
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleRequest = async () => {
    try {
      const { data } = await axiosSecure.patch(`/role-request/${user?.email}`)
      console.log(data)
      if(data.modifiedCount){
        toast.success('Request Send Successfuly! wait for Admin Approval')
      }
      else{
        toast.success('Already Request! Please wait for Admin Approval')

      }
      setIsOpen(false)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />

      <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
        <GrUserAdmin className='w-5 h-5' />

        <button onClick={() => setIsOpen(true)}  className='mx-4 font-medium'>Become A Host</button>
        <HostModal handleRequest={handleRequest} closeModal={closeModal} isOpen={isOpen} />
      </div>
    </>
  )
}

export default GuestMenu
