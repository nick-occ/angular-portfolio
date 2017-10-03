import { Component, OnInit } from '@angular/core';
import { IProject } from '../shared/projects.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  experience: string;
  
  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.experience = this._projectService.getExperience('python');
  }

}
