import axios from "axios";
import { ShareIcon } from "../icons/shareIcon";
import { Button } from "./Button";

function AddExpense({openExpense,setOpenExpense}) {


    async function addExpenseData(){

      const res=await axios.post('http://localhost:3000/api/v1/expenses',{
        category,
        amount,
        note
      })

    }

  return <div>
    {openExpense && <div className=" w-screen h-screen fixed top-0 left-0 flex justify-center">
    <div className="opacity-100 bg-white h-96 w-80 m-16 border-2 rounded-xl shadow-xl ">
      <div className="flex flex-column ">
        <div>
          <p className="font-bold text-xl pl-2 pt-1">Add Expenses</p>
          <p className="text-sm pl-2 pb-2">Track your spending</p>
        </div>
        <div className="flex justify-end">
          <div className="ml-32 mt-3">
            <button onClick={()=>setOpenExpense(false)}> <ShareIcon/> </button>
          </div>
        </div>
      </div>
      <div>
        <p className="ml-6 mt-3 font-bold">Why did you buy ?</p>
        <div className="ml-6 mt-1"> <input placeholder="Enter description" type="text"   className="pl-6 w-64 h-8 rounded-md border-2  bg-gray-50 "   /></div>
        <p className="ml-6 mt-3 font-bold">Amount$</p>
        <div className="ml-6 mt-1"> <input placeholder="$ 0.00" type="text" className="pl-6 w-24 h-8  rounded-md border-2 bg-gray-50"/> </div>
      </div>
        <p className="ml-6 mt-3  font-bold">Category</p>
      <div className="flex flex-wrap gap-1.5 mt-1 ">
          
          <div className="ml-6"> <Button  variant='secondary' text='Food'    fontSize="sm"
              /></div>
          <div> <Button variant='secondary' text='Entertainment'    fontSize="sm"
            /></div>
          <div> <Button variant='secondary' text='Groceries'   fontSize="sm"
              /></div>
          <div  className="ml-6"> <Button variant='secondary' text='Travel'   fontSize="sm"
                /></div>
          <div> <Button variant='secondary' text='Shopping'   fontSize="sm"
                /></div>
          <div> <Button variant='secondary' text='Health'   fontSize="sm"
                /></div>

      </div>
      <div className="flex justify-center">  
         <div className=" mt-3"> <Button variant='primary' text='Add Expense'   fontSize="sm"/>
         </div>
      </div>
    </div>
    </div>}

        </div>;
}

export default AddExpense;
