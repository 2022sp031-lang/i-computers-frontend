import { useState } from "react"
import { addToCart, getCart } from "../utils/cart";
import getFormattedPrice from "../utils/price-format";

export default function CartPage() {
    const [cart, setCart] = useState(getCart());

    return (
        <div className="wifull h-full text-[50px] font-bold flex flex-col items-center p-5 gap-4">
            {
                cart.map(
                    (item)=> {
                        console.log(item)
                        return (
                            <div key={item.product.productId} className="bg-white w-[500px] h-[150px] rounded-lg shadow-2xl flex flex-row p-2 items-center relative">
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
                                <div className="w-[150px] h-ful absolute right-0 flex flex-col justify-end p-2 bottom-4">
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
                                </div>     
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}