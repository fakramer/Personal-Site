import { Project } from "./project";

export interface Job {
    id: string;
    icon: string;
    company: string;
    officeLocation: string;
    type: 'Remote' | 'Hybrid' | 'On-site';
    title: string;
    start: Date;
    end?: Date;
    projects?: Project[];
}