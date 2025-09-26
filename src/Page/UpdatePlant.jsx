import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const plant = useLoaderData();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateUser = Object.fromEntries(formData.entries());
    console.log(updateUser);

    // fetch update

    fetch(`http://localhost:3000/clients/${plant._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Your Plant is Updated Sucessfully!",
            icon: "success",
            draggable: true,
          });
        }
        if (data.modifiedCount == 0) {
          Swal.fire({
            title: "Your Plant is Already Updated ",
            icon: "error",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="object-cover bg-center pt-8 pb-15 bg-cover bg-no-repeat">
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
                defaultValue={plant.plant}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend w-full">Photo Url </legend>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                defaultValue={plant.photo}
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
                defaultValue={plant.description}
              />
            </fieldset>

            {/* 3 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Category (e.g., succulent, fern, flowering)
              </legend>
              <input
                type="text"
                name="category"
                className="input"
                placeholder="Enter Category"
                defaultValue={plant.category}
              />
            </fieldset>

            {/* 4 */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Care Level</legend>
              <select name="care" id="" defaultValue={plant.care}>
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
                defaultValue={plant.waterf}
              />
            </fieldset>

            {/* 6 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Watered Date</legend>
              <input
                type="date"
                name="lastwater"
                className="input"
                defaultValue={plant.lastwater}
              />
            </fieldset>

            {/* 7 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Next Watering Date</legend>
              <input
                type="date"
                name="nextwater"
                className="input"
                defaultValue={plant.nextwater}
              />
            </fieldset>

            {/* 8 */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Health Status</legend>
              <input
                type="text"
                name="health"
                className="input"
                placeholder="Health Status"
                defaultValue={plant.health}
              />
            </fieldset>

            {/* hidden info */}
          </div>

          {/* submit btn */}
          <div className="flex justify-center gap-5">
            <input
              className="btn bg-[#49A010] w-30 hover:bg-green-900 rounded"
              type="submit"
              value="Update Plant"
            />
            <Link
              to={-1}
              className="btn bg-[#49A010] w-30 hover:bg-green-900 rounded"
            >
              back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
