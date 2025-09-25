import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../App.css";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const profileData = new FormData(form);
    const { email, password, ...restUserData } = Object.fromEntries(
      profileData.entries()
    );

    // password validation

    const newError = [];

    if (password.length < 6) {
      newError.push("Password Must be at least 6 character");
    }
    if (!/[A-Z]/.test(password)) {
      newError.push("Password Contain at least one Uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      newError.push("Password Contain at least one Lowercase letter");
    }

    if (newError.length > 0) {
      setErrors(newError);
      return;
    }
    setErrors([]);

    // create user
    createUser(email, password).then((result) => {
      // updated user
      updateProfile(result.user, {
        displayName: restUserData.name,
        photo: restUserData.photo,
      })
        .then(() => {
          // userprofile
          const userProfile = {
            email,
            name: restUserData.name,
            photo: restUserData.photo,
            ...restUserData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
          };
          // save data in own server
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your Account is Created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
              }
            });
        })
        .catch((error) => {
          Swal.fire({
            title: error.message,
            icon: "error",
            draggable: true,
          });
        });
    });
  };

  return (
    <div className="flex justify-center my-30">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body bg-[#49A010] rounded-2xl">
          <h1 className="text-center font-bold text-3xl">Register</h1>

          <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
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
            {errors && <p className="text-red-700 font-semibold">{errors}</p>}

            <div className="my-3">
              <a className="link link-hover">Forgot password?</a>
            </div>

            <input className="btn w-full mt-3" type="submit" value="Register" />
            <p>
              Already have an Account,{" "}
              <Link
                className="underline font-semibold text-green-900"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
