import { Component, OnInit } from '@angular/core';
import { IExperience } from '../experience.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: string;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.experience = this._projectService.getExperience('gis');
  }

  getExperience(cat: string) {
    alert('cat');
  }
}
