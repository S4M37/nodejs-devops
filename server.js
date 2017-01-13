const PORT=8080;
const express=require('express');
const app=express();
app.get('/welcome',function(req,res){
	res.status(200).render('welcome.ejs');
})
.get('/call-my-module',function(req,res){
	var myModule=require('my_module');
	myModule.sayHello();
	myModule.saySalem();
		res.status(200).send('module called successfully !');

}).use(function(req,res,next){
    res.status(404).send('Page introuvable !');
}).listen(PORT);
console.log('Running on http://localhost:' +PORT);
