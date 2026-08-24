import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbTrash } from "react-icons/tb";

export default function ProductDeleteModal(props) {
    const product = props.product;
    const refresh = props.refresh;
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleDelete() {
        const token = localStorage.getItem('token');
        axios.delete(import.meta.env.VITE_API_URL + "/products/" + product.productId, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(
            () => {
                toast.success("Product deleted successfully.");
                refresh()
            }
        ).catch(
            (error) => {
                toast.error(error?.response?.data);
            }
        )
    }

    return (
        <>
            <TbTrash className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
                onClick={
                    () => {
                        setIsModalOpen(true)
                    }
                }
            />
            {
                isModalOpen &&
                <div className="w-screen h-screen fixed bg-black/35 bg-op top-0 left-0 flex justify-center items-center text-secondary">
                    <div className="w-[500px] h-[200px] bg-white flex flex-col justify-center items-center rounded-lg p-4">
                        <h1 className="text-xl font-semibold mb-4">Are you sure want to delete this product with product id {product.productId}?</h1>
                        <div className="flex gap-8 items-center justify-center mt-4">
                            <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-800 rounded-md"
                                onClick={
                                    ()=> {
                                        handleDelete()
                                        setIsModalOpen(false)
                                    }
                                }
                            >Delete</button>

                            <button className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-800 rounded-md"
                                onClick={
                                    ()=> {
                                        setIsModalOpen(false)
                                    }
                                }
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}