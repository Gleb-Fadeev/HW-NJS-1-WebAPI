const { Router } = require('express');
const filmRepo = require('../repo/film.repo');

const router = new Router();

router.get('/', async(_request, response) => {
    const films = await filmRepo.getAll();
    response.render('pages/films/view', {films});
});

router.get('/add', (_request, response) => {
    response.render('pages/films/add');
})

router.post('/add', async (request, response) => {
    await filmRepo.add(request.body);
    response.redirect('/films');
});

module.exports = router;