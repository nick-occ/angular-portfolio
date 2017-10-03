import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutMeSummary =
    'My name is Nicholas Occhipinti and this is my professional portfolio where I detail the different skills ' +
    'I have obtained through the different projects I have worked on both professionally and through educational development.  ' +
    'I have worked as developer, analyst and teacher primarily in the geospatial industry for over 12 years.' +
    `\n`;

  aboutMeCareer =
    'My career in the GIS industry started in 2005 where I got a job working for Union County, NJ in their GIS department.  ' +
    'That is where I first learned GIS and worked primarily doing map cartography designing maps for the Union County Prosecutors Office ' +
    'that were used as evidence in court trials.  I was also involved is maitaining the enterprise spatial database by making changes ' +
    'to tax records.  It was hear where I learned about all the possibilities of what you can accomplish with GIS and through were with ' +
    'with different County department I learned how many different types of businesses GIS can be applied to.' +
    `\n` +
    'In 2007 I left Union County and move into the private sector for an engineering firm called Hatch Mott MacDonald, now Mott MacDonald.  ' +
    'It was here where I worked on more of the development side using my Computer Science background to automate tasks and build web applications.  ' +
    'I used Python to automate GIS tasks such as keeping different databases in sync, loading data from FTP site and creating map books using a ' +
    'mashups of different modules including arcpy, ftplib and smtplib.' +
    `\n` +
    'I was also involved in teaching at a couple different colleges as a part time professor.  In 2009 I worked at Essex County College ' +
    'in Newark NJ as a professor teaching GIS Analysis as part of a GIS certificate program.  I taught students how to use ArcGIS Desktop and how to ' +
    'to perform analysis using the ArcGIS Spatial, Network and 3D extensions.' +
    '\n';

  aboutMeEducation: {title: string, url: string}[] =
    [{'title': 'Associates Degree - Computer Science - 2002 - Union County College', 'url': '../../assets/img/UnionCountyCollege.jpg'},
     {'title': 'Bachelors Degree - Computer Science - 2004 - Kean University', 'url': '../../assets/img/KeanUniversity.jpg'},
     {'title': 'Graduate Certificate - Geoscience - 2014 - Oregon State University', 'url': '../../assets/img/OregonState.jpg'},
     {'title': 'Certificate - FullStack Web Developer - 2016 - Udacity', 'url': '../../assets/img/UdacityFullStack.pdf'}
    ]
  ;

  constructor() { }

  ngOnInit() {
  }

}
