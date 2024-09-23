const router = require('express').Router();
const { User } = require('../models')
router.post('/', async (req, res) => {
    try {
        const { username, email } = req.body
        const newUser = await User.create({
         username, email
        })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
        
    }
})


module.exports = router;