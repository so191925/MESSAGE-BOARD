const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3333;



app.use(express.json());
app.use(cors());
app.use(logger("tiny"));
app.use(express.static(path.join(__dirname, "../client/build")));
//라우터 작성

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

app.listen(PORT, () => console.log('서버실행중입니다.'))