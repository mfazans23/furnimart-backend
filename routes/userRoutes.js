const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello from the user routes')
})

module.exports = router
