import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductsPage from "./productsPage";
import ProductOverviewPage from "./productOverviewPage";
import CartPage from "./cartPage";
import CheckoutPage from "./checkoutPage";
import CustomerMyOrdersPage from "./customerMyOrdersPage";
import SettingsPage from "./settings";
import TestPage from "./test";
import BottomNavigationBar from "../components/bottomNavigationBar";
import NotFoundPage from "./notFoundPage";
import LandingPage from "./landingPage";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header/>
            <div className="w-full h-[calc(100%-100px)] overflow-y-scroll">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/contact-us" element={<h1>Contact-Us page</h1>}/>
                    <Route path="/overview/:productId" element={<ProductOverviewPage/>}/>  
                    <Route path="/cart" element={<CartPage/>}/>   
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/my-orders" element={<CustomerMyOrdersPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
                <BottomNavigationBar/>    
            </div> 
        </div>
    )
}