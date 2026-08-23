import axios from "axios";
import toast from "react-hot-toast";
import { TbTrash } from "react-icons/tb";

export default function ProductDeleteModal(props) {
    const product = props.product;
    const refresh = props.refresh;

    return (
        <TbTrash className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
            onClick={
                ()=> {
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
            }
        />
    )
}