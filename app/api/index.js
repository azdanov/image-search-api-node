const router = require('express').Router();

router.use('/search', require('./routes/search/searchRouter'));
router.use('/latest', require('./routes/latest/latestRouter'));

module.exports = router;
