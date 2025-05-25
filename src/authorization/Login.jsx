import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { auth } from "../author/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login=()=>{
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [passwd,setPasswd]=useState("");
    console.log("added Login");
    const handleLogin= async (e)=> {
        e.preventDefault()
        try {
            const currentUser=await signInWithEmailAndPassword(auth,email,passwd);
            console.log(currentUser.user)
            
            
            navigate("/");
            

        } catch (error) {
            console.log(error.message);
      
        }


    }
    return(
        
        <div className="min-h-screen w-full flex items-center justify-center">
            <form onSubmit={handleLogin} className="flex flex-col max-w-md w-full p-6 mx-auto shadow rounded-lg bg-white  gap-4">
            <h3 className="text-black text-lg text-center font-bold">LOGIN</h3>
            <div className="flex flex-col gap-1 ">
                <label className="text-sm">Email Id</label>
                <input  type="email" placeholder="abc@gmail.com"  value={email}required onChange={(e)=>setEmail(e.target.value)} className="py-1 px-3 bg-gray-100 rounded-md border border-black-400    focus:ring-black-500"/>
            </div>
            <div  className="flex flex-col gap-1">
                <label className="text-sm">Password</label>
                <input  type="password" placeholder="at least 6 chars"  value={passwd}required onChange={(e)=>setPasswd(e.target.value)}className="py-1 px-3 bg-gray-100 rounded-md border border-black-400 focus:ring-black-500"/>
            </div>
            
            <button type="submit" className="bg-black text-white rounded-md py-2 px-4 text-center">Login</button>
            
            <div>
                <p className="text-sm text-center">Don't have an account?<Link to="/register" className="text-black-600 ml-3 underline">REGISTER</Link></p>
            </div>
        </form>
        </div>
    )
}
export default Login;