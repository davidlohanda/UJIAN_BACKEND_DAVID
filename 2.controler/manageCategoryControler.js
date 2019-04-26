const db = require('../1.database')

module.exports = {
    addCategory : (req,res) => {
        var data = req.body
        var sql = `select nama from categories where nama = '${data.nama}'`
        db.query(sql , (err,result) => {
            if(err) throw err
            if(result.length > 0){
                res.send('Category already exist!')
            }else{
                var sql2 = `insert into categories set ?`
                db.query(sql2 , data , (err,result2) => {
                    if(err) throw err
                    res.redirect('/categories/allcategories')
                })
            }
        })
    },

    getAllCategories : (req,res) => {
        var sql = `select * from categories`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    getCategoryById : (req,res) => {
        var sql = `select * from categories where id = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },

    editCategory : (req,res) => {
        var sql = `update categories set ? where id = ${req.params.id}`
        db.query(sql , req.body, (err,result) => {
            if(err) throw err
            res.redirect(`/categories/allcategories`)
        }) 
    },

    deleteCategory : (req,res) => {
        var sql = `delete from categories where id = ${req.params.id}`
        db.query(sql , (err,result) => {
            if(err) throw err
            var sql2 = `delete from movcat where idcategory = ${req.params.id}`
            db.query(sql2 , (err,result2) => {
                if(err) throw err
                res.redirect('/categories/allcategories')
            })
        })
    }

}