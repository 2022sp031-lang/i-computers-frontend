import { useState } from "react"
import { addToCart, getCart, getCartTotal } from "../utils/cart";
import getFormattedPrice from "../utils/price-format";
import { Link } from "react-router-dom";

export default function CartPage() {
    const [cart, setCart] = useState(getCart());

    return (
        <div className="w-full min-h-full text-[50px] font-bold flex flex-col items-center p-5 pb-20 gap-4">
            {
                cart.map(
                    (item)=> {
                        console.log(item)
                        return (
                            <div key={item.product.productId} className="bg-white w-full lg:w-[800px] h-[150px] rounded-lg shadow-2xl flex flex-row p-2 items-center relative ">
                                <img className="w-[100px] h-[100px] object-cover rounded-lg" src={item.product.image}/>
                                <div className="h-full w-[400px] flex flex-col ml-2">
                                    <h1 className="text-lg font-semibold">{item.product.name}</h1>
                                    <p className="text-sm text-gray-400">{item.product.productId}</p>
                                    {
                                        item.product.labelPrice > item.product.price && <span className="text-sm text-gray-400 mt-8 line-through">{getFormattedPrice(item.product.labelPrice)}</span>
                                    }
                                    <p className="text-accent font-semibold text-sm mt-2">
                                        {
                                            getFormattedPrice(item.product.price)
                                        }
                                    </p>
                                </div>
                                <div className="w-[300px] absolute right-0 flex flex-col justify-end items-end p-2 bottom-2">
                                    <div className="w-[100px] h-[30px] border rounded-full flex items-center justify-between px-2">
                                        <button className="text-xl font-bold cursor-pointer hover:"
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
            <div className="bg-white lg:w-[800px] rounded-t-lg border shadow-2xl flex flex-row p-2 items-center justify-between bottom-0 fixed">
                <Link to="/checkout" state={cart} className="bg-accent/80 text-white text-xl px-4 py-2 rounded-lg font-semibold hover:bg-accent  transition duration-300">Checkout</Link>
                <p className="text-xl font-bold ml-4">Total: {getFormattedPrice(getCartTotal(cart))}</p>
            </div>
        </div>
    )
}