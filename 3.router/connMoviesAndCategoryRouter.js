const router = require('express').Router()
const {connMoviesAndCategoryControler} = require('../2.controler')
const {addMovieAndCategory,getAllMovCat,getMovCatByIdCategory,getMovCatByIdMovie,deleteMovCat} = connMoviesAndCategoryControler

router.post('/addmovcat' , addMovieAndCategory)
router.get('/allmovcat' , getAllMovCat)
router.get('/movcatbycat/:id' , getMovCatByIdCategory)
router.get('/movcatbymovie/:id' , getMovCatByIdMovie)
router.put('/deletemovcat/:id' , deleteMovCat)

module.exports = router