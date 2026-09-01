import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMedia from "../../utils/meadiaUpload";
import axios from "axios";

export default function AdminAddProductPage() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState([]);
    const [price, setPrice] = useState("");
    const [labelPrice, setLabelPrice] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [category, setCategory] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [stock, setStock] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    async function handleSave() {
        try {

            setIsSaving(true)
            const token = localStorage.getItem("token");
            if(token == null) {
                toast.error("You must be logged in to perform this action.");
                window.location.href = "/login";
                return
            }

            const mediaUplaodPromises = [];
            for(let i=0; i<images.length; i++) {
                mediaUplaodPromises.push(uploadMedia(images[i]))
            }

            const urls = await Promise.all(mediaUplaodPromises);
            const [altNamesArray] = altNames.split(",");

            const productData = {
                productId: productId,
                name: name,
                altNames: altNamesArray,
                price: price,
                labelPrice: labelPrice,
                description: description,
                images: urls,
                brand: brand,
                model: model,
                category: category,
                isAvailable: isAvailable,
                stock: stock 
            };

            await axios.post(import.meta.env.VITE_API_URL + "/products", productData, 
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            );

            toast.success("Product added successfully.");
            navigate("/admin/product");

        }catch(e) {
            setIsSaving(false)
            console.log(e)
            console.log(e?.response)
            toast.error(e?.response?.data?.message );
        } 
    } 

    return (
        <div className="w-full h-full flex flex-col items-center p-4 overflow-y-scroll">
            <div className="w-full h-[100px] bg-accent flex items-center p-5 rounded-lg text-white justify-between shadow-2xl sticky top-0">
                <h1 className="text-2xl font-semibold">Add New Product</h1>
                <div className="h-full flex justify-center items-center">
                    <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</button>
                    <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Cancel</button>
                </div>
            </div>
            <div className="w-full bg-white shadow-2xl flex p-5 mt-8 rounded-lg flex-wrap">

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Product ID</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </div>

                <div className="w-3/4 p-2">
                    <label className="block mb-2 font-semibold">Name</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="w-full p-2">
                    <label className="block mb-2 font-semibold">Alternative Names(comma separated)</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={altNames}
                        onChange={(e) => setAltNames(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Price</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Label Price</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={labelPrice}
                        onChange={(e) => setLabelPrice(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Category</label>
                    <select className="border border-gray-300 rounded-md p-2 w-full"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Others">Others</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Headphones">Headphones</option>
                        <option value="Camera">Camera</option>
                    </select>
                </div>

                <div className="w-1/4 p-2">
                    {/* images */}
                    <label className="block mb-2 font-semibold">Images</label>
                    <input type="file" multiple className="border border-gray-300 rounded-md p-2 w-full"
                        onChange={(e) => setImages(e.target.files)}
                    />
                </div>

                <div className="w-full p-2">
                    <label className="block mb-2 font-semibold">Description</label>
                    <textarea className="border border-gray-300 rounded-md p-2 w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Brand</label>
                    <select className="border border-gray-300 rounded-md p-2 w-full"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Google">Google</option>
                        <option value="Sony">Sony</option>
                        <option value="Dell">Dell</option>
                        <option value="HP">HP</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Model</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Stock</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                {/* <div className="w-1/4 p-2 flex items-center">
                    <label className="block mb-2 font-semibold mr-4">Is Available</label>
                    <input type="checkbox" 
                        checked={isAvailable} 
                        onChange={(e) => setIsAvailable(e.target.checked)}
                    />
                </div> */}

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Availability</label>
                    <select className="border border-gray-300 rounded-md p-2 w-full"
                        value={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.value === "true")}
                    >
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>

            </div>
        </div>
    )
}