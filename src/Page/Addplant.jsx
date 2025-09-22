import { useState } from "react";
import background from "../assets/background.jpg";
const Addplant = () => {
  const [users, setUsers] = useState();

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
        <form className="shadow-2xl bg-white/5 backdrop-blur-md py-10 rounded-2xl">
          <div className="grid grid-cols-1  p-6 md:grid-cols-2 gap-5 w-[300px]  md:w-[600px] ">
            {/* 1 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Plant Name</legend>
              <input type="text" className="input" placeholder="Plant Name " />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Photo Url </legend>
              <input type="text" className="input" placeholder="photo url" />
            </fieldset>

            {/* 2 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Description</legend>
              <input type="text" className="input" placeholder="Description" />
            </fieldset>

            {/* 3 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Category"
              />
            </fieldset>

            {/* 4 */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Care Level</legend>
              <select name="care" id="">
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </fieldset>

            {/* 5 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Watering Frequency</legend>
              <input
                type="text"
                className="input"
                placeholder="Watering Frequency"
              />
            </fieldset>

            {/* 6 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Watered Date</legend>
              <input type="date" className="input" name="wateredDate" />
            </fieldset>

            {/* 7 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Next Watering Date</legend>
              <input type="date" className="input" name="wateredDate" />
            </fieldset>

            {/* 8 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Health Status</legend>
              <input
                type="text"
                className="input"
                placeholder="Health Status"
              />
            </fieldset>

            {/* hidden info */}
          </div>
          <input type="hidden" name="userEmail" value={users?.email || ""} />
          <input type="hidden" name="userName" value={users?.name || ""} />

          {/* submit btn */}
          <div className="flex justify-center">
            <input
              className="btn bg-[#49A010] w-30 hover:bg-green-900 rounded"
              type="button"
              value="Add Plant"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addplant;
