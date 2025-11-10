import { useState ,useEffect } from "react";
import axios from "axios";

export function ExpenseTransition({ dataProp , SetDeleteDates }: any) {
  const [edit, setEdit] = useState(true);
  


    const [data, setData] = useState<any[]>([]); // initialize empty
    useEffect(() => {
    if (dataProp && Array.isArray(dataProp)) {
      setData(dataProp);
      console.log("Updated local data:", dataProp);
    }
  }, [dataProp,]);


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
      const response = await axios.put("http://localhost:3000/api/v1/expenses", {
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

async function deleteData(id: string) {
  try {
    console.log("Deleting ID:", id);
    const response = await axios.delete("http://localhost:3000/api/v1/expenses", {
      data: { documentId: id }, // body for DELETE must go in 'data'
      headers: {
        authorization: "Bearer "+ localStorage.getItem("token"),
      },
    });
    SetDeleteDates(x=>!x);
    alert("Deleted successfully!");
    console.log(response.data);
  } catch (err) {
    console.error("Delete failed:", err);
    alert("Failed to delete");
  }
}



  return (
    <div className="bg-white  p-10 rounded-2xl shadow-2xl border-1">
            <p className="text-lg font-bold text-black-300 ml-80 mb-5 ">* Transactions-Expenses * </p>
          { data.map(({ _id, amount, note, category }: any, index: number) => (
            <div  key={_id || index} className="flex  gap-2 mb-2">
              <input
                value={amount} 
                onChange={(e) => handleChange(index, "amount", e.target.value)}
                className="border p-1 text-lg font-bold text-zinc-700 shadow-2xl rounded-lg w-36"
              />

              <input
                value={note}
                onChange={(e) => handleChange(index, "note", e.target.value)}
                className="border shadow-2xl rounded-lg p-1 w-96 text-lg font-bold text-zinc-700"
              />

              <input
                value={category}
                onChange={(e) => handleChange(index, "category", e.target.value)}
                className="border p-1 rounded-lg  w-36 text-lg font-bold text-zinc-700"
              />

               <button className=" bg-green-300  text-lg font-semibold rounded-lg w-20" onClick={handleUpdate}>
                Save
          </button>
          <button className=" bg-red-400  text-lg font-semibold rounded-lg w-20" onClick={() =>deleteData(_id)}>
            Delete
          </button>
            </div>
          ))}
    </div>
  );
}