const router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/', appController.getHome);


router.get('/detail', appController.getDetail);

router.get('/login', appController.getLogin);

router.post('/login', appController.postLogin);



router.get('*', (req, res) => {

  res.render('login', { title: 'Login', result: '' })
});

module.exports = router;
