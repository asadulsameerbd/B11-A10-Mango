const MyPlantsRow = ({ plant }) => {
  const { name, category, wateringFrequency } = plant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{wateringFrequency}</td>
      <td>
        <button className="btn btn-sm btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default MyPlantsRow;
