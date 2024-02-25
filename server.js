const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/jacob', (req,res) => {res.send("Hello Jacob")});
app.get('/dallen', (req,res) => {res.send("Hello Dallen")});
app.get('/taylor', (req,res) => {res.send("Hello Taylor")}); 


app.listen(port, ()=>console.log("Listening"));