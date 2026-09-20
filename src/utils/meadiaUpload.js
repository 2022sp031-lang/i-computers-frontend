import { createClient } from "@supabase/supabase-js";

let url = "https://flsvhwwwsdpmnjabhwxn.supabase.co";
let key =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsc3Zod3d3c2RwbW5qYWJod3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjQ4NzcsImV4cCI6MjEwMDIwMDg3N30.b3wVVQ5-Ie2p6ayiOxvzZh8ubrQHmV5Y9h7wwvKb_jY";
const superbase = createClient(url, key);

export default function uploadMedia(file) {

    return new Promise((resolve, reject)=> {
        if(file==null) {
            reject("No file selected")
        }else {
            const timeStamp = new Date().getTime();
            const fileName = timeStamp + "_" + file.name;

            superbase.storage.from("images").upload(fileName, file, {
                upsert: false,
                cacheControl: "3600"
            }).then(()=> {

                const publicUrl = superbase.storage
                    .from("images")
                    .getPublicUrl(fileName).data.publicUrl

                resolve(publicUrl)

            }).catch((error)=> {
                reject(error)
            })
        }
    })
}
