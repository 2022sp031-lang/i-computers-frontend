import { BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="w-full h-[100px] bg-accent relative flex justify-center items-center shrink-0">
            <Link to="/" className="w-[200px] h-full absolute left-0 flex items-center justify-center">
                <img src="/logo_two.png" className="h-[60px] object-cover mr-2"/>
            </Link>
            <div className="h-full flex justify-center items-center gap-10">
                <Link to="/" className="text-white font-semibold">Home</Link>
                <Link to="/products" className="text-white font-semibold">Products</Link>
                <Link to="/contact-us" className="text-white font-semibold">Contact Us</Link>
            </div>
            <Link to="/cart" className="w-[50px] h-[50px] absolute right-20 flex justify-center items-center">
                <BiCart className="text-white text-2xl"/>
            </Link>
        </div>
    )
}