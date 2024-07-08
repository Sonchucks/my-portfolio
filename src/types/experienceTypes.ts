export interface ProjectOrContract {
    id: number;
    name?: string;
    website?: string;
    role: string;
    startDate: string;
    endDate: string;
    keyResponsibilities: string[];
}

export interface WorkExperience {
    id: number;
    company: string;
    companyWebsite: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    technologies?: string[];
    keyResponsibilities?: string[];
    projectsAndContracts?: ProjectOrContract[];
}
