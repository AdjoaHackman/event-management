const router = require('express').Router();
const { Event } = require('../models')
router.post('/', async (req, res) => {
    try {
        const { eventTitle, dateOfEvent, location, eventDescription } = req.body
        const newEvent = await Event.create({
         eventTitle, dateOfEvent, location, eventDescription
        })
        await newEvent.save()
        res.status(200).json(newEvent)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
        
    }
})


module.exports = router;