const router = require('express').Router()
const conn = require('../../db')

router.get('/greeting', (req, res, next) => {
  const sql =   `
  SELECT * FROM table
  `

  conn.query(sql, (error, results, fields) => {
    res.json({
      "greeting": "Hello World!"
    })
  })
})

module.exports = router