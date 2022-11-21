const express = require ('express')
const dotenv = require ('dotenv')
const cookieParser = require ('cookie-parser')

const app = express()

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))

// para procesar datps enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

///seteamos la variable de entorno
dotenv.config({path: './env/.env'})

//para poder trabaja con las cookies
app.use(cookieParser())

//borrar cache
app.use(function(req, res, next){
    if (!req.user)
        res.header('Cache-Control','private, no-cache, no-store, must-revalidate');
    next();    
})

// llamar al router
app.use('/', require('./routes/router'))



app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000')
})