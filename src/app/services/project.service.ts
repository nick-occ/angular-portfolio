import { Injectable } from '@angular/core';
import { IProject } from '../shared/projects.model';
import { PROJECT_LIST } from '../shared/projects';
import { IExperience } from '../shared/experience.model';
import { EXPERIENCE } from '../shared/experience';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): IProject [] {
    return PROJECT_LIST.slice(0);
  }

  getExperience(category: string): string {
    for (const e of EXPERIENCE) {
      if (e.experience_category === category) {
        return e.description;
      }
    }
  }
}
