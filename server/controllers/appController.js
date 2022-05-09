const mysql = require('mysql');


const con = mysql.createConnection({
    host: "14.225.192.186",
    user: "user1",
    password: "user1",
    database: "littlebook"
});

exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM tbl_useraccount WHERE username = " + con.escape(username) + " AND userpassword = md5(" + con.escape(password) + ")";
    con.query(sql, function (err, results) {
        if (err) throw err;
        if (results.length > 0) {
            res.render('login', { title: 'Thêm', result: 'sucessfully' })
        } else {
            res.render('login', { title: 'Thêm', result: 'fail' })
        }
    });
}


exports.getLogin = (req, res) => {
    res.render('login', { title: 'Login', result: '' })
}


exports.getHome = (req, res) => {
    const sql = "SELECT * FROM tbl_book LIMIT 10";
    con.query(sql, function (err, results) {
        if (err) throw err;
        if (results.length > 0) {
            console.log(results);
            res.render('home', { title: 'Home', products: results })
        } else {
            res.render('home', { title: 'Home', products: results })
        }
    });
}

exports.getDetail = (req, res) => {
    console.log(req.query)
    res.render('detail', { title: 'Chi tiet', result: '' })
}