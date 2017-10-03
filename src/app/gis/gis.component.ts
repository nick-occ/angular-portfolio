import { Component, OnInit } from '@angular/core';
import { IProject } from '../shared/projects.model';
import { ProjectService } from '../services/project.service';
import { PopoverModule } from 'ng4-popover';
import * as $ from 'jquery';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GisComponent implements OnInit {

  projects: IProject[];
  experience: string;

  constructor(private _projectService: ProjectService) {

  }

  ngOnInit() {
    this.projects = this._projectService.getProjects();
    this.experience = this._projectService.getExperience('gis');
  }
}
