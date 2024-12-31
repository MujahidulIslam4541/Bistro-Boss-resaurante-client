import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaValidate = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaValidate.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
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
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  {" "}
                  <LoadCanvasTemplate />
                </span>
              </label>
              <input
                type="text"
                placeholder="type captcha"
                name="captcha"
                ref={captchaValidate}
                className="input input-bordered"
                
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs"
              >
                Validate
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="login"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
