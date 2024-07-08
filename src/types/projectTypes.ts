export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    codeRepoUrl: string;
    cover?: string;
}