import { useContext } from "react";
import Swal from "sweetalert2";
import background from "../assets/background.jpg";
import { AuthContext } from "../Provider/AuthProvider";
const Addplant = () => {
  const { user, setUser } = useContext(AuthContext);

  // submit btn
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newform = new FormData(form);
    const restFormData = Object.fromEntries(newform.entries());

    const formdata = {
      ...restFormData,
    };

    // add formdata to the server database

    fetch("https://plant-care-server-ten.vercel.app/clients", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Plant Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div
      className="object-cover bg-center py-30 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center text-4xl font-semibold py-10">
          Add A New Plant
        </h1>

        {/* Form  */}
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl bg-white/5 backdrop-blur-md py-10 rounded-2xl"
        >
          <div className="grid grid-cols-1  p-6 md:grid-cols-2 gap-5 w-[300px]  md:w-[600px] ">
            {/* 1 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Plant Name</legend>
              <input
                type="text"
                name="plant"
                className="input"
                placeholder="Plant Name "
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Photo Url </legend>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                required
              />
            </fieldset>

            {/* 2 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Description</legend>
              <input
                type="text"
                name="description"
                className="input"
                placeholder="Description"
                required
              />
            </fieldset>

            {/* 3 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Category (e.g., succulent, fern, flowering){" "}
              </legend>
              <input
                type="text"
                name="category"
                className="input"
                placeholder="Enter Category"
                required
              />
            </fieldset>

            {/* 4 */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Care Level</legend>
              <select name="care" >
                <option name="care" value="easy">
                  Easy
                </option>
                <option name="care" value="moderate">
                  Moderate
                </option>
                <option name="care" value="difficult">
                  Difficult
                </option>
              </select>
            </fieldset>

            {/* 5 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Watering Frequency (e.g., every 3 days)
              </legend>
              <input
                type="text"
                name="waterf"
                className="input"
                placeholder="Watering Frequency"
                required
              />
            </fieldset>

            {/* 6 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Watered Date</legend>
              <input type="date" name="lastwater" className="input" required />
            </fieldset>

            {/* 7 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Next Watering Date</legend>
              <input type="date" name="nextwater" className="input" required />
            </fieldset>

            {/* 8 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Health Status</legend>
              <input
                type="text"
                name="health"
                className="input"
                placeholder="Health Status"
                required
              />
            </fieldset>

            {/* hidden info */}
          </div>
          <input type="hidden" name="userEmail" value={user?.email || ""} />
          <input type="hidden" name="userName" value={user?.name || ""} />

          {/* submit btn */}
          <div className="flex justify-center">
            <input
              className="btn bg-[#49A010] w-30 hover:bg-green-900 rounded"
              type="submit"
              value="Add Plant"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addplant;
