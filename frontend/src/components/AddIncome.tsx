
import { useState , useRef} from "react";
import { ShareIcon } from "../icons/shareIcon";
import { Button } from "./Button";
import axios from "axios";
import { Input } from "./Input";


enum contentType {
  salary="salary",
  stockMarket="stockMarket",
  rental="rental",
  fixedDeposit='fixedDeposit',
  realEstate='realEstate'
}


function AddIncome({openIncome,setOpenIncome,setIncomeControl}) {
const[content,setContentType]=useState(contentType.salary);


const incomeRef=useRef<HTMLInputElement>();
const noteRef=useRef<HTMLInputElement>();


  async function addIncome(){
    
    const income=incomeRef.current?.value;
    const note=noteRef.current?.value;
    const category=content;
    console.log(income,note,category);

    try{
    const res=await axios.post('http://localhost:3000/api/v1/income',{
      income,
      note,
      category
    },{ 
            headers:{
           authorization: `Bearer ${localStorage.getItem("token")}`,
          }
    })
    console.log(res.data.message,"hello")
    alert('hello');
  }

 catch (err: any) {
    console.error(" Error:", err.response?.data || err.message);
    alert("Error: " + (err.response?.data?.message || "Bad Request"));
  }
     setIncomeControl((x)=>!x);
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
        <div className="ml-6 mt-1"> 
       
          <Input placeholder="Enter description" reference={noteRef}/>
          
          </div>
        
       
        <p className="ml-6 mt-3 font-bold">Amount$</p>
        <div className="ml-6 mt-1"> 
          
        
         <Input placeholder="$ 0.00" reference={incomeRef}/>
          
          
          </div>
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
         <div className=" mt-3"> <Button onClick={()=>addIncome()}    variant='primary' text='Add Income'   fontSize="sm"/>
         </div>
      </div>
    </div>
     </div>}
     
    </div>;
}

export default AddIncome;
