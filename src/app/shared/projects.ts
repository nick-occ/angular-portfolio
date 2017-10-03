import {IProject} from './projects.model';

export const PROJECT_LIST: IProject[] = [
    {
      project_name: 'katrina',
      project_title: 'Landscape After Hurricane Katrina',
      image_path: './assets/img/hurricane-katrina.png',
      link_path: './assets/img/hurricane-katrina.png',
      project_desc: `In this project I analyzed \
                     the landscape change after Hurricane Katrina \
                     based on remote sensing techniques.`
    },
    {
      project_name: 'hurricane',
      project_title: 'Hurricane Viewer',
      image_path: './assets/img/hurricane.jpg',
      link_path: './assets/img/hurricane-katrina.png',
      project_desc: `In this project I converted raw hurricanne data from 1851 - 2016 in JSON and\
                    displayed the data in a leaflet map.`
    },
    {
      project_name: 'run-journal',
      project_title: 'Run Journal',
      image_path: './assets/img/running.jpg',
      link_path: './assets/img/hurricane-katrina.png',
      project_desc: `In this project I created a run journal tha collected data from a MongoDB database`
    }
  ];
