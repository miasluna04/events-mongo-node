 const Event = require('../models/eventModel') // import the mode

 //export a function caled get all events 
 exports.getAllEvents = (req, res) => {
     Event
     .find()
     .then(allEvents => {
         res.status(200).send(allEvents)
     })
     .catch(err => console.log(err))
 }