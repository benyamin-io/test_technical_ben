const router = require('express').Router()
const mysql = require('mysql')

router.get('/add', (req, res) => {
  res.render('catadd')
})

router.post('/', (req, res) => {

  let con = mysql.createConnection({
    host: 'localhost',
    user: 'brady',
    password: '123456',
    database: 'perpustakaan'
  })

  con.connect(function(err){
    if(err) throw err;
    console.log('Connected to DB')

    let sql = `insert into categories (name) values ('${req.body.name}')`

    con.query(sql, function(err, result){
      if(err) throw err
      res.redirect('/')
    })

  })

})

module.exports = router
