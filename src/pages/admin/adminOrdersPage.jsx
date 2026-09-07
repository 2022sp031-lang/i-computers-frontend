import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingAnimation from "../../components/loadingAnimation";
import ProductDeleteModal from "../../components/productDeleteModal";
import getFormattedPrice from "../../utils/price-format";


export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isOrdersAreLoaded, setOrdersAreLoaded] = useState(false);

    useEffect(
        () => {
            if (!isOrdersAreLoaded) {
                const token = localStorage.getItem("token");
                console.log(token)

                axios.get(import.meta.env.VITE_API_URL + "/orders/10/1", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).then(
                    (response) => {
                        setOrders(response.data.orders)
                        console.log(response.data.orders)
                        setOrdersAreLoaded(true)
                    }

                ).catch(
                    (error) => {
                        console.log(error?.response?.data)
                    }
                )
            }
        },
        [isOrdersAreLoaded]
    )

    return (
        <div className="w-full h-full overflow-y-scroll p-5">
            {/* {
                products.map(
                    (item, index) => {
                        console.log(item)
                        console.log(index)

                        return (<p key={index}> {item.name} </p>)
                    }

                )
            } */}

            <div className="w-full h-[100px] bg-accent flex items-center p-5 rounded-lg text-white justify-between sticky top-0 shadow-2xl ">
                <h1 className="text-2xl font-semibold">Orders</h1>
            </div>

            {
                isOrdersAreLoaded ?
                    <>
                        <table className="mt-8 w-full">
                            <thead className="bg-accent/45 h-[50px] text-white">
                                <tr>
                                    <th className="text-center border border-primary p-4 ">Order ID</th>
                                    <th className="text-center border border-primary p-4 ">Email</th>
                                    <th className="text-center border border-primary p-4 ">First Name</th>
                                    <th className="text-center border border-primary p-4 ">First Name</th>
                                    <th className="text-center border border-primary p-4 ">Phone</th>
                                    <th className="text-center border border-primary p-4 ">Date</th>
                                    <th className="text-center border border-primary p-4 ">Total</th>
                                    <th className="text-center border border-primary p-4 ">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    orders.map(
                                        (item) => {
                                            return (
                                                <tr className="odd:bg-gray-600 even:bg-primary odd:text-white border-t-4 border-primary hover:bg-accent/45" key={item.orderId}>
                                                    <td className="text-center text-wrap p-2">{item.orderId}</td>
                                                    <td className="text-center text-wrap p-2">{item.email}</td>
                                                    <td className="text-center text-wrap p-2">{item.firstName}</td>
                                                    <td className="text-center text-wrap p-2">{item.lastName}</td>
                                                    <td className="text-center text-wrap p-2">{item.phone}</td>
                                                    <td className="text-center text-wrap p-2">{new Date(item.createdAt).toLocaleDateString()}</td>
                                                    <td className="text-center text-wrap p-2">{getFormattedPrice(item.total)}</td>
                                                    <td className="text-center text-wrap p-2">{item.status}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </>
                    :
                    <LoadingAnimation />
            }
        </div>
    )
}