const sampleProducts = [
    {
        productId: "PROD-001",
        name: "Logitech MX Master 3S Wireless Mouse",
        altNames: ["MX Master 3S", "Logitech Wireless Mouse"],
        price: 89.99,
        labelledPrice: 99.99,
        description:
            "Ergonomic wireless mouse with ultra-fast scrolling, 8K DPI tracking, and quiet clicks. Compatible with Windows, macOS, and Linux.",
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
        ],
        brand: "Logitech",
        model: "MX Master 3S",
        category: "Peripherals",
        isAvailable: true,
        stock: 45,
    },
    {
        productId: "PROD-002",
        name: "Corsair Vengeance RGB Pro 32GB DDR4 RAM",
        altNames: ["Corsair Vengeance 32GB", "DDR4 RAM Kit"],
        price: 119.99,
        labelledPrice: 139.99,
        description:
            "High-performance 32GB (2x16GB) DDR4 memory kit with dynamic multi-zone RGB lighting, designed for overclocking.",
        images: [
            "https://images.unsplash.com/photo-1591488320449-011701bb6704",
            "https://images.unsplash.com/photo-1562976540-1502c2145186",
        ],
        brand: "Corsair",
        model: "Vengeance RGB Pro",
        category: "Memory",
        isAvailable: true,
        stock: 60,
    },
    {
        productId: "PROD-003",
        name: "Samsung 970 EVO Plus 1TB NVMe SSD",
        altNames: ["Samsung NVMe SSD", "970 EVO Plus 1TB"],
        price: 79.99,
        labelledPrice: 94.99,
        description:
            "High-speed NVMe M.2 SSD with read speeds up to 3500MB/s, ideal for gaming and professional workloads.",
        images: [
            "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea",
            "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8",
        ],
        brand: "Samsung",
        model: "970 EVO Plus",
        category: "Storage",
        isAvailable: true,
        stock: 80,
    },
    {
        productId: "PROD-004",
        name: "ASUS ROG Strix 27\" 165Hz Gaming Monitor",
        altNames: ["ASUS ROG Monitor", "Strix 27 inch 165Hz"],
        price: 349.99,
        labelledPrice: 399.99,
        description:
            "27-inch QHD IPS gaming monitor with 165Hz refresh rate, 1ms response time, and NVIDIA G-SYNC compatibility.",
        images: [
            "https://images.unsplash.com/photo-1547082299-de196ea013d6",
            "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
        ],
        brand: "ASUS",
        model: "ROG Strix XG27AQ",
        category: "Monitors",
        isAvailable: true,
        stock: 25,
    },
    {
        productId: "PROD-005",
        name: "NVIDIA GeForce RTX 4070 Graphics Card",
        altNames: ["RTX 4070", "NVIDIA GPU"],
        price: 599.99,
        labelledPrice: 649.99,
        description:
            "High-performance graphics card with 12GB GDDR6X memory, ray tracing, and DLSS 3 support for next-gen gaming.",
        images: [
            "https://images.unsplash.com/photo-1587202372616-b43abea06c2a",
            "https://images.unsplash.com/photo-1591489378430-ef2f4c626b52",
        ],
        brand: "NVIDIA",
        model: "RTX 4070",
        category: "Graphics Cards",
        isAvailable: true,
        stock: 15,
    },
    {
        productId: "PROD-006",
        name: "Keychron K8 Wireless Mechanical Keyboard",
        altNames: ["Keychron K8", "Mechanical Keyboard"],
        price: 94.99,
        labelledPrice: 109.99,
        description:
            "Tenkeyless wireless mechanical keyboard with hot-swappable switches, RGB backlight, and multi-device Bluetooth pairing.",
        images: [
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
            "https://images.unsplash.com/photo-1595225476474-63038da0c7bb",
        ],
        brand: "Keychron",
        model: "K8",
        category: "Peripherals",
        isAvailable: false,
        stock: 0,
    }
];

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