const router = require('express').Router()
const mysql = require('mysql')


router.get('/add', (req, res) => {

  let categories = []

  let con = mysql.createConnection({
    host: 'localhost',
    user: 'brady', //mohon ganti sesuai user local mysql metode autentikasi native sql
    password: '123456',
    database: 'perpustakaan'
  })

  con.connect(function(err){
    if(err) throw err
    console.log('Connected to DB')

    let sql = `select * from categories`

    con.query(sql, function(err, result){
      if(err) throw err

      categories = result
      res.render('bookadd', {categories})
    })

  })


})

router.post('/', (req, res) => {

  let con = mysql.createConnection({
    host: 'localhost',
    user: 'brady', //mohon ganti sesuai user local mysql metode autentikasi native sql
    password: '123456',
    database: 'perpustakaan'
  })

  con.connect(function(err){
    if(err) throw err
    console.log('Connected to DB')

    let sql = `insert into books (name, category_id, stok, image, deskripsi) values ('${req.body.judul}', ${req.body.kategori}, '${req.body.stok? req.body.stok : 0}', '${req.body.gambar? req.body.gambar : ''}', '${req.body.deskripsi? req.body.deskripsi : ''}')`

    con.query(sql, function(err, result){
      if(err) throw err
      res.redirect('/')
    })

  })

})

module.exports = router
