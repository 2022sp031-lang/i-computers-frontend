import { useState } from "react"
import toast from "react-hot-toast";
import api from "../utils/api";

export default function CreateOrderModel(props) {
    // orderId: "ORD0000001",
    // email: user.email,
    // firstName: user.fisrtName,
    // lastName: user.lastName,
    // addressLineOne: req.body.addressLineOne,
    // addressLineTwo: req.body.addressLineTwo,
    // city: req.body.city,
    // state: req.body.city,
    // postalCode: req.body.postalCode,
    // total: 0,
    // phone: req.body.phone,
    // items: []

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [addressLineOne, setAddressLineOne] = useState("");
    const [addressLineTwo, setAddressLineTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");

    const cart = props.cart;

    async function CreateOrder() {
        try {
            const token = localStorage.getItem("token");

            const data = {
                firstName,
                lastName,
                addressLineOne,
                addressLineTwo,
                city,
                state,
                postalCode,
                phone,
                items: []
            }

            for(let i=0; i<cart.length; i++) {
                const item = cart[i];
                data.items.push(
                    {
                        productId: item.product.productId,
                        quantity: item.quantity
                    }
                )
            }

            await api.post("/orders", data, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Order created successfully")
            setIsModelOpen(false)

        }catch(error) {
            toast.error(error?.response?.data?.message || "An error occured while creating Order.")
            console.log(error)
        }
    }

    return (
        <>
            <button className="bg-accent/80 text-white text-xl px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-accent transiton duration-300"
                onClick={
                    () => {
                        setIsModelOpen(true)
                    }
                }
            >Order Now</button>
            {
                isModelOpen &&
                <div className="fixed bg-black/70 w-screen h-screen top-0 left-0 flex justify-center items-center">
                    <div className="w-100 bg-white rounded-lg p-5 flex flex-col gap-4">
                        <h1 className="text-2xl font-bold">Shipping Details</h1>
                        <input type="text" placeholder="First Name" className="w-full text-sm border p-2 rounded" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last Name" className="w-full text-sm border p-2 rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" placeholder="Address Line 1" className="w-full text-sm border p-2 rounded" value={addressLineOne} onChange={(e) => setAddressLineOne(e.target.value)} />
                        <input type="text" placeholder="Address Line 2" className="w-full text-sm border p-2 rounded" value={addressLineTwo} onChange={(e) => setAddressLineTwo(e.target.value)} />
                        <input type="text" placeholder="City" className="w-full text-sm border p-2 rounded" value={city} onChange={(e) => setCity(e.target.value)} />
                        <input type="text" placeholder="State" className="w-full text-sm border p-2 rounded" value={state} onChange={(e) => setState(e.target.value)} />
                        <input type="text" placeholder="Postal Code" className="w-full text-sm border p-2 rounded" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                        <input type="text" placeholder="Phone" className="w-full text-sm border p-2 rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <div className="w-full flex flex-row justify-between items-center text-sm">
                            <button className="bg-gray-500 hover:bg-gray-700 transition duration-300 text-white px-4 py-2 rounded-lg font-semibold"
                                onClick={
                                    ()=> {
                                        setIsModelOpen(false)
                                    }
                                }
                            >Cancel</button>
                            <button className="bg-green-500 hover:bg-green-700 transition duration-300 text-white px-4 py-2 rounded-lg font-semibold"
                                onClick={CreateOrder}
                            >Place Order</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
} 