import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

;

const USeAuth = () => {
    const auth=useContext(AuthContext)
    return auth;
       
};

export default USeAuth;