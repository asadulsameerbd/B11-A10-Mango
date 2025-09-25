import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const Form = e.target;
    const email = Form.email.value;
    const password = Form.password.value;
    // user login to firebase

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          title: `${user.displayName || user.email} login successfully!` ,
          icon: "success",
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div className="flex justify-center my-30 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-lg shadow-2xl">
        <div className="card-body bg-[#49A010] rounded-2xl">
          <h1 className="text-center font-bold text-3xl">Login</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
