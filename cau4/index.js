const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ứng dụng Node.js chạy bằng Docker Compose!');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
