
import { useState } from "react";
import { ShareIcon } from "../icons/shareIcon";
import { Button } from "./Button";
import axios from "axios";

enum contentType {
  salary="salary",
  stockMarket="stockMarket",
  rental="rental",
  fixedDeposit='fixedDeposit',
  realEstate='real-Estate'
}


function AddIncome({openIncome,setOpenIncome}) {
const[incomeData,SetIncomeData]=useState();
const[content,setContentType]=useState(contentType.salary);



const incomeRef=useRef();
const noteRef=useref();


  async function addIncome(){
    const response=axios.post('http://localhost:3000/api/v1/user/income',{
      
    });

    return
  }


  return <div>
    {openIncome && <div className=" w-screen h-screen fixed top-0 left-0 flex justify-center">

    <div className=" opacity-100 bg-white h-96 w-80 m-16 border-2 rounded-xl shadow-xl ">
      <div className="flex flex-column">
        <div>
          <p className="font-bold text-xl pl-2 pt-1 ml-6">Add Income</p>
          <p className="text-sm pl-2 pb-2 ml-6">Track your Income</p>
        </div>
        <div className="flex justify-end">
          <div className="ml-32 mt-3">
              <button onClick={()=>setOpenIncome(false)}>
                <ShareIcon/>
              </button>
            </div>
        </div>
      </div>
      <div>
        <p className="ml-6 mt-3 font-bold">Where did you get Money ?</p>
        <div className="ml-6 mt-1"> <input placeholder="Enter description" type="text"   className="pl-6 w-64 h-8 rounded-md border-2  bg-gray-50 "   /></div>
        <p className="ml-6 mt-3 font-bold">Amount$</p>
        <div className="ml-6 mt-1"> <input placeholder="$ 0.00" type="text" className="pl-6 w-24 h-8  rounded-md border-2 bg-gray-50"/> </div>
      </div>
        <p className="ml-6 mt-3  font-bold">Category</p>
      <div className="flex flex-wrap gap-1.5 justify-center mt-2 ">
          
          <div className=""> <Button onClick={()=>setContentType(contentType.salary)} variant='secondary' text='Salary'    fontSize="sm"
              /></div>
          <div> <Button onClick={()=>setContentType(contentType.stockMarket)} variant='secondary' text='StockMarket'    fontSize="sm"
            /></div>
          <div> <Button onClick={()=>setContentType(contentType.rental)} variant='secondary' text='Rental'   fontSize="sm"
              /></div>
          <div  className=""> <Button onClick={()=>setContentType(contentType.fixedDeposit)} variant='secondary' text='FixedDeposit'   fontSize="sm"
                /></div>
          <div> <Button onClick={()=>setContentType(contentType.realEstate)} variant='secondary' text='Real-estate'   fontSize="sm"
                /></div>
      </div>
      <div className="flex justify-center">  
         <div className=" mt-3"> <Button onClick={addIncome} variant='primary' text='Add Income'   fontSize="sm"/>
         </div>
      </div>
    </div>
     </div>}
     
    </div>;
}

export default AddIncome;


/*<div className=" absolute h-screen w-screen top-0 opacity-20 bg-slate-500">*/