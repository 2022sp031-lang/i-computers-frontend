import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


export default function AdminProductPage() {
    return (
        <div className="w-full h-full">
           <Link to='/admin/add-product' className="fixed bottom-5 right-7 w-[50px] h-[50px] bg-accent flex justify-center items-center text-2xl text-white rounded-full hover:bg-black hover:text-accent"><FaPlus /></Link>
        </div>
    )
}