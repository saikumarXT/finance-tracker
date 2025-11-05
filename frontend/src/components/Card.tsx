import type { ReactElement } from "react";

interface cardProps{
    variant:"one" | "two" | "three" | "four";
    icon?:ReactElement;
    value1:string;
    value2:string;
    amount:number;
}



const variantClass={
  "one":"bg-blue-300",
  "two":"bg-yellow-300",
  "three":"bg-pink-300",
  "four":"bg-red-400"
}


const defaultData='bg-red-100 flex flex-col rounded-2xl border-red-500 m-4 h-48 w-72';

function Card({variant,icon,value1,value2,amount}:cardProps) {
  return (
    <div className={variantClass[variant]+" "+defaultData }>
      <div className="border-blue-500 h-20">
        <div className="mt-8 p-5">{icon}</div>
      </div>

      <div className="border-red-500 h-24">
        <div><p className="font-bold ml-5 text-3xl text-white ">${amount}.00</p> </div>
        <div>
          <p className="font-bold text-xl text-white font-mono ml-5 mt-2">{value1} </p>
          <p className="font-bold text-sm  text-white font-mono ml-5">{value2} </p>  
          </div>
      </div>
    </div>
  )
}


export default Card;


/*
className=""
*/









/*function Card() {
  return (
    <div>
        <div className='bg-blue-100'>
        hello
        hii how are yoy
        </div>
         <div className='bg-pink-400'>
        hello
        hii how are yoy
        </div>
         <div className='bg-orange-300'>
        hello
        hii how are yoy
        </div>
        <div className='bg-green-300'>
        hello
        hii how are yoy
        </div>
    </div>*/
