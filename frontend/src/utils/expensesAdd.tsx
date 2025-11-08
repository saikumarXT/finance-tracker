import axios from "axios";
import { useState } from 'react';


export function useContentExpenses(){
const [contentExpenses,setContentExpenses]=useState([]); /*raw array*/
const [expense,setExpense]=useState(0);   /*cal data-*/

    function refreshExpenses() {
        console.log('inside refresh fun expense')
         axios.get('http://localhost:3000/api/v1/expenses',{
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`,
            }
        }).then((response)=>{
             setContentExpenses(response.data.expenses);
              console.log("total expenses:",contentExpenses)
        })
        
    }

    function calculateExpenses(){
        let totalExpensesValue=0;
        contentExpenses.map(({amount})=>{
            totalExpensesValue=totalExpensesValue+amount;
        })
        console.log("total:",totalExpensesValue);
        setExpense(totalExpensesValue);
        return totalExpensesValue;
    }
   

    return {contentExpenses,refreshExpenses ,calculateExpenses,expense}
}

