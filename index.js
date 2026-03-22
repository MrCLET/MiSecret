// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";


// 2. Create an express app and set the port number.

const app = express();
const PORT = 5000

// 3. Use the public folder for static files.

app.use(express.static("public"));
app.set("view engine", "ejs");

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/" ,async(req,res) =>{
    try {
        // 5. Use axios to get a random secret and pass it to index.ejs to display the
        const api = await axios.get("https://secrets-api.appbrewery.com/random")
        let result = api.data
        // secret and the username of the secret.
        
        res.render("index",{
            user: result.username,
            secret: result.secret
        })
    } catch (error) {
        console.log(`Error :${error.message}`)
        
    }
});


// 6. Listen on your predefined port and start the server.
app.listen(PORT,()=>{
     console.log("Runing")
})
