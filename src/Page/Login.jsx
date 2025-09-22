import { Link } from "react-router";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Form = e.target;
    const logUser = new FormData(Form);
    const formUser = Object.fromEntries(logUser.entries());
    console.log(formUser);
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
              <Link className="underline font-semibold text-green-900" to={"/register"}>
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
