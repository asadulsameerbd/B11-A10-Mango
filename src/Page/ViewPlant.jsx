import { useLoaderData, useNavigate } from "react-router";

const ViewPlant = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="py-20">
      <div className="card card-side p-10 flex justify-between bg-base-100 shadow-sm">
        {/* image */}
        <figure className="">
          <img className="rounded-2xl" src={data.photo} alt="Movie" />
        </figure>

        {/* text */}
        <div className=" w-full pl-5 pt-2 flex flex-col gap-3">
          <h2 className="flex justify-start gap-2">
            <span className="text-green-500"> Plant Name: </span>
            {data.plant}
          </h2>
          <p className="flex justify-start gap-2">
            <span className="text-green-500">Description :</span>
            {data.description}
          </p>
          <p className="flex justify-start gap-2">
            <span className="text-green-500">Category : </span>
            {data.category}
          </p>
          <p className="flex justify-start gap-2">
            <span className="text-green-500">Watering Frequency : </span>
            {data.waterf}
          </p>
          <p className="flex justify-start gap-2">
            <span className="text-green-500"> Last Watered Date : </span>
            {data.lastwater}
          </p>
          <p className="flex justify-start gap-2">
            <span className="text-green-500"> Next Watering Date : </span>
            {data.nextwater}
          </p>
        </div>
        {/* btn */}
        <div className="pt-5">
          <div className="join join-vertical gap-3">
            <button
              onClick={() => navigate(-1)}
              className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl join-item"
            >
              Back
            </button>
            <button className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl join-item">
              Edit
            </button>
            <button className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPlant;
