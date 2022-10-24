import express from 'express'
import connectDB from './db/connectDB.js';
import {join} from 'path'
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || '5000'
const DATABASE_URL = "mongodb+srv://harisxo:Hakunamatata1@cluster0.1allf3u.mongodb.net/test";

// Database Connection:

connectDB(DATABASE_URL);

// Middleware using urlencoded: 

app.use(express.urlencoded({extended: false}))

// Static Folder initializers

app.use("/student", express.static(join(process.cwd(), 'public')))
app.use("/student/edit", express.static(join(process.cwd(), 'public')))

app.use("/student",web);
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})