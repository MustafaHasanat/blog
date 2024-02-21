import { prisma } from "@/prisma/client";
import { type NextRequest } from "next/server";

// get all projects
export async function GET() {
    try {
        const res = await prisma.project.findMany();
        return Response.json(res);
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// create a new project
export async function POST(request: NextRequest) {
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
