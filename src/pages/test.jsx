// import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import uploadMedia from "../utils/meadiaUpload";

// let url = "https://flsvhwwwsdpmnjabhwxn.supabase.co";
// let key =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsc3Zod3d3c2RwbW5qYWJod3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjQ4NzcsImV4cCI6MjEwMDIwMDg3N30.b3wVVQ5-Ie2p6ayiOxvzZh8ubrQHmV5Y9h7wwvKb_jY";
// const superbase = createClient(url, key);

export default function Test() {
    // const [emotion, setEmotion] = useState("😀");

    const[file, setFile] = useState(null);


    //added these two lines to check the merge request

    async function handleUpload() {
        try{

            const url = await uploadMedia(file);
            console.log(url)

        }catch{
            console.log(error)
        }
    }

    // function handleUpload() {
    //     console.log(file)

    //     superbase.storage.from("images").upload(file.name, file, {
    //         upsert: false,
    //         cacheControl: "3600"
    //     }).then((response)=> {

    //         console.log(response)
    //         const publicUrl = superbase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
    //         console.log(publicUrl)

    //     }).catch((error)=> {

    //         console.log(error)

    //     })      
    // } 
    
    return (
        
        // <div className="w-full h-screen flex flex-col justify-center items-center">
        //     <div className="w-[200px] h-[200px] bg-white border-[5px] border-black justify-center items-center flex text-6xl">{emotion}</div>
        //     <div className="flex flex-row">
        //         <button 
        //         onClick={
        //             ()=> setEmotion("😀")}
        //         className="bg-accent border-white border-[1px] flex-col text-black">Happy</button>

        //         <button 

        //         onClick={
        //             ()=> setEmotion("😒")
        //         }    

        //         className="bg-accent border-white border-[1px] flex-col text-black">Sad</button>

        //         <button
        //         onClick={
        //             ()=> setEmotion("😍")
        //         }
        //         className="bg-accent border-white border-[1px] flex-col text-black">Love</button>
        //     </div>
        // </div>

        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input
            onChange={
                (e)=> {
                    setFile(e.target.files[0])
                }
            }
            type="file"/>

            <button className="bg-accent w-[100px] h-[50px] rounded-2xl mt-[20px]"
            onClick={handleUpload}
            >Upload</button>
        </div>
    )
}

// https://flsvhwwwsdpmnjabhwxn.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsc3Zod3d3c2RwbW5qYWJod3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjQ4NzcsImV4cCI6MjEwMDIwMDg3N30.b3wVVQ5-Ie2p6ayiOxvzZh8ubrQHmV5Y9h7wwvKb_jY