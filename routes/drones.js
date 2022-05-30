const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((allTheDronesFromDB ) => {
    res.render('drones/list', {drones: allTheDronesFromDB})
  })

  .catch((err) => next(err))
});

router.get('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.ejs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const newDrone = await Drone.create(req.body)
    console.log('new drone created')
    res.redirect('/drones')
  } catch (err) {
    console.log('Adding a new drone failed, you hero', (err))
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  
  const drone = await Drone.findById(req.params.id)
  console.log(drone)
  res.render('drones/update-form.ejs', { drone })
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneid } = req.params
  await Drone.findByIdAndUpdate(droneid, req.body)
  res.redirect(`/drones/${droneid}`)
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  await Drone.findByIdAndDelete(req.params.droneid)
  res.redirect('/drones')
});

module.exports = router;
