const express = require("express");
const discord = require("discord.js");

const colors = require("colors");
var app = express()
const { client } = require('./index')


    var o = '23' ///client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    var s = '23' ///client.guilds.cache.size;
    var k = '32' ///client.channels.cache.size;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", async (req, res) => {
    res.render("index.ejs", {
        osoby: o,
        serwery: s,
        kanaly: k
    })
})


app.listen(3000, function(err){
    if(err) throw err;
    console.log("Strona wystartowała na porcie 3000".green)
})

