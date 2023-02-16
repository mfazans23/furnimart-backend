const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello from the cart routes')
})

module.exports = router
