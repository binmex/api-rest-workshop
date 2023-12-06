const express = require('express')
require('./drivers/conect-db')

const app = express();

//setters
app.set('PORT',process.env.PORT || 3000);

//middelware (use)
app.use(express.json());
app.use('/client',require('./routes/clients'))
app.use('/reservation',require('./routes/reservations'))
app.use('/',(req,res)=>res.send("Hello world"))

app.listen(app.get("PORT"),()=>console.log(`server listen on ${app.get("PORT")}`))