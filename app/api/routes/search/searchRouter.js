const router = require('express').Router();

router.route('/').get((req, res) => {
  res.send({ ok: 'search' });
});

module.exports = router;
