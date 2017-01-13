const PORT=8001;
const express=require('express');
const app=express();
app.get('/',function(req,res){
	res.status(200).send('server is running');
}).use(function(req,res,next){
    res.status(404).send('Page introuvable !');
}).listen(PORT);
console.log('Running on http://localhost:' +PORT);
