//import packages
const express = require("express");
const app = express();
//create server
app.listen(8000,()=>{
    console.log("http:localhost:8000");
});

//get-> send details from server to client eg:-login
//post-> eg:- (client->server->db update(create))

//req-> from user(client)
//res->to user(sever-client)
//200 - success
//404 - page not fount
//501 - server error

//initial route (home route)
app.get("/",(req,res)=>{
    return res.send("Hello World").status(200)
});