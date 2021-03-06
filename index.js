const express = require('express');
const path = require('path');
const userRouter = require('./src/routes/userRoute');
const app = express();


const port = process.env.PORT || 3000


//All use statements goes here
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/font-awesome/css/')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, '/public/css/')))
app.use('/js', express.static(path.join(__dirname, '/public/js/')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/gsap/dist')))
app.use('/img', express.static(path.join(__dirname, '/public/img/')))

//use route statements goes here
app.use('/user', userRouter)

//All set statements goes here
app.set('view engine', 'ejs')
app.set('views', './src/views')

//All Routes statements goes here
app.get('/', (req, res) => {
    res.render('landingpage', {
        title: 'App',
        svg: '/img/on_the_way.svg'
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})