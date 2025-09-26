import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ViewPlant = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // handle delete plants
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-care-server-ten.vercel.app/clients/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
              });
              navigate("/allplant");
            }
          });
      }
    });
  };

  return (
    <div className="py-10 px-4 md:px-10">
      <div className="card bg-base-100 shadow-sm flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-2xl">
        {/* image */}
        <figure className="flex-shrink-0 mx-auto md:mx-0">
          <img
            className="rounded-2xl w-full max-w-[250px] object-cover"
            src={data.photo}
            alt="Photo"
          />
        </figure>

        {/* text */}
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-lg md:text-xl font-semibold">
            <span className="text-green-500">Plant Name: </span>
            {data.plant}
          </h2>
          <p>
            <span className="text-green-500">Description: </span>
            {data.description}
          </p>
          <p>
            <span className="text-green-500">Category: </span>
            {data.category}
          </p>
          <p>
            <span className="text-green-500">Watering Frequency: </span>
            {data.waterf}
          </p>
          <p>
            <span className="text-green-500">Last Watered Date: </span>
            {data.lastwater}
          </p>
          <p>
            <span className="text-green-500">Next Watering Date: </span>
            {data.nextwater}
          </p>
        </div>

        {/* buttons */}
        <div className="flex md:flex-col gap-3 justify-center md:justify-start">
          <button
            onClick={() => navigate(-1)}
            className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl"
          >
            Back
          </button>
          <Link
            to={`/updateplant/${data._id}`}
            className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(data._id)}
            className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPlant;
