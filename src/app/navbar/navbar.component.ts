import { Component, OnInit } from '@angular/core';
import { ExperienceComponent } from '../shared/experience/experience.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickEvent(cat: string) {

  }

}
