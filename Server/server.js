const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to the Municipal Revenue Management System!');
})

app.listen(3000);