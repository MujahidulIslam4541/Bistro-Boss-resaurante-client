import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartPlus, FaRegUserCircle } from "react-icons/fa";
import UseCarts from "../../hooks/UseCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=UseCarts()
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const NavOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/dessert">OUR SHOP</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>

      {user && user?.email ? (
        <>
          <button onClick={handleLogOut}>LOGOUT</button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signUp">SIGN UP</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar font-CinzelFont max-w-screen-xl mx-auto fixed z-50 bg-gray-900 bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavOptions}
            </ul>
          </div>
          <div className="flex flex-col font-CinzelFont">
            <a className=" text-xl">BISTRO BOSS </a>
            <span>RESTAURANT</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
        </div>
        <div className="navbar-end">

          {/* Add to card button */}
          <button className="flex gap-2 mr-2">
            <div className="badge badge-primary flex gap-1 py-3">
              <FaCartPlus /> +{cart.length}
            </div>
          </button>

          {/* User profile section */}
          {user && user?.email ? (
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <p className="text-white absolute w-40 py-1 px-2 bg-gray-900 transition -translate-x-2/3 rounded-md -translate-y-2 delay-300 opacity-0 group-hover:opacity-100">
                {user.displayName}
              </p>
            </div>
          ) : (
            <>
              <FaRegUserCircle size={40} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
