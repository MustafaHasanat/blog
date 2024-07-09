import { db } from "@/libs/configs/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { type NextRequest } from "next/server";

// get all projects
export async function GET() {
    try {
        const colRef = collection(db, "projects");
        const projects = (await getDocs(colRef)).docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return Response.json(projects);
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// create a new project
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const colRef = collection(db, "projects");
        const newProject = await addDoc(colRef, {
            title: formData.get("title"),
            url: formData.get("url"),
        });
        return Response.json({
            message: `Project '${newProject.id}' has been created!`,
        });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}
