import express from "express";
import fileUpload from 'express-fileupload'
import cors from 'cors';
import filesRoutes from "./Routes/files.routes.js";

const app = express();

app.use(cors())
//app.use(express.json())

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'./files'
}))

app.use(filesRoutes)

app.listen(3000)

console.log("Escuchando puerto ",3000);