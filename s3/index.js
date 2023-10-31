import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3Client = new S3Client({ region: "us-east-1" });

async function getObject(key){
  const getObjectCommand = new GetObjectCommand({
    Bucket: "taskmasterdevs3",
    Key: key
  });
  //const response = await s3Client.send(getObjectCommand);
  const response = await getSignedUrl(s3Client,getObjectCommand);
  return response
}

async function testS3(){
    console.log("test.txt:  ",await getObject("test.txt"));
}
  
  testS3()
