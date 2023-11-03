import express from "express";
import { getObject, uploadFile } from "../s3/s3AWS.js";

const router = express.Router();

//rutas para manejar archivos
router.get('/',(req,res)=>{
    res.send('Welcome to server')
});
router.post('/upload',async (req,res)=>{
    console.log(req.files['file']);
    const result = await uploadFile(req.files['file'])
    console.log(result);
    res.send('Archivo cargado');
});

router.get('/archivo/:key',async (req,res)=>{
    
    const result = await getObject(req.params.key)
    console.log(result);
    res.send('Welcome to server');
});

export default router;