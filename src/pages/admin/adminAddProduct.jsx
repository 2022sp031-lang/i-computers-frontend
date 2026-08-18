import { useState } from "react"

export default function AdminAddProductPage() {

// productId
// name
// altNames
// price
// labelPrice
// description
// images
// brand
// model
// category
// isAvailable
// stock
   
    const[productId, setProductId] = useState();
    const[name, setName] = useState();
    const[altNames, setAltNames] = useState();
    const[price, setPrice] = useState();
    const[labelPrice, setLabelPrice] = useState();
    const[description, setDescription] = useState();
    const[images, setImages] = useState([]);
    const[brand, setBrand] = useState();
    const[model, setModel] = useState();
    const[category, setCategory] = useState("");
    const[isAvailable, setIsAvailable] = useState(true);
    const[stock, setStock] = useState(0);

    return (
        <h1>Add products</h1>
    )
}