/******************************************************************************** 
*  WEB322 – Assignment 03 
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Gretchen Ding Student ID: 123509242 Date: 06/13/2025
* 
*  Published URL: web-assignment3-alpha.vercel.app
********************************************************************************/

const projectData = require("./modules/projects");
const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));



projectData.initialize()
    .then(()=>{
        app.get('/', (req, res)=>{
            //res.send("Assignment 2:  Gretchen Ding - 123509242");
            res.sendFile(__dirname + '/views/home.html');
        })

        app.get('/about', (req, res)=>{
            res.sendFile(__dirname + '/views/about.html');
        })

        app.get('/solutions/projects', (req, res)=>{
            const sector = req.query.sector;

            if (sector) {
                projectData.getProjectsBySector(sector)
                    .then((projects)=>{
                        res.send(projects);
                    })
                    .catch((err)=>{
                         res.status(404).send(err);
                    });
            } else {
                projectData.getAllProjects()
                    .then((projects)=>{
                        res.send(projects);
                    });
            }
        })


        app.get('/solutions/projects/:id', (req, res)=>{
            const projectId = parseInt(req.params.id);
            
            projectData.getProjectById(projectId)
                .then((project)=>{
                    res.send(project);
                }) 
                .catch((err)=>{
                     res.status(404).send(err);
                })
            });


        // lastly 404 
        app.use((req, res, next) => {
            res.status(404).sendFile(__dirname + '/views/404.html');
        });


        app.listen(HTTP_PORT, ()=> console.log(`server listening on: ${HTTP_PORT}`));

        
    }) 
    .catch((err)=> console.log('Fail to initialize.'));
   


