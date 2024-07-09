import { db } from "@/libs/configs/firebase";
import {
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import { type NextRequest } from "next/server";

// get a project by ID
export async function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);
        return Response.json(
            docSnap.exists()
                ? {
                      id: docSnap.id,
                      ...docSnap.data(),
                  }
                : { message: "Project doesn't exist" }
        );
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// update a project
export async function PATCH(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    try {
        const formData = await request.formData();
        const docRef = doc(db, "projects", id);
        await updateDoc(docRef, {
            title: formData.get("title"),
            url: formData.get("url"),
        });
        return Response.json({
            message: `Project '${id}' has been updated!`,
        });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// delete a project
export async function DELETE(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    try {
        const docRef = doc(db, "projects", id);
        await deleteDoc(docRef);
        return Response.json({ message: "Project has been removed!" });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}
