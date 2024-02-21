import { prisma } from "@/prisma/client";
import { type NextRequest } from "next/server";

// get a project by ID
export async function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    try {
        const res = await prisma.project.findUnique({
            where: { id },
        });
        return Response.json(res);
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
        const title = formData.get("title");
        const description = formData.get("description");
        const type = formData.get("type");
        const tools = formData.get("tools");
        const url = formData.get("url");
        const frontendUrl = formData.get("frontendUrl");
        const backendUrl = formData.get("backendUrl");
        const launchedAt = formData.get("launchedAt");

        const project = await prisma.project.create({
            where: { id },
            data: {
                title,
                description,
                type,
                tools: `${tools}`.split(","),
                url,
                frontendUrl,
                backendUrl,
                launchedAt: new Date(`${launchedAt}`),
            },
        });
        return Response.json(project);
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
        await prisma.project.delete({
            where: { id },
        });
        return Response.json({
            message: `Project "${id}" has been deleted successfully`,
        });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}
