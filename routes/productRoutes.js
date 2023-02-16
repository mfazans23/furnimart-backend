const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello from the product routes')
})

module.exports = router
