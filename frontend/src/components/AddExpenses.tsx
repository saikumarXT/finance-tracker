import axios from "axios";
import { ShareIcon } from "../icons/shareIcon";
import { Button } from "./Button";
import { useRef, useState } from "react";
import { Input } from "./Input";


enum expensesTypes{
  Groceries='Groceries',
  Travel='Travel',
  Food='Food',
  Entertainment='Entertainment',
  Health='Health',
  Shopping='Shopping'
}



function AddExpense({openExpense,setOpenExpense}) {
const [openCategory,setCategory]=useState(expensesTypes.Entertainment);

const amountRef=useRef<HTMLInputElement>();
const noteRef=useRef<HTMLInputElement>()


    async function addExpenseData(){
      const note=noteRef.current?.value;
      const amount=amountRef.current?.value;
      const category=openCategory
      console.log(note,amount,category)


      try{
      const res=await axios.post('http://localhost:3000/api/v1/expenses',{
        category,
        amount,
        note
      },{
        headers:{
          authorization:`Bearer ${localStorage.getItem("token")}`,
        }
      })
      console.log(res);
      alert('done');
    }



  catch(err){
    console.log(err);
  }

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
        <div className="ml-6 mt-1">
          
           <Input placeholder="Enter the description" reference={noteRef}/>
          
           </div>
        <p className="ml-6 mt-3 font-bold">Amount$</p>
        <div className="ml-6 mt-1"> 
         
          <Input placeholder="$ 0.00" reference={amountRef}/> </div>
    
      </div>
        <p className="ml-6 mt-3  font-bold">Category</p>
      <div className="flex flex-wrap gap-1.5 mt-1 ">
          
          <div className="ml-6"> <Button  onClick={()=>setCategory(expensesTypes.Food)} variant='secondary' text='Food'    fontSize="sm"
              /></div>
          <div> <Button variant='secondary' text='Entertainment'    fontSize="sm" onClick={()=>setCategory(expensesTypes.Entertainment)}
            /></div>
          <div> <Button variant='secondary' text='Groceries'   fontSize="sm" onClick={()=>setCategory(expensesTypes.Groceries)}
              /></div>
          <div  className="ml-6"> <Button variant='secondary' text='Travel'   fontSize="sm" onClick={()=>setCategory(expensesTypes.Travel)}
                /></div>
          <div> <Button variant='secondary' text='Shopping'   fontSize="sm"   onClick={()=>setCategory(expensesTypes.Shopping)}
                /></div>
          <div> <Button variant='secondary' text='Health'   fontSize="sm"  onClick={()=>setCategory(expensesTypes.Health)}
                /></div>

      </div>
      <div className="flex justify-center">  
         <div className=" mt-3"> 
          <Button variant='primary' text='Add Expense' onClick={()=>addExpenseData()}  fontSize="sm"/>
         </div>
      </div>
    </div>
    </div>}

        </div>;
}
export default AddExpense;
