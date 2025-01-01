import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="hero-content  flex-col md:flex md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder=" enter Your email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder=" Enter Your password"
                name="password"
                className="input input-bordered"
              />
            </div>

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="login"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="text-sm text-center pb-4 ">Already Registered <Link className="text-orange-600" to='/login'>Go To Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
