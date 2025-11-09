import { useState ,useEffect } from "react";
import axios from "axios";

export function IncomeTransition({ dataProp }: any) {
  const [edit, setEdit] = useState(true);
  const[makeTrue,setTrue]=useState(false);


const [data, setData] = useState<any[]>([]); // initialize empty


  useEffect(() => {
    if (dataProp && Array.isArray(dataProp)) {
      setData(dataProp);
      console.log("Updated local data:", dataProp);
    }
  }, [dataProp]);



  // update input change
  function handleChange(index: number, field: string, value: string) {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  }


  // send updated data to backend
  async function handleUpdate() {
    try {
      console.log("Sending updated data:", data);
      const response = await axios.put("http://localhost:3000/api/v1/income", {
        updates:data, // send as array of objects
      }, {
        headers: {
            authorization:"Bearer "+ localStorage.getItem("token"),
        }, 
      });
      alert("Updated successfully!");
      console.log(response.data);
      
      setEdit(false);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update");
    }
  }
 function deleteData(id:ObjectId){

 }

  return (
    <div className="bg-blue-100 p-4">
        <p>hello</p>
          { data.map(({ _id, income, note, category }: any, index: number) => (
            <div key={_id || index} className="flex gap-2 mb-2">
              <input
                value={income}
                onChange={(e) => handleChange(index, "income", e.target.value)}
                className="border p-1"
              />
              <input
                value={note}
                onChange={(e) => handleChange(index, "note", e.target.value)}
                className="border p-1"
              />
              <input
                value={category}
                onChange={(e) => handleChange(index, "category", e.target.value)}
                className="border p-1"
              />
               <button className="m-2 bg-green-300 p-1" onClick={handleUpdate}>
                Save
          </button>
          <button className="m-2 bg-red-300 p-1" onClick={() =>deleteData(_id)}>
            Delete
          </button>
            </div>
          ))}
    </div>
  );
}
  