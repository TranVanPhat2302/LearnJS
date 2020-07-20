var express = require('express');
const qb = require('../modules/data/config');
var router = express.Router();
var dateFormat = require('dateformat');


/* GET users listing. */
router.get('/', function (req, res, next) {
  const sql = "SELECT tdname, date(tddate) as tddate FROM qltodo";
  qb.query(sql, function (err, results) {
    if (err) throw err;
    console.log("err", err)
    console.log("results", results);
    res.render('todo', { title: 'To do List', items: results, success: false , dateFormat : dateFormat});
    res.end();
  });
});

//Thực Hiện Post dữ liệu
// Sau khi post dữ liệu vào db thì nó cũng sẽ Get dữ liệu từ db để up lên client
router.post('/', function (req, res, next) {
  var date = req.body.fdate;//Gán biến cho dữ liệu lấy từ trang web
   
  var tname = req.body.fname;
  console.log(date, tname);
  if (date =="" || tname == "") { 
    res.render('todo', { title: 'To do List', items: results, success: false, dateFormat:dateFormat });
    res.end();
  } else {
    const sql = "INSERT INTO qltodo (tddate,tdname) VALUE (?,?)"; 
    const getAllTodos = "SELECT tdname, date(tddate) as tddate FROM qltodo";

    qb.query(sql, [date, tname], function (err, data) {
      if (err) {
        throw err;
      }
      qb.query(getAllTodos, function (err, results) {
        if (err) throw err;
        res.render('todo', { title: 'To do List', items: results, success: true , dateFormat : dateFormat});
        res.end();
      });

    })
  };
});




module.exports = router;
