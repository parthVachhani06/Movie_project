const express =require("express");
const app = express();
const router =require("./routes/router")
const db = require("./config/db");
const port= 3002

app.set('view engine', 'ejs');
app.use('/',router);
app.use(express.static("public"));
app.use(express.static("images"));


app.listen(port,(req,res)=>{
    console.log(`server start..${port}`);
})

