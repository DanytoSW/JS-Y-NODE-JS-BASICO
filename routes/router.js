const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//router para las vistas
router.get('/', authController.isAuthenticaded, (req, res)=>{
    res.render('index', {pregunta:req.pregunta})
})

router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/problematica', (req, res)=>{
    res.render('problematica')
})

router.get('/proponer', (req, res)=>{
    res.render('proponer')
})

router.get('/proyecto', (req, res)=>{
    res.render('proyecto')
})


//router para los metodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router