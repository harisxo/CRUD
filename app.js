import express from 'express'
import connectDB from './db/connectdb.js';
import {join} from 'path'
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection:

connectDB(DATABASE_URL);

// Static Folder initializer:

app.use(express.static(join(process.cwd(), 'public')))
app.use("/student",web);

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})