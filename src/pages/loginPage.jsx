import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('/bg-image.jpg')] bg-center bg-cover">
            <div className="w-1/2 h-full flex justify-center items-center"></div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-[400px] h-[500px] backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-8 text-secondary">Sign in</h1>
                    <input 
                    onChange={
                        (e)=> {
                            // console.log(e.target.value)
                            setEmail(e.target.value)
                        }
                    }
                    value={email}
                    type="text" 
                    placeholder="Username" 
                    className="w-3/4 p-3 mb-6 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"/>
                    
                    <input 
                    onChange={
                        (e)=> {
                            // console.log(e.target.value)
                            setPassword(e.target.value)
                        }
                    }
                    value={password}
                    type="password" 
                    placeholder="Password" 
                    className="w-3/4 p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"/>

                    <p className="mb-6 w-3/4 text-right text-white">Forget password? <Link to="/forget-password" className="text-blue-500 hover:zoom-110">Click Here</Link></p>
                    <button className="w-3/4 p-3 bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 hover:zoom-110 hover:bg-blue-800 transition duration-300">
                        Sign in
                    </button>
                    <p className="mb-6 mt-3 text-right text-white">Don't have an account? <Link to="/register" className="text-blue-500 hover:zoom-110">Register</Link></p>
                </div>
            </div>  
        </div>
    )
}