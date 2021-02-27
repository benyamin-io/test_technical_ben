const router = require('express').Router()

const mysql = require('mysql')



router.get('/', (req, res) => {

  let books = []; let categories = []

  let con = mysql.createConnection({
    host: 'localhost',
    user: 'brady', //mohon ganti sesuai user local mysql metode autentikasi native sql
    password: '123456',
    database: 'perpustakaan'
  })

  con.connect(function(err){
    if(err) throw err
    console.log('connected to DB')

    let sql = ''


    if(!req.query.category){
      sql = `select * from books`
    }else{
      sql = `select * from books where category_id = ${req.query.category}`
    }

    con.query(sql, function(err, result){
      if(err) throw err;
      books = result

      sql = 'select * from categories'

      con.query(sql, function(err, result2){
        if(err) throw err;
        categories = result2

        res.render('index', {books, categories})
      })
    })




  })


})

module.exports = router
