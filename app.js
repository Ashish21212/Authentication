// const path = require('path');

const express = require('express');



const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes)
app.use(userRoutes)




app.listen(4000)