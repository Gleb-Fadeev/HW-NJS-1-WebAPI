const { Router } = require('express'); //
const homeController = require('./home.controller');
const filmController = require('./film.controller');

const router = new Router();

router.use('/', homeController);
router.use('/films', filmController);

module.exports = router;