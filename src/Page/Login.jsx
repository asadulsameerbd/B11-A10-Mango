import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser, signGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // normal login
  const handleSubmit = (e) => {
    e.preventDefault();
    const Form = e.target;
    const email = Form.email.value;
    const password = Form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: `${user.displayName || user.email} login successfully!`,
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  // ✅ google login handler
  const handleGoogleLogin = () => {
    signGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        Swal.fire({
          title: `${user.displayName || user.email} login successfully!`,
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center my-30">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-lg shadow-2xl">
        <div className="card-body bg-[#49A010] rounded-2xl">
          <h1 className="text-center font-bold text-3xl">Login</h1>

          {/* Normal Email/Password Login */}
          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <div className="my-3">
              <a className="link link-hover">Forgot password?</a>
            </div>

            <input className="btn w-full mt-3" type="submit" value="Login" />
            <p>
              Don't have an Account,{" "}
              <Link
                className="underline font-semibold text-green-900"
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </form>

          {/*  Google login button */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-[#1D232A] hover:bg-white hover:text-black text-white mt-4 w-full"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
