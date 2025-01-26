import axios from "axios";



export const AxiosSecure=axios.create({
    baseURL:('https://bistro-boss-server-theta-ashy.vercel.app')
})
const UseAxiosSecure = () => {
    return AxiosSecure;
};

export default UseAxiosSecure;