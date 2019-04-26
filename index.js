const app = require('express')()
//================================================================================================
app.use(require('body-parser').json())
//================================================================================================
const port = 8000
app.listen(port , () => console.log(`Server berjalan di port ${port}`))
//================================================================================================
app.get('/' , (req,res) => {
    res.send(`<h1>Selamat datang di API Mysql-Express</h1>`)
})
//================================================================================================
const {manageMovieRouter} = require('./3.router')
const {manageCategoryRouter} = require('./3.router')
const {connMoviesAndCategoryRouter} = require('./3.router')

app.use('/movies' , manageMovieRouter)
app.use('/categories' , manageCategoryRouter)
app.use('/movcat' , connMoviesAndCategoryRouter)