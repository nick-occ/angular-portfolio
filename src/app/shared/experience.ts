import { IExperience } from './experience.model';


export const EXPERIENCE: IExperience[] = [
  {
    experience_category: 'gis',
    description: `
                  I have over a decade of experience working with Geographic Information Systems, \
                  primarily using the ESRI ArcGIS suite of products.  I have worked on many different \
                  projects from map cartography to web development.  \
                  Some of my past experience include developing maps in ArcMap used to display the \
                  location of crimes as evidence in court trials for the Union County, NJ Prosecutors Office,\
                  developing a web mapping application that allows users to view, search, analyze and edit their \
                  data using the ArcGIS JavaScript API and automating various GIS tasks in Python using the ArcPy module.
                  `
  },
  {
    experience_category: 'python',
    description: `
                  I have experience using Python to automate geospatial workflows using the ArcPy module.  \
                  Some of the different projects I have worked on where I utizlized Python are scripts to load data \
                  from and FTP site and perform GIS analysis and write results to an enterprise database, 
                  automating map design by creating mapbooks and updating labeling through the arcpy.mapping module, \
                  developing scripts to keep GIS data in sync with different databases.  I have also worked on a project \
                  as part of a Fullstack Web Developer certificate implementing a CRUD enabled website using Flask and the \
                  Google Cloud Platform.
                  `
  }
];
