import useAxiosCommon from "../../hooks/useAxiosCommon";

const GetImage = async (image) => {
    const axiosCommon = useAxiosCommon();
   const formData = new FormData();
   formData.append('avatar', image)
   const { data } = await axiosCommon.post('/upload', formData)
   console.log(data)
   return data
};

export default GetImage;