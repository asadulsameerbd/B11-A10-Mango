import { useEffect, useState } from "react";
import Loading from "../Component/Loading";
import PlantCard from "./PlantCard";
import PlantRow from "./PlantRow";

const Allplant = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plant-care-server-ten.vercel.app/clients?limit=20")
      .then(res => res.json())
      .then(data => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center py-6">
        Total Plants : {plants.length}
      </h1>

      {/* Desktop & Tablet */}
      <div className="hidden md:block overflow-x-auto">
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
            {plants.map(plant => (
              <PlantRow key={plant._id} plant={plant} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        {plants.map(plant => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Allplant;
