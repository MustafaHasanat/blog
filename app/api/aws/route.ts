import { getImage } from "@/app/_scripts/s3Bucket";

export async function GET() {
    try {
        return Response.json(getImage("bmc-logo.png"));
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}