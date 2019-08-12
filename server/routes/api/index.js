const router = require('express').Router()
const conn = require('../../db')

router.get('/category', (req, res, next) => {
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

router.get('/listings', (req, res, next) => {
  const sql = `SELECT l.title, l.description, l.id, c.parent_id as parent_id
  FROM listings l 
  LEFT JOIN categories c ON l.cat_slug = c.slug
  WHERE l.cat_slug = "activities" or c.slug = "activities"`

  conn.query(sql, (error, results, fields) => {
    console.log(results)
  })
})

router.get('/listings', (req, res, next) => {
  const sql = `SELECT title, comments, post_time
  FROM listings`

  conn.query(sql, (error, results, fields) => {
    console.log(results)
  })
})



module.exports = router