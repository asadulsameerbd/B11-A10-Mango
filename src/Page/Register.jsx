import { use } from "react";
import "../App.css";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const profileData = new FormData(form)
    const {email,password,...userProfile} = Object.fromEntries(profileData.entries())

    console.log(email, password, userProfile);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
       console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center mt-30">
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
          <div className="card-body bg-[#49A010] rounded-2xl">
            <h1 className="text-center font-bold text-3xl">Register</h1>
            <form onSubmit={handleSubmit}>
              <label className="label">Name </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo url"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
