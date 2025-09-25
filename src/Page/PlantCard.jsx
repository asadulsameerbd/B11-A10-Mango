import { useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();

  // this is for mobile

  return (
    <div className=" p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={plant.photo}
          alt={plant.plant}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h2 className="font-bold">{plant.plant}</h2>
          <p className="text-sm opacity-70">{plant.userEmail}</p>
        </div>
      </div>
      <p>
        <strong>Category:</strong> {plant.category}
      </p>
      <p>
        <strong>Watering:</strong> {plant.waterf}
      </p>
      <button
        onClick={() => navigate(`/allplant/${plant._id}`)}
        className="btn btn-sm mt-2 text-green-400 hover:bg-green-600 hover:text-black rounded-xl"
      >
       View Details
      </button>
    </div>
  );
};

export default PlantCard;
