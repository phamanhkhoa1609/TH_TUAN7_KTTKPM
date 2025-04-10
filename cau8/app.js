const express = require('express');
const mysql = require('mysql2');

// Lấy các thông tin từ biến môi trường
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'user';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_NAME = process.env.DB_NAME || 'mydb';

// Tạo kết nối tới MariaDB
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }
  console.log('Kết nối MariaDB thành công với id: ' + connection.threadId);
});

const app = express();

// Tạo một route cơ bản
app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Ứng dụng Node.js đang chạy trên cổng 3000');
});
