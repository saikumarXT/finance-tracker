interface InputProps { 
    placeholder: string; 
    reference?: any
}


const defaultClass="pl-6 w-64 h-8 rounded-md border-2  bg-gray-50 "

export function Input({placeholder, reference}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="pl-6 m-2 w-64 h-8 rounded-md border-2  bg-gray-50" ></input>
    </div>
}