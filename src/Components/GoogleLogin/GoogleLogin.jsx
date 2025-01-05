import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(()=>{
        console.log(
        'Google Login Success'
        );
    })
  };
  return (
    <div className=" px-8">
      <button
        onClick={handleGoogleLogin}
        className=" w-full flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-md shadow hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLogin;