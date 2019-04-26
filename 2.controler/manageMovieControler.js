const db = require('../1.database')

module.exports = {
    addMovie : (req,res) => {
        var data = req.body
        var sql = `select nama from movies where nama = '${data.nama}'`
        db.query(sql , (err,result) => {
            if(err) throw err
            if(result.length > 0){
                res.send('Movie already exist!')
            }else{
                var sql2 = `insert into movies set ?`
                db.query(sql2 , data , (err,result2) => {
                    if(err) throw err
                    res.redirect('/movies/allmovies')
                })
            }
        })
    },

    getAllMovies : (req,res) => {
        var sql = `select * from movies`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getMovieById : (req,res) => {
        var sql = `select * from movies where id = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    editMovie : (req,res) => {
        var sql = `update movies set ? where id = ${req.params.id}`
        db.query(sql , req.body, (err,result) => {
            if(err) throw err
            res.redirect(`/movies/allmovies`)
        })
    },

    deleteMovie : (req,res) => {
        var sql = `delete from movies where id = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            var sql2 = `delete from movcat where idmovie = ${req.params.id}`
            db.query(sql2 , (err,result2) => {
                if(err) throw err
                res.redirect('/movies/allmovies')
            })
        })
    }
}