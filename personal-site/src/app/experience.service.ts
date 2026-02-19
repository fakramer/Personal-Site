import { Injectable } from '@angular/core';
import { Job } from './models/job';
import { Tech } from './models/tech';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private techs: Tech[] = [
    { id: "git", name: "Git", icon: 'assets/icons/git.svg' },
  ];

  private projects: Project[] = [
    {
      jobId: 'cpf-pa',
      name: "Git Migration",
      description: "Migrated code repositories from TFS to Git and led Git training sessions for developers.",
      techIds: ['git'],
    }
  ];

  private jobs: Job[] = [
    {
      id: 'cpf-pa',
      icon: 'assets/icons/charlotte-pipe.png',
      company: "Charlotte Pipe & Foundry Company",
      officeLocation: "Oakboro, NC",
      type: "On-site",
      title: "Programmer Analyst",
      start: new Date(2023, 8, 24),
    },
    {
      id: 'ci-fs',
      icon: 'assets/icons/corning-incorporated.png',
      company: 'Corning Incorporated',
      officeLocation: "Montreal, QC",
      type: "Remote",
      title: "Full-Stack .NET Developer",
      start: new Date(2021, 1, 1),
      end: new Date(2023, 4, 1),
    },
    {
      id: 'ci-sde',
      icon: 'assets/icons/corning-incorporated.png',
      company: 'Corning Incorporated',
      officeLocation: "Painted Post, NY",
      type: "On-site",
      title: "Systems Design Engineer",
      start: new Date(2015, 6, 1),
      end: new Date(2020, 12, 1),
    },
    {
      id: 'ci-ee',
      icon: 'assets/icons/corning-incorporated.png',
      company: 'Corning Incorporated',
      officeLocation: "Painted Post, NY",
      type: "On-site",
      title: "Electrical Engineer",
      start: new Date(2013, 6, 1),
      end: new Date(2015, 6, 1),
    },
  ];

  getByJob(): Job[] {
    for (const job of this.jobs)
    {
      job.projects = this.projects.filter(p => p.jobId === job.id);
      for (const project of job.projects)
      {
        project.techs = this.techs.filter(t => project.techIds.includes(t.id));
      }
    }

    return this.jobs;
  }

  getByProject(): Project[] {
    for (const project of this.projects)
    {
      project.job = this.jobs.find(j => j.id === project.jobId);
      project.techs = this.techs.filter(t => project.techIds.includes(t.id));
    }

    return this.projects;
  }
}
