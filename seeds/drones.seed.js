// Iteration #1
const mongoose = require('mongoose')
require('../db')

const DroneModel = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]

DroneModel.insertMany(drones)
.then((allDronesDB) => {
    console.log('All drones seeded!', allDronesDB)
    return mongoose.connection.close()
}) .then(() => {
    console.log('DB closed');
})


.catch((err) => {
    console.log('There was a problem seeding', err)
})

