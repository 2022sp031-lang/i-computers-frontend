import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingAnimation from "../../components/loadingAnimation";
import ProductDeleteModal from "../../components/productDeleteModal";


export default function AdminProductPage() {

    const [products, setProducts] = useState([]);
    const [isProductsAreLoaded, setProductsAreLoaded] = useState(false);

    useEffect(
        () => {
            if (!isProductsAreLoaded) {
                const token = localStorage.getItem("token");
                console.log(token)

                axios.get(import.meta.env.VITE_API_URL + "/products", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).then(
                    (response) => {
                        setProducts(response.data)
                        setProductsAreLoaded(true)
                    }

                ).catch(
                    (error) => {
                        console.log(error?.response?.data)
                    }
                )
            }
        },
        [isProductsAreLoaded]
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

            <div className="w-full h-[100px] bg-accent flex items-center p-5 rounded-lg text-white justify-between sticky top-0 shadow-2xl">
                <h1 className="text-2xl font-semibold">Products</h1>
            </div>

            {
                isProductsAreLoaded ?
                <table className="mt-8 w-full">
                    <thead className="bg-accent/45 h-[50px] text-white">
                        <tr>
                            <th className="text-center border border-primary p-4 ">Images</th>
                            <th className="text-center border border-primary p-4 ">Product ID</th>
                            <th className="text-center border border-primary p-4 ">Name</th>
                            <th className="text-center border border-primary p-4 ">Price</th>
                            <th className="text-center border border-primary p-4 ">Labelled Price</th>
                            <th className="text-center border border-primary p-4 ">Brand</th>
                            <th className="text-center border border-primary p-4 ">Model</th>
                            <th className="text-center border border-primary p-4 ">Category</th>
                            <th className="text-center border border-primary p-4 ">Availability</th>
                            <th className="text-center border border-primary p-4 ">Stock</th>
                            <th className="text-center border border-primary p-4 ">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map(
                                (item, index) => {
                                    return (
                                        <tr className="odd:bg-gray-600 even:bg-primary odd:text-white border-t-4 border-primary hover:bg-accent/45" key={index}>
                                            <td className="p-2">
                                                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                                            </td>
                                            <td className="text-center text-wrap p-2">{item.productId}</td>
                                            <td className="text-center text-wrap p-2">{item.name}</td>
                                            <td className="text-center text-wrap p-2">{item.price}</td>
                                            <td className="text-center text-wrap p-2">{item.labelPrice}</td>
                                            <td className="text-center text-wrap p-2">{item.brand}</td>
                                            <td className="text-center text-wrap p-2">{item.model}</td>
                                            <td className="text-center text-wrap p-2">{item.category}</td>
                                            <td className="text-center text-wrap p-2"></td>
                                            <td className="text-center text-wrap p-2">{item.stock}</td>
                                            <td className="text-center text-wrap p-2">
                                                <ProductDeleteModal 
                                                    product={item}
                                                    refresh={
                                                        ()=> {
                                                            setProductsAreLoaded(false)
                                                        }
                                                    }
                                                />

                                                {/* <TbTrash className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
                                                    onClick={
                                                        () => {
                                                            toast.success(item.productId)

                                                            const token = localStorage.getItem('token');
                                                            axios.delete(import.meta.env.VITE_API_URL + "/products/" + item.productId, {
                                                                headers: {
                                                                    "Authorization": "Bearer " + token
                                                                }
                                                            }).then(
                                                                () => {
                                                                    toast.success("Product deleted successfully.");
                                                                    setProductsAreLoaded(false)
                                                                }
                                                            ).catch(
                                                                (error) => {
                                                                    toast.error(error?.response?.data);
                                                                }
                                                            )
                                                        }
                                                    }
                                                /> */}

                                                <Link to='/admin/edit-product' state={item}>
                                                    <BiEdit className="text-2xl text-blue-500 cursor-pointer hover:text-blue-700" />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
                :
                <LoadingAnimation />
            }

            <Link to='/admin/add-product'
                className="fixed bottom-5 right-7 w-[50px] h-[50px] bg-accent flex justify-center items-center text-2xl text-white rounded-full hover:bg-black hover:text-accent"><FaPlus />
            </Link>
        </div>
    )
}