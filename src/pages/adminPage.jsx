import { Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage";
import AdminAddProuctPage from "./admin/adminAddProduct";
import AdminEditProductPage from "./admin/adminEditProductPage";
import AdminOrdersPage from "./admin/adminOrdersPage";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex items-center bg-accent">
            <div className="w-[300px] h-full text-white">

                {/* <a href="/admin" className="block py-2 px-4 hover:bg-gray-700">products</a>
                <a href="/admin/orders" className="block py-2 px-4 hover:bg-gray-700">orders</a>
                <a href="/admin/users" className="block py-2 px-4 hover:bg-gray-700">users</a>
                <a href="/admin/reviews" className="block py-2 px-4 hover:bg-gray-700">reviews</a>

                <h1>-----------------------------------------------</h1> */}

                <Link to="/admin/" className="block py-2 px-4 hover:bg-gray-700">Orders</Link>    
                <Link to="/admin/product" className="block py-2 px-4 hover:bg-gray-700">Products</Link>
                <Link to="/admin/users" className="block py-2 px-4 hover:bg-gray-700">Users</Link>
                <Link to="/admin/reviews" className="block py-2 px-4 hover:bg-gray-700">Reviews</Link>

            </div>
            <div className="w-[calc(100%-300px)] h-full flex flex-col bg-primary border-[6px] border-accent rounded-2xl">
                <Routes>
                    <Route path='/' element={<AdminOrdersPage/>}></Route>
                    <Route path='/product' element={<AdminProductPage/>}></Route>
                    <Route path='/users' element={<h1>Users here</h1>}></Route>
                    <Route path='/reviews' element={<h1>Reviews here</h1>}></Route>
                    <Route path='/add-product' element={<AdminAddProuctPage/>}></Route>
                    <Route path='/edit-product' element={<AdminEditProductPage/>}></Route> 
                </Routes>
            </div>
        </div>
    )
 }