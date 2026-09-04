import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../components/productCard";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isProductsAreLoaded, setIsProdutsAreLoaded] = useState(false);

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
                        setIsProdutsAreLoaded(true)
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
        <div className="w-full h-full flex justify-center flex-wrap">
            {
                products.map(
                    (item)=> {
                        return(
                            <ProductCard key={item.productId} product={item}/>
                        )
                    }
                )
            }
        </div>
    )
}