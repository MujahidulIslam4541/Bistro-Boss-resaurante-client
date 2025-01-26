import axios from "axios";


const UseAxiosPublic = () => {

    const axiosPublic=axios.create({
        baseURL:('https://bistro-boss-server-theta-ashy.vercel.app')

    })

    return axiosPublic;
};

export default UseAxiosPublic;