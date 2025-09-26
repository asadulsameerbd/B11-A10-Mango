import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PlantRow from "./PlantRow";

const MyPlant = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myplants/${user.email}`)
        .then((res) => res.json())
        .then((data) => setPlants(data));
    }
  }, [user]);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center py-6">
        My Plants: {plants.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
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
              <PlantRow key={plant._id} plant={plant} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPlant;
