const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

router.use('/events', eventRoutes);
router.use('/user', userRoutes);

module.exports = router;