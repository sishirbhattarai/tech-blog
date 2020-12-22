const router = require('express').Router();

const userRoutes = require('./commentRoutes');
const userRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

//telling router to use api routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;