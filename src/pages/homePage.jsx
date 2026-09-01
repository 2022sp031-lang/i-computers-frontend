import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header/>
            <div className="w-full h-[calc(100%-100px)] bg-red-700 border">
                <Routes>
                    <Route path="/">{<h1>Welcome to iComputers store.</h1>}</Route>
                    <Route path="/products">{<h1></h1>}</Route>
                    <Route path="/contact-us">{<h1></h1>}</Route>    
                </Routes>    
            </div> 
        </div>
    )
}