import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";
import toast from "react-hot-toast";
import LoadingAnimation from "../components/loadingAnimation";
import ImageSlideShow from "../components/imageSlideShow";
import getFormattedPrice from "../utils/price-format";
import { addToCart, getCart } from "../utils/cart";


export default function ProductOverviewPage() {
    const parameters = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(
        () => {
            api.get("/products/" + parameters.productId).then(
                (response) => {
                    console.log(response.data)
                    setStatus("success")
                    setProduct(response.data)

                }
            ).catch(
                (error) => {
                    toast.error(error?.response?.data?.message || "An error occurs while fetching products.")
                    setStatus("error")
                }
            )
        }, []
    )

    return (

        <div className="w-full h-full flex justify-center items-center">
            {
                status == "loading" && <LoadingAnimation />
            }
            {
                status == "error" &&
                <div className="w-full h-[300px] flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold">Failed to product details.</h1>
                    <Link to={"/products"} className="px-4 py-2 bg-accent text-white rounded hover:bg-blue-800">Back to Products</Link>
                </div>
            }
            {
                status == "success" &&
                <div className="h-full w-full flex">
                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                        <ImageSlideShow images={product.images} />
                    </div>
                    <div className="w-1/2 h-full flex flex-col p-4">
                        <h1 className="text-2xl font-bold">{product.name}
                            {
                                product.altNames.map(
                                    (alternativeNames, index) => {
                                        return (
                                            <span key={index} className="text-m text-gray-500 ml-2">| {alternativeNames} |</span>
                                        )
                                    }
                                )
                            }
                        </h1>
                        <h2 className="text-sm text-gray-500 mt-5">{product.productId}</h2>
                        <div className="w-full mt-5 flex flex-col">
                            <p className="text-accent font-semibold text-4xl">
                                {
                                    getFormattedPrice(product.price)
                                }
                            </p>
                            {
                                product.labelPrice > product.price &&
                                <span className="text-xl text-gray-500 line-through">
                                    {
                                        getFormattedPrice(product.labelPrice)
                                    }
                                </span>
                            }
                        </div>
                        
                        <div className="w-full mt-5 flex gap-10">
                            <span className="text-gray-800 font-semibold">{product.brand}</span>
                            <span className="text-gray-800 font-semibold">{product.model}</span>
                        </div>
                        <div className="w-full mt-5 flex gap-10">
                            <span className="text-gray-800 font-semibold">{product.category}</span>
                        </div>
                        <p className="text-lg mt-5 mb-[150px] lg:mb-0 font-bold">{product.description}</p>
                        <div className="flex mt-5 gap-5">
                            <button className="w-62.5 h-17.5 bg-green-500 text-white text-xl font-semibold rounded-lg cursor-pointer hover:bg-green-700 transiton duration-300"
                            onClick={
                                ()=> {
                                    addToCart(product, 1)
                                }
                            }
                            >Add to Cart</button>
                            <button className="w-62.5 h-17.5 bg-blue-500 text-white text-xl font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transiton duration-300"
                            onClick={
                                ()=> {
                                    console.log(getCart())
                                }
                            }
                            >Buy Now</button>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}