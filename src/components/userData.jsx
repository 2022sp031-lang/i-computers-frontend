import { useEffect, useState } from "react"
import api from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";

export default function UserData() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(
        () => {
            const token = localStorage.getItem("token");

            if (token) {
                api.get("/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }

                }).then((response) => {
                    setUser(response.data)

                }).catch((error) => {
                    console.log(error)
                })
            }
        }
        , [])

    return (
        <>
            {user ? (
                <div className="flex aspect-square lg:w-[150px] h-full aspect-square relative rounded-lg">
                    <img src={user.image} referrerPolicy="no-referrer" className="w-full lg:w-auto aspect-square lg:static absolute rounded-lg" />
                    <select className= "text-center w-full absolute lg:static text-transparent lg:text-white h-full lg:cursor-pointer"
                        onChange={(e) => {
                            if (e.target.value === "option2") {
                                navigate("/settings")
                            } else if (e.target.value === "option3") {
                                navigate("/my-orders")
                            } else if (e.target.value === "option4") {
                                localStorage.removeItem("token")
                                navigate("/login")
                            }

                            e.target.value = "option1"
                        }} 
                    >
                        <option value="option1" className="bg-secondary">{user.firstName}</option>
                        <option value="option2" className="bg-secondary text-white">Settings</option>
                        <option value="option3" className="bg-secondary text-white">My Orders</option>
                        <option value="option4" className="bg-secondary text-white">Logout</option>
                    </select>
                </div>
            ) : (
                <>
                    <Link to="/login" className="lg:text-white lg:text-lg lg:font-semibold lg:mr-4 h-full aspect-square flex justify-center items-center rounded-lg text-accent text-3xl shadow-2xl shadow-accent">
                        <CiUser/>
                    </Link>
                    <Link to="/register" className="text-white text-lg font-semibold lg:block hidden">
                        Register
                    </Link>
                </>
            )}
        </>
    )
}