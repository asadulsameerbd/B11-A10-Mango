import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const Allplant = () => {
  const plants = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center py-20">
          {" "}
          Total Plants : {plants.length}
        </h1>
      </div>

      <table className="table flex justify-between">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Category</th>
            <th>Watering Frequency</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allplant;
