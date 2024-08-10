import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import GetImage from "../../components/images/GetImage";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const handleGoogleLogin =async () => {
    setLoading(true)
    try {
      const result = await signInWithGoogle()
      console.log(result.user)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(true)
    }
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];
   
    try {
      const photo = await GetImage(image);
      const result = await createUser(email, password);
      console.log(result.user);
      await updateUserProfile(name, photo);
      toast.success('Successfully Register!!!')
      navigate('/')
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to StayVista</p>
        </div>
        <form
          onSubmit={handleRegister}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
            disabled={loading}
              type="submit"
              className="bg-rose-500 disabled:bg-rose-300 w-full rounded-md py-3 text-white"
            >
              {loading ? <ImSpinner9 size={24} className="animate-spin m-auto" /> : "Continue"}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div onClick={handleGoogleLogin} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
