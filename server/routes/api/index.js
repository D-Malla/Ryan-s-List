const router = require('express').Router()
const conn = require('../../db')

router.get('/categories', (req, res, next) => {
  const sql = `SELECT * FROM categories`
   
  let data = {
    title: 'Home'
  }
  conn.query(sql,(error,results,fields) => {
    data.categories = results.filter(item => item.parent_id === null)
    data.categories.map(cat =>{
      let subcat = results.filter(item => {
        if(cat.id === item.parent_id){
          return item
        }
      })
      cat.subcat = subcat
    })
    res.json(data)
  })
})

router.get('/posts/:slug', (req, res, next) => {
  const slug = req.params.slug
  
  const sql = `
  SELECT p.*
  FROM posts p
  LEFT JOIN categories c ON c.id = p.category_id  
  `

  conn.query(sql, [slug], (error, results, fields) => {
    res.json(results)
    console.log(results)
  })
})

module.exports = router