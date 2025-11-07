import  { useRef } from 'react'
import { Button } from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';

function SignupPage() {
const nameRef=useRef<HTMLInputElement>();
const passwordRef=useRef<HTMLInputElement>();
const navigate=useNavigate();


   async function  signup(){
        const userName=nameRef.current?.value;
        const password=passwordRef.current?.value;
        console.log(userName)
            console.log(password)

        const res= await axios.post('http://localhost:3000/api/v1/signup',{
            userName,
            password
        }) 
        const data=res.data.message;
        navigate("/signin");
        alert(data);
    }


  return (
    <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
        <div className="bg-white rounded-xl border flex flex-col min-w-48 p-8">

        <Input reference={nameRef} placeholder='Name' />
       <Input reference={passwordRef} placeholder='password' />
          <Button
            onClick={signup}
            text="Signup"
            variant="secondary"
            fontSize="sm"
          />
          </div>
    </div>
  )
}

export default SignupPage
