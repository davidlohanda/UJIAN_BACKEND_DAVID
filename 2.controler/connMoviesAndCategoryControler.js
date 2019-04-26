const db = require('../1.database')

module.exports = {
    addMovieAndCategory : (req,res) => {
        var data = {
            idmovie : req.body.idmovie,
            idcategory : req.body.idcategory
        }
        var sqlcek = `select * from movcat where idmovie = ${data.idmovie} and idcategory = ${data.idcategory}`
        db.query(sqlcek , (err,resultcek) => {
            if(err) throw err
            if(resultcek.length > 0){
                res.send('You have added a movie with that category before')
            }else{
                var sql = `insert into movcat set ?`
                db.query(sql , data ,  (err,result) => {
                    if(err) throw err
                    res.redirect('/movcat/allmovcat')
                })
            }
        })
    },

    getAllMovCat : (req,res) => {
        var sql = `select m.nama as Nama , c.nama as Category from movcat as mc
                   join movies as m  on idmovie = m.id
                   join categories as c on idcategory = c.id
                    `
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getMovCatByIdMovie : (req,res) => {
        var sql = `select m.nama as Nama , c.nama as Category from movcat as mc
                   join movies as m  on idmovie = m.id
                   join categories as c on idcategory = c.id
                   where idmovie = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getMovCatByIdCategory : (req,res) => {
        var sql = `select m.nama as Nama , c.nama as Category from movcat as mc
                   join movies as m  on idmovie = m.id
                   join categories as c on idcategory = c.id
                   where idcategory = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    deleteMovCat : (req,res) => {
        var sql = `delete from movcat where idmovie = ${req.body.idmovie} and idcategory = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.redirect(`/movcat/allmovcat`)

        })
    }
}