let expresss = require('express');
let app = expresss();

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})