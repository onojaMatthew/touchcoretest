# Guide on how to run the application

To start the application container, run the following commands at the root directory of the application.

This application must be run on a system that is equiped with docker and docker-compose.

## cd < rootfolder >
## docker-compose up --build

The last command will build the Dockerfiles in the application folders (api, client and nginx) and start the up the application.

Once the application built and the servers are all running, you can then go the your browser and navigate to localhost://3030 to view the app.

