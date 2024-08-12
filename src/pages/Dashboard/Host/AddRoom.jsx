import { useState } from "react";
import { categories } from "../../../components/Categories/CategoriesData";
import { DateRange } from "react-date-range";
import GetImage from "../../../components/images/GetImage";
// import { categories } from '../Categories/CategoriesData'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from 'react-hot-toast'
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
const AddRoom = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState()
  const [imageName, setImageName] = useState('Upload Image')
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { mutateAsync } = useMutation({
    mutationFn: async (roomData) => {
      const { data } = await axiosSecure.post('/room', roomData)
      console.log(data)
      return data
    },
    onSuccess: () => {
      toast.success('Room Added Successfully!!!')
    }
  })

  const handleRoom = async e => {
    e.preventDefault();
    setLoading(true)
    const location = e.target.location.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = parseInt(e.target.price.value);
    const guests = e.target.total_guest.value;
    const bedrooms = e.target.bedrooms.value
    const bathrooms = e.target.bathrooms.value
    const description = e.target.description.value
    const photo = e.target.image.files[0];
    // 
    try {
      const image = await GetImage(photo)
      const roomData = {location, title, category, price, guests, bedrooms, bathrooms, description, image, to: state[0].endDate, from: state[0].startDate, host: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        signInMethod: user?.providerData[0]?.providerId
      }}
      // console.table(roomData
      await mutateAsync(roomData)
    } catch (error) {
      toast.error(error.message)
    } finally{
      setLoading(false)
    }
   
  }
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image))
    if(image.name.length > 20){
      setImageName(image.name.split('.')[0].slice(0,15) + '...' + image.name.split('.')[1])
    }
   else{
    setImageName(image.name)
   }
  }

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleRoom}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              {/* Calender */}
              <DateRange
              className="w-full"
                rangeColors={["#F43F5E"]}
                showDateDisplay={false}
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className=" p-4 flex items-center gap-6 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload flex-1 px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      onChange={(e) => handleImage(e.target.files[0])}
                     
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {imageName}
                    </div>
                  </label>
                </div>
              </div>
              <div>
                {imagePreview && <img src={imagePreview} className="h-12 w-12"/>}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <button
        disabled={loading}
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500 disabled:bg-rose-400"
        >
          {loading ? <ImSpinner9 size={24} className="animate-spin m-auto"/> : 'Save & Continue'}
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
