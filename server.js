/******************************************************************************** 
*  WEB322 – Assignment 04 
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Gretchen Ding Student ID: 123509242 Date: 07/06/2025
* 
*  Published URL: web-assignment3-alpha.vercel.app
********************************************************************************/

const projectData = require("./modules/projects");
const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));



projectData.initialize()
    .then(()=>{
        app.get('/', (req, res)=>{
            res.render("home");
        })

        app.get('/about', (req, res)=>{
            res.render("about");
        })

        app.get('/solutions/projects', (req, res)=>{
            const sector = req.query.sector;

            if (sector) {
                projectData.getProjectsBySector(sector)
                    .then((projects)=>{
                        res.render("projects", {projects: projects});
                    })
                    .catch((err)=>{
                        res.status(404).render("404", {message: "No projects found for a matching sector"});

                    });
            } else {
                projectData.getAllProjects()
                    .then((projects)=>{
                        res.render("projects", {projects: projects});
                    });
            }
        })


        app.get('/solutions/projects/:id', (req, res)=>{
            const projectId = parseInt(req.params.id);
            
            projectData.getProjectById(projectId)
                .then((project)=>{
                    res.render("project.ejs", {project: project});
                }) 
                .catch((err)=>{
                    res.status(404).render("404", {message: "No projects found for a specific id"});

                })
            });


        // lastly 404 
        app.use((req, res, next) => {
            res.status(404).render("404", {message: "No view matched for a specific route "});
        });


        app.listen(HTTP_PORT, ()=> console.log(`server listening on: ${HTTP_PORT}`));

        
    }) 
    .catch((err)=> console.log('Fail to initialize.'));
   


