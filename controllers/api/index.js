const router = require('express').Router();
const userRoutes = require('./commentRoutes');
const userRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/users', postRoutes);
router.use('/users', commentRoutes);

module.exports = router;