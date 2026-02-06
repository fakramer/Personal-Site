import { Job } from "./job";
import { Tech } from "./tech";

export interface Project {
    jobId: string;
    job?: Job;
    name: string;
    description: string;
    techIds: string[];
    techs?: Tech[];
}
