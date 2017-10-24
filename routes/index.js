var express = require('express');
var router = express.Router();
var fs = require("fs")
var data = fs.readFileSync("public/1.txt", "utf-8");
var num = data.toString().slice(-1);
router.get('/', function (req, res, next) {
    var num2 = num++;
    fs.writeFileSync("public/1.txt", "页面刷新：" + num2)
    res.send("页面刷新：" + num2)

});
module.exports = router;