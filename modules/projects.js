const projectData = require("../data/projectData"); 
const sectorData = require("../data/sectorData");
let projects = [];

//adding copies of projectData obj to projects array
function initialize() {
    return new Promise((resolve, reject) => {
        projectData.forEach(element => {
            let project = {...element}; //copy an project obj each time

            let objFound = sectorData.find(obj => obj.id === project.sector_id);
            project.sector = objFound.sector_name;

            projects.push(project); //add modified project obj to projects array
        });
        resolve();
    })
};

// returns projects array
let getAllProjects = ()=> {
    return new Promise((resolve, reject)=>{
        resolve(projects);
    })
    
}


//find a specific obj using projectId
function getProjectById(projectId) {
    return new Promise((resolve, reject)=>{
        const project = projects.find(obj => obj.id === projectId);
        project ? resolve(project) : reject('unable to find the requested project');
    })
    
}

//get an array of objs using sector 
function getProjectsBySector(sector) {
    return new Promise((resolve, reject)=>{
        
        const arrBySector = projects.filter(project =>{
        return project.sector.toLowerCase().includes(sector.toLowerCase());
        }); 
        if(arrBySector.length > 0){
            resolve(arrBySector);
        } else {
            reject('unable to find requested projects');
        }
    })
}

//promise chaining
// initialize()
//     .then(()=>{
//         return getAllProjects();
//     })
//     .then(projects =>{
//         console.log(projects);
//         return getProjectById(9);
//     })
//     .then(project =>{
//         console.log(project);
//         return getProjectsBySector("agriculture");
//     })
//     .then(arrBySector =>{
//         console.log(arrBySector);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//try with SYNC and await:
async function showAllFuncs() {
    try{
        await initialize();
        let allProjects = await getAllProjects();
        console.log(allProjects);
        let findByID = await getProjectById(9);
        console.log(findByID);
        let findBySector = await getProjectsBySector("agriculture");
        console.log(findBySector);
    } catch (err) {
        console.log(err);
    }
}
//showAllFuncs();

//module export
module.exports = {initialize, getAllProjects, getProjectById, getProjectsBySector};
