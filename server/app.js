const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3333;

const data =  [
    { title: "양희준", content: "코드스테이츠" },
    { title: "심소영", content: "코드스테이츠" },
    { title: "이유진", content: "코드스테이츠" }];


app.use(express.json());
app.use(cors());
app.use(logger("tiny"));
app.use(express.static(path.join(__dirname, "../client/build")));
//라우터 작성


app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

app.get('/list', (req,res) => res.status(200).json(data))

app.listen(PORT, () => console.log('서버실행중입니다.'))