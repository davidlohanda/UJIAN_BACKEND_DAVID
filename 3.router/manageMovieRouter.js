const router = require('express').Router()
const {manageMovieControler} = require('../2.controler')
const {addMovie,getAllMovies,getMovieById,editMovie,deleteMovie} = manageMovieControler

router.post('/addmovie' , addMovie)
router.get('/allmovies' , getAllMovies)
router.get('/movie/:id' , getMovieById)
router.put('/editmovie/:id' , editMovie)
router.delete('/deletemovie/:id' , deleteMovie)

module.exports = router