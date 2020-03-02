const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dburl = require("./config/keys").dbURL;
const posts = require("./routes/api/posts");
const cors = require("cors");
const app = express();
mongoose.connect(dburl, {useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>{
        console.log("Мы подключились к бд!");
        })
    .catch(err=>{
        console.log(err);
        });
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api',posts);

const port = 5000;

app.listen(port,()=>{
    console.log("Сервер запущен по порту " + port);
});