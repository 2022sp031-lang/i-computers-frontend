import { useState } from "react"
import { addToCart, getCart, getCartTotal } from "../utils/cart";
import getFormattedPrice from "../utils/price-format";
import { Link } from "react-router-dom";

export default function CartPage() {
    const [cart, setCart] = useState(getCart());

    return (
        <div className="w-full min-h-full text-[50px] font-bold flex flex-col items-center p-5 lg:pb-20 pb-[150px] gap-4">
            {
                cart.map(
                    (item)=> {
                        console.log(item)
                        return (
                            <div key={item.product.productId} className="bg-white w-full lg:w-[500px] lg:h-[200px] rounded-lg shadow-2xl flex flex-col lg:flex-row p-2 lg:items-center relative ">
                                <img className="lg:w-[100px] h-[100px] object-cover rounded-l-lg" src={item.product.image}/>

                                <div className="h-full lg:w-[400px] w-full">
                                    <h1 className="text-lg font-semibold">{item.product.name}</h1>
                                    <p className="text-sm text-gray-500">{item.product.productId}</p>
                                    {
                                        item.product.labelPrice > item.product.price && <span className="text-sm text-gray-500 mt-2 line-through">{getFormattedPrice(item.product.labelPrice)}</span>
                                    }
                                    <p className="text-accent font-semibold text-sm">
                                        {
                                            getFormattedPrice(item.product.price)
                                        }
                                    </p>
                                </div>

                                <div className="w-[200px] h-full absolute right-2 flex flex-col justify-end items-end p-2">
                                    <div className="w-[100px] h-[30px] border rounded-full flex items-center justify-between px-2">
                                        <button className="text-xl font-bold cursor-pointer hover:text-accent"
                                            onClick={
                                                ()=> {
                                                    addToCart(item.product, -1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >-</button>
                                        <span className="text-xl">{item.quantity}</span>
                                        <button className="text-xl font-bold cursor-pointer hover:text-accent transition duration-300"
                                            onClick={
                                                ()=> {
                                                    addToCart(item.product, 1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >+</button>    
                                    </div>
                                    <p className="text-xl  mt-2"><span className="text-secondary font-semibold">{getFormattedPrice(item.product.price * item.quantity)}</span></p>     
                                </div>     
                            </div>
                        )
                    }
                )
            }
            <div className="bg-white lg:w-[500px] w-full rounded-t-lg border shadow-2xl flex flex-row p-2 items-center justify-between lg:bottom-0 bottom-[82px] fixed">
                <Link to="/checkout" state={cart} className="bg-accent/80 text-white text-[16px] px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-accent transiton duration-300">Checkout</Link>
                <p className="text-xl font-bold ml-4">Total: {getFormattedPrice(getCartTotal(cart))}</p>
            </div>
        </div>
    )
}