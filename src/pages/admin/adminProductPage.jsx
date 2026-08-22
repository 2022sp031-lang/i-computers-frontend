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
import { useState } from "react";


export default function AdminProductPage() {

    const [products, setProducts] = useState(sampleProducts);

    return (
        <div className="w-full h-full">
            {
                products.map(
                    (item, index)=> {
                        console.log(item)
                        console.log(index)

                        return <p> {item.name} </p>
                    }

                )
                
            }

            <Link to='/admin/add-product'
                className="fixed bottom-5 right-7 w-[50px] h-[50px] bg-accent flex justify-center items-center text-2xl text-white rounded-full hover:bg-black hover:text-accent"><FaPlus />
            </Link>
        </div>
    )
}