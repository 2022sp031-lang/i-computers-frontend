import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")

    const navigate = useNavigate();

    function handleRegister() {
        if(password != confirmPassword) {
            toast.error("Password do not match!")
            return
        }

        axios.post(import.meta.env.VITE_API_URL + "/users", {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }).then(() => {
            toast.success('Registered successfull!')
            navigate("/login")

        }).catch((error) => {
            // console.log("login falied:", error)
            console.log(error.response)
            // alert(error.response.data.message)
            toast.error(error.response.data.message)
        })
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('/bg-image.jpg')] bg-center bg-cover">
            <div className="w-0 lg:w-1/2 h-full flex justify-center items-center"></div>
            <div className="w-[90%] lg:w-1/2 h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px] backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-8 text-secondary">Sign Up</h1>
                    <div className="w-3/4 flex gap-4 mb-6">
                        <input
                            onChange={
                                (e) => {
                                    setFirstName(e.target.value)
                                }
                            }
                            value={firstName}
                            placeholder="First Name"
                            className="w-1/2 p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <input
                            onChange={
                                (e) => {
                                    setLastName(e.target.value)
                                }
                            }
                            value={lastName}
                            placeholder="Last Name"
                            className="w-1/2 p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>
                    <input
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setEmail(e.target.value)
                            }
                        }
                        value={email}
                        type="text"
                        placeholder="Username"
                        className="w-3/4 p-3 mb-6 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" />

                    <input
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setPassword(e.target.value)
                            }
                        }
                        value={password}
                        type="password"
                        placeholder="Password"
                        className="w-3/4 p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" />

                    <input
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setConfirmPassword(e.target.value)
                            }
                        }
                        value={confirmPassword}
                        type="password"
                        placeholder="Confirm Password"
                        className="w-3/4 p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent mt-6" />
                    <button onClick={handleRegister} className="w-3/4 p-3 mt-4 bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 hover:zoom-110 hover:bg-blue-800 transition duration-300">
                        Sign Up
                    </button>
                    <p className="mb-6 mt-3 text-right text-white">Already have an account? <Link to="/login" className="text-blue-500 hover:zoom-110">Login</Link></p>
                </div>
            </div>
        </div>
    )
}