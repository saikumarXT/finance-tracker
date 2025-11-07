import  { useRef } from 'react'
import { Button } from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';

function SigninPage() {
const nameRef=useRef<HTMLInputElement>();;
const passwordRef=useRef<HTMLInputElement>();
const navigate=useNavigate();


   async function  signin(){
        const userName=nameRef.current?.value;
        const password=passwordRef.current?.value;

        const response=await axios.post('http://localhost:3000/api/v1/signin',{
            userName,
            password
        }) 
        const token=response.data.token;
        console.log(token)
        localStorage.setItem('token',token);
        
                alert(response.data.message);
        if(token){
        navigate('/Dashboard');
      }

    }


  return (
    <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
        <div className="bg-white rounded-xl border flex flex-col min-w-48 p-8">
         <Input reference={nameRef} placeholder='Name' />
                <Input reference={passwordRef} placeholder='password' />
          <Button
            onClick={() =>signin() }
            text="Signin"
            variant="secondary"
            fontSize="sm"
          />
          </div>

        
      
        
    </div>
  )
}

export default SigninPage
