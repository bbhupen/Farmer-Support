import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser'
import allRoutes from "./routes/allRoutes.js"


const app = express()


const port = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', 'views')


// ROUTES

app.use("/", allRoutes)

//For 404

app.use((req,res,next) => {
    res.render('404')
})

// LISTEN 

app.listen(port, ()=>{
    console.log(`Serving on http://127.0.0.1:${port}`)
})