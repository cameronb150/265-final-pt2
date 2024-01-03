const express = require('express');
const data = require('../data-store');
const projects = data.getProjects();
const router = express.Router();

/* GET home page. */
router.get('/projects', (req, res) => {
  res.status(200).json(projects);
});

router.get('/projects/active', (req, res) => {
  const activeProjects = projects.filter((proj) => proj.isActive);
  res.status(200).json(activeProjects);

});

router.get('/projects/:id', (req, res) => {
  const findProjID = parseInt(req.params.id);
  const projID = projects.find((proj) => proj.id === findProjID);

  if(!projID){
    res.status(404).json({message: 'No Project Found'});

  } else{
    res.status(200).json(projID);
  }

});
module.exports = router;
