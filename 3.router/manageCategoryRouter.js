const router = require('express').Router()
const {manageCategoryControler} = require('../2.controler')
const {addCategory,getAllCategories,getCategoryById,editCategory,deleteCategory} = manageCategoryControler

router.post('/addcategory' , addCategory)
router.get('/allcategories' , getAllCategories)
router.get('/category/:id' , getCategoryById)
router.put('/editcategory/:id' , editCategory)
router.delete('/deletecategory/:id' , deleteCategory)


module.exports = router