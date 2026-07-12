import { Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex items-center bg-accent">
            <div className="w-[300px] h-full">

                <a href="/admin" className="block py-2 px-4 hover:bg-gray-700">products</a>
                <a href="/admin/orders" className="block py-2 px-4 hover:bg-gray-700">orders</a>
                <a href="/admin/users" className="block py-2 px-4 hover:bg-gray-700">users</a>
                <a href="/admin/reviews" className="block py-2 px-4 hover:bg-gray-700">reviews</a>

            </div>
            <div className="w-[calc(100%-300px)] h-full bg-primary border-[6px] border-accent rounded-2xl">
                <Routes>
                    <Route path='/' element={<h1>Products here</h1>} />
                    <Route path='/orders' element={<h1>Orders here</h1>} />
                    <Route path='/users' element={<h1>Users here</h1>} />
                    <Route path='/reviews' element={<h1>Reviews here</h1>} />
                </Routes>

            </div>
        </div>
    )
}