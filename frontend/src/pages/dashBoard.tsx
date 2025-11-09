import {  useEffect, useState } from "react";
import AddExpense from "../components/AddExpenses";
import AddIncome from "../components/AddIncome";
import { Button } from "../components/Button";
import Card from "../components/Card";
import { ShareIcon } from "../icons/shareIcon";
import { useContent }from "../utils/incomeAdd.js";
import { useContentExpenses } from "../utils/expensesAdd.js";
import { IncomeTransition } from "../components/incomeTransition.js";



function DashBoard() {
  const [openIncome,setOpenIncome]=useState(false)
  const [openExpense,setOpenExpense]=useState(false)

  const[incomeControl,setIncomeControl]=useState(false);  /*fetch  control*/
  const[expenseControl,setExpenseControl]=useState(false);

  const [balance,setBalance]=useState(0);
  const [average,setAverage]=useState(1);

  /*for assining data*/



  

const { contentIncome, refresh ,calculateIncome , income} = useContent();
const {expense,contentExpenses,calculateExpenses,refreshExpenses}=useContentExpenses();

console.log(contentIncome,":at contentINcome at dashboard");


useEffect(()=>{
  refresh();
},[incomeControl])


useEffect(()=>{
  calculateIncome();
},[contentIncome])



useEffect(()=>{
refreshExpenses();
},[expenseControl]);


useEffect(()=>{
  calculateExpenses()
},[contentExpenses])

useEffect(()=>{
balanceCal(income,expense);
},[income,expense,])


useEffect(()=>{
averageCalculation(contentExpenses,expense);
},[contentExpenses,expense])


function balanceCal(income:number,expense:number){
  const balance=income-expense;
  setBalance(balance);
  return;
}

function averageCalculation(contentExpenses:any[],expense:number){
let values=0;
values=contentExpenses.length;
const averageSpend=(expense/values);
setAverage(averageSpend);
console.log("averageSpend:",averageSpend);
return;
}






  return (
    <div>
      <div className="flex flex-row h-20 bg-white shadow-md">
        <div className=" pr-80">
          <p className="text-2xl mt-3 font-bold text-blue-400 ml-10">
            Finance Manger
          </p>
          <p className="text-md text-blue-200 font-serif ml-10">
            manage your finances with ease
          </p>
        </div>
        <div className="ml-96 gap-6 flex flex-row justify-end mt-6 ">
          <Button
            onClick={() => setOpenIncome(true)}
            text="Add Income"
            variant="secondary"
            fontSize="sm"
          />

          <Button
            onClick={() => setOpenExpense(true)}
            text="Add Expense"
            variant="secondary"
            fontSize="sm"
          />
        </div>
      </div>
    

      <div className="flex flex-row " >
        <div>
          {" "}
          <Card
            icon={<ShareIcon />}
            variant="one"
            amount={expense+".00"}
            value1="Spent"
            value2="This month expenses"
          />
        </div>

        <div>
          {" "}
          <Card
            icon={<ShareIcon />}
            variant="two"
            amount={income+".00"}
            value1=" Income"
            value2="This month Income"
          />
        </div>

        <div>
          {" "}
          <Card
            icon={<ShareIcon />}
            variant="three"
            amount={balance+".00" }
            value1=" Balance "
            value2="This month Balance"
          />
        </div>

        <div>
          {" "}

          <Card
            icon={<ShareIcon />}
            variant="four"
            amount={average}
            value1="Average"
            value2="Per expense"
          />
        </div>
      </div>
 
    <AddIncome  openIncome={openIncome} setIncomeControl={setIncomeControl} setOpenIncome={setOpenIncome}/>
    <AddExpense openExpense={openExpense}  setExpenseControl={setExpenseControl} setOpenExpense={setOpenExpense}/>
   <div><IncomeTransition dataProp={contentIncome}/></div> 

    </div>
  );
}






export default DashBoard;
/*<Card variant='one' amount={1000.00} value1='Total money spent' value2='This month expenses' />
         <Card variant='one' amount={1000.00} value1='Total money spent' value2='This month expenses' />
        */


         /*<div className=" absolute ml-96">
    <AddIncome openIncome={openIncome} setOpenIncome={setOpenIncome}/>
      </div>
*/