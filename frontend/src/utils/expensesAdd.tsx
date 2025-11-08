import axios from "axios";
import { useState } from 'react';


export function useContentExpenses(){
const [useContentExpenses,setContentExpenses]=useState([]);
const [expense,setExpense]=useState(0);

    function refresh() {
        console.log('inside refresh fun expense')
         axios.get('http://localhost:3000/api/v1/expenses',{
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`,
            }
        }).then((response)=>{
             setContentExpenses(response.data.expenses);
              console.log("content inside refresh:",expense)
        })
        
    }

    function calculateIncome(){
        let totalIncomeValue= 0;
        content.map(({income})=>{
            totalIncomeValue= totalIncomeValue+income;
        })
        console.log("total:",totalIncomeValue);
        setIncome(totalIncomeValue);
        return totalIncomeValue;

    }
   

    return { content,refresh ,calculateIncome,income}
}

