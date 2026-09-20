import { Link } from "react-router-dom";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingAnimation from "../../components/loadingAnimation";
import ProductDeleteModal from "../../components/productDeleteModal";
import getFormattedPrice from "../../utils/price-format";
import OrderDetailsModal from "../../components/orderDetailsModel";


export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalOrders, setTotalOrders] = useState(0);
    const [isOrdersAreLoaded, setIsOrdersAreLoaded] = useState(false);

    useEffect(
        () => {
            if (!isOrdersAreLoaded) {
                const token = localStorage.getItem("token");
                console.log(token)

                axios.get(import.meta.env.VITE_API_URL + "/orders/" + pageSize + "/" + currentPage, {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).then(
                    (response) => {
                        setOrders(response.data.orders);
                        setTotalPages(response.data.totalPages);
                        setTotalOrders(response.data.total);
                        setIsOrdersAreLoaded(true);
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
                <div>
                    <h1 className="text-2xl font-semibold">Orders</h1>
                </div>
                <div className="flex items-centre gap-4">
                    <span className="text-sm">
                        Total Orders: <span className="font-semibold">{totalOrders}</span>
                    </span>
                </div>
            </div>


            {
                isOrdersAreLoaded ?
                    <>
                        <div>
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
                                        <th className="text-center border border-primary p-4 ">Action</th>
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
                                                        <td className="text-center text-wrap p-2">{new Date(item.date).toLocaleDateString()}</td>
                                                        <td className="text-center text-wrap p-2">{getFormattedPrice(item.total)}</td>
                                                        <td className="text-center text-wrap p-2">{item.status}</td>
                                                        <td className="text-center text-wrap p-2"><OrderDetailsModal order={item} refresh={()=> {setIsOrdersAreLoaded(false)}}/></td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full flex justify-end items-center gap-3 mt-4">
                            <button
                                onClick={() => {
                                    if (currentPage > 1) {
                                        setCurrentPage(currentPage - 1);
                                        setIsOrdersAreLoaded(false);
                                    }
                                }}
                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                            >
                                Previous
                            </button>
                            <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => {
                                    setCurrentPage(currentPage + 1);
                                    setIsOrdersAreLoaded(false);
                                }}
                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                            >
                                Next
                            </button>
                            <select
                                value={pageSize}
                                onChange={(e) => {
                                    setPageSize(parseInt(e.target.value));
                                    setIsOrdersAreLoaded(false);
                                }}
                                className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
                            >
                                <option value={2}>2</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </>
                    :
                    <LoadingAnimation />
            }
        </div>
    )
}