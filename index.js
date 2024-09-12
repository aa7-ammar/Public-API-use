import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try{
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
        res.render("index.ejs",{ joke : result.data.setup+" "+result.data.delivery});
    }
    catch(error){
        console.error("Failed to make request");
        res.status(500).send("Please try again !!");
    }
});

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});