import type { ReactElement } from "react";


interface buttonProps{
variant: "primary" | "secondary";
text:string;
onClick?:()=>void;
icons?:ReactElement;
}

const variantClass={
    "primary": "bg-blue-200 text-white ",
    "secondary": "bg-blue-400 text-white"
}

const defaultClass='px-5 py-3 h-14 text-lg rounded-lg font-bold';

export function Button({text,variant,onClick,icons}:buttonProps){

    return<button  onClick={onClick} className={variantClass[variant] +" " + defaultClass}
     >{icons}{text}</button>
}