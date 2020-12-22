const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

//telling router to use routes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;