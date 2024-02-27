import { config, S3 } from "aws-sdk";

config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new S3();
const bucketName = process.env.S3_BUCKET_NAME;

export const getImage = (imageName: string): string => {
    try {
        const imageURL = `https://${bucketName}.s3.amazonaws.com/${imageName}`;
        return imageURL;
    } catch (error) {
        return `Error occurred: ${error}`;
    }
};
