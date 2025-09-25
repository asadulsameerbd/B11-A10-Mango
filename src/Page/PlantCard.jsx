import { useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();

  return (
    <tr>
      {/* name */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={plant.photo} alt={plant.plant} />
            </div>
          </div>
          <div>
            <div className="font-bold">{plant.plant}</div>
            <div className="text-sm opacity-50">{plant.userEmail}</div>
          </div>
        </div>
      </td>

      {/* category */}
      <td>{plant.category}</td>

      {/* watering frequency */}
      <td>{plant.waterf}</td>

      {/* details button */}
      <td>
        <button
          onClick={() => navigate(`/allplant/${plant._id}`)}
          className="btn text-green-400 hover:bg-green-600 hover:text-black rounded-xl"
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default PlantCard;
