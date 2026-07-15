import { useState } from "react";

export default function Test() {
    const [emotion, setEmotion] = useState("😀");
    
    return (
        
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-[200px] h-[200px] bg-white border-[5px] border-black justify-center items-center flex text-6xl">{emotion}</div>
            <div className="flex flex-row">
                <button 
                onClick={
                    ()=> setEmotion("😀")}
                className="bg-accent border-white border-[1px] flex-col text-black">Happy</button>

                <button 

                onClick={
                    ()=> setEmotion("😒")
                }    

                className="bg-accent border-white border-[1px] flex-col text-black">Sad</button>

                <button
                onClick={
                    ()=> setEmotion("😍")
                }
                className="bg-accent border-white border-[1px] flex-col text-black">Love</button>
            </div>
        </div>
    )
}