const custProfile = () => {
  const initialData = [
    {
      name: "Govind",
      lastname: "Namdev",
      gender: "Male",
      contact: "9876543210",
      email: "govind.mangoitsolutions@gmail.com",
    },
  ];
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
  };
  const handleUpdate = (updatedData) => {
    const updatedArray = data.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    setData(updatedArray);
    setSelectedItem(null);
  };
  return (
    <>
      <h1>Data Table</h1>
      <DataTable data={data} onEdit={handleEdit} />
      {selectedItem && (
        <EditForm selectedItem={selectedItem} onUpdate={handleUpdate} />
      )}
    </>
  );
};
export default custProfile;
