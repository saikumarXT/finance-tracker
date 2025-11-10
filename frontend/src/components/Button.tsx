import type { ReactElement } from "react";


interface buttonProps{
variant: "primary" | "secondary" | "final";
text:string;
onClick?:()=>void;
icons?:ReactElement;
px?:'sm'|'md'|'lg';
width?:'sm'|'md'|'lg';
fontSize?:'sm'|'md'|'lg';
}

const variantClass={
    "primary": "bg-blue-100 text-white ",
    "secondary": "bg-blue-400 text-white",
    "final":"bg-blue-600 text-white"
}

const pxClass={
    "sm":'px-1',
    "md":'px-3',
    "lg":"px-6s"
}

const widthClass={
    "sm":'w-20',
    "md":'w-30',
    "lg":"w-36"
}

const fontSizeClass={
    "sm":'text-sm',
    "md":'text-xl',
    "lg":"text-2xl"
}


const defaultClass=' px-2 h-9  rounded-lg font-bold';

export function Button({text,variant,onClick,px,icons,width,fontSize}:buttonProps){

    return<button  onClick={onClick} className={variantClass[variant] + " " +pxClass[px]+ " " + widthClass[width] + " " + fontSizeClass[fontSize] +" "+ defaultClass}
     >{icons}{text}</button>
}