const mysql = require('mysql');

let con = mysql.createConnection({
  host: 'localhost',
  user: 'brady', // mohon ganti sesuai user local mysql metode autentikasi native sql
  password: '123456',
  database: 'perpustakaan'
})


//Jawaban


//poin1
// con.connect(function(err){
//   if(err) throw err;
//   con.query(`select * from books`, function(err, res){
//     if(err) throw err;
//     console.log(res)
//   })
// })


//poin2
// con.connect(function(err){
//   if(err) throw err;
//   let sql = `select c.name kategori, b.name judul_buku, b.stok from categories c
//   join books b on c.id = b.category_id
//   where c.name like 'kamus'`
//
//   con.query(sql, function(err, res){
//     if(err) throw err;
//     console.log(res)
//   })
//
//   sql = `select c.name kategori, b.name judul_buku, b.stok from categories c
//   join books b on c.id = b.category_id
//   where c.name like 'komputer'`
//
//   con.query(sql, function(err, res){
//     if(err) throw err;
//     console.log(res)
//   })
// })


//poin3
// con.connect(function(err){
//   if(err) throw err;
//
//   let sql = `select * from books where id = 2`
//
//   con.query(sql, function(err, res){
//     if(err) throw err
//     console.log(res)
//   })
// })


//poin4
con.connect(function(err){
  if(err) throw err;

    let sql = `insert into categories (name) values ('kamus'), ('komputer')`;

    con.query(sql, function(err, res){
      if(err) throw err;
      console.log('records inserted to categories table')
    })

    sql = `insert into books (name, stok, image, category_id)
    values ('kamus prancis', 10, 'https://cdn.gramedia.com/uploads/items/img20200721_14541889__w149_hauto.jpg', 1),
    ('kamus jerman', 12, 'https://cdn.gramedia.com/uploads/items/img20200622_12275884__w149_hauto.jpg', 1),
    ('tips dan trik fungsi dan formula ms excel', 30, 'https://cdn.gramedia.com/uploads/items/9786230022067_Cover_Tip_dan_Trik_Fungsi_dan_Formula_MS_Excel__w149_hauto.jpg', 2),
    ('permograman sql server 2019', 20, 'https://cdn.gramedia.com/uploads/items/9786230024184_Cover_Pemrograman_SQL_Server_2019__w149_hauto.jpg', 2)`;

    con.query(sql, function(err, res){
      if(err) throw err;
      console.log('records inserted to books table')
    })

  con.query(sql)
})






//Setup DB


//Buat Database, hapus field database pada mysql.createConnection({})
// con.connect(function(err){
//   if(err) throw err
//   console.log('Connected to DB')
//   con.query('create database perpustakaan', function(err, res){
//     if(err) throw err;
//     console.log('Database created')
//   })

// })

//Buat Tabel Categories & Books
// con.connect(function(err){
//   if(err) throw err;
//   console.log('Connected to DB');
//
//   let sql = `create table categories(
//     id int auto_increment primary key,
//     name varchar(255) not null
//   )`
//
//   con.query(sql, function(err, res){
//     if(err) throw err
//     console.log('Table Categories Created')
//   })
//
//   sql = `create table books(
//     id int auto_increment primary key,
//     name varchar(255) not null,
//     stok int default 0,
//     image varchar(255) not null,
//     deskripsi varchar(255),
//     category_id int,
//     foreign key (category_id) references categories(id)
//   )`
//
//   con.query(sql, function(err, res){
//     if(err) throw err;
//     console.log('Table Books Created')
//   })
//
// })

//Insert data pada tabel categories & books
// con.connect(function(err){
//   if(err) throw err
//   console.log("Connected to DB")
//
//   let sql = '';
//
//   let sql = `insert into categories (name) values ('kamus'), ('komputer')`;
//
//   con.query(sql, function(err, res){
//     if(err) throw err;
//     console.log('records inserted to categories table')
//   })
//
//   sql = `insert into books (name, stok, image, category_id)
//   values ('kamus prancis', 10, 'https://cdn.gramedia.com/uploads/items/img20200721_14541889__w149_hauto.jpg', 1),
//   ('kamus jerman', 12, 'https://cdn.gramedia.com/uploads/items/img20200622_12275884__w149_hauto.jpg', 1),
//   ('tips dan trik fungsi dan formula ms excel', 30, 'https://cdn.gramedia.com/uploads/items/9786230022067_Cover_Tip_dan_Trik_Fungsi_dan_Formula_MS_Excel__w149_hauto.jpg', 2),
//   ('permograman sql server 2019', 20, 'https://cdn.gramedia.com/uploads/items/9786230024184_Cover_Pemrograman_SQL_Server_2019__w149_hauto.jpg', 2)`;
//
//   con.query(sql, function(err, res){
//     if(err) throw err;
//     console.log('records inserted to books table')
//   })
//
// })
