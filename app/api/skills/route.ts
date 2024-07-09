import { db } from "@/libs/configs/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { type NextRequest } from "next/server";

// get all skills
export async function GET() {
    try {
        const colRef = collection(db, "skills");
        const skills = (await getDocs(colRef)).docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return Response.json(skills);
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// create a new skill
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const colRef = collection(db, "skills");
        const newSkill = await addDoc(colRef, {
            title: formData.get("title"),
            url: formData.get("url"),
        });
        return Response.json({
            message: `Skill '${newSkill.id}' has been created!`,
        });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}
