import axios from "axios";
import { useState } from 'react';


export function useContent(){
const [contentIncome,setContent]=useState([]);
const [income,setIncome]=useState(0);

    function refresh() {
        console.log('inside refresh fun')
         axios.get('http://localhost:3000/api/v1/income',{
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`,
            },
        }).then((response)=>{
             setContent(response.data.income);
              console.log("total income:",contentIncome)
        })
        
    }

    function calculateIncome(){
        let totalIncomeValue= 0;
        contentIncome.map(({income})=>{
            totalIncomeValue= totalIncomeValue+income;
        })
        console.log("total:",totalIncomeValue);
        setIncome(totalIncomeValue);
        return totalIncomeValue;

    }
    



    return { contentIncome,refresh ,calculateIncome,income}
}

