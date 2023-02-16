const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello from the order routes')
})

module.exports = router
