import { Link } from "react-router-dom";

export default function ProductCard(props) {

    const product = props.product;
    console.log(product)

    return (
        <Link to={"/overview/" + product.productId} state={product} className="w-[300px] h-[450px] m-10 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col hover:[&_.primary-image]:opacity-0 justify-between cursor-pointer">
            <div className="w-[300px] h-[300px] relative">
                <img src={product.images[1]} className="w-[250px] h-[250px] object-cover absolute top-0 left-0"/>
                <img src={product.images[0]} className="w-[250px] h-[250px] object-cover absolute top-0 left-0 primary-image transition-opacity duration-500"/>
            </div>
            <h1 className="text-lg font-semibold px-4">{product.name}</h1>
            <div className="w-full flex flex-col py-4">
                {
                    product.labelPrice > product.price && <span className="text-5m text-gray-500 mt-5 px-4 line-through">{product.labelPrice}</span>
                }
                <span className="text-lg font-bold mt-1 px-4">{product.price}</span>
            </div>
        </Link>
    )
}