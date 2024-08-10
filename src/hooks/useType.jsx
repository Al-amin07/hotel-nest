import useAuth from "./useAuth";


const useType = () => {
  const { user } = useAuth();
  const signInMethod = user?.providerData[0]?.providerId
  return [signInMethod]
};

export default useType;