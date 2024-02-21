import { ProjectType } from "@/enums/projects";

export interface ProjectModel {
    title: string;
    description: string;
    type: ProjectType;
    tools: string[];
    url?: string;
    frontendUrl?: string;
    backendUrl?: string;
    launchedAt: Date;
}
