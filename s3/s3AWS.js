import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"
import fs from 'fs'
//const fs = require('fs');

const s3Client = new S3Client({ region: "us-east-1" });

export const getObject = async (key)=>{
  const getObjectCommand = new GetObjectCommand({
    Bucket: "taskmasterdevs3",
    Key: key
  });
  //const response = await s3Client.send(getObjectCommand);
  const response = await getSignedUrl(s3Client,getObjectCommand);
  return response
}

export const readFile = async (file) =>{
    const getObjectCommand = new GetObjectCommand({
        Bucket: "taskmasterdevs3",
        Key: file
      });
      return await s3Client.send(getObjectCommand)
}

export const uploadFile=async (file)=>{
    const stream = fs.createReadStream(file.tempFilePath)
    const uploadParams = {
        Bucket: "taskmasterdevs3",
        Key: file.name,
        Body:stream
    }
  const command = new PutObjectCommand(uploadParams)
  return await s3Client.send(command)
}
