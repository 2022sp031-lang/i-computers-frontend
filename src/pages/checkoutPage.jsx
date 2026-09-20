import { useState } from "react"
import { addToCart, getCart, getCartTotal } from "../utils/cart";
import getFormattedPrice from "../utils/price-format";
import { useLocation } from "react-router-dom";
import CreateOrderModel from "../components/createOrderModel";

export default function CheckoutPage() {
    const location = useLocation();
    const [cart, setCart] = useState(location.state);

    return (
        <div className="w-full min-h-full text-[50px] font-bold flex flex-col items-center p-5 lg:pb-20 pb-[150px] gap-4">
            {
                cart.map(
                    (item, index)=> {
                        console.log(item)
                        return (
                            <div key={item.product.productId} className="bg-white w-full lg:w-[500px] lg:h-[200px] rounded-lg shadow-2xl flex flex-col lg:flex-row p-2 lg:items-center relative ">
                                <img className="w-[100px] h-[100px] object-cover rounded-lg" src={item.product.image}/>
                                <div className="h-full lg:w-[400px] w-full">
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
                                        <button className="text-xl font-bold cursor-pointer hover:bg-accent"
                                            onClick={
                                                ()=> {
                                                    const newCart = [...cart];
                                                    newCart[index].quantity += -1;
                                                    if(newCart[index].quantity <= 0) {
                                                        newCart.splice(index, 1)
                                                    }
                                                    setCart(newCart)
                                                }
                                            }
                                        >-</button>
                                        <span className="text-xl">{item.quantity}</span>
                                        <button className="text-xl font-bold cursor-pointer hover:text-accent transition duration-300"
                                            onClick={
                                                ()=> {
                                                    const newCart = [...cart];
                                                    newCart[index].quantity += 1;
                                                    setCart(newCart)
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
            <div className="bg-white lg:w-[800px] w-full rounded-t-lg border shadow-2xl flex flex-row p-2 items-center justify-between lg:bottom-0 bottom-[82px] fixed">
                <CreateOrderModel cart={cart}/>
                <p className="text-xl font-bold ml-4">Total: {getFormattedPrice(getCartTotal(cart))}</p>
            </div>
        </div>
    )
}
