import bodyParser from 'body-parser'
import connectMongo from 'connect-mongo'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import path from 'path'
import productsController from './src/controller/products/products.controller.js'
import session from 'express-session'
import strategy from 'passport-facebook'

/*-----------------------MIDDLEWEARS -----------------*/
dotenv.config()
const app = express()
const MongoStore = connectMongo.create({
  mongoUrl: `mongodb+srv://coderhouse:${process.env.PASSWORD_MONGO}@cluster0.wikgb.mongodb.net/sessions?retryWrites=true&w=majority `,
  ttl: 15000000,
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(cookieParser())
app.use(
  session({
    store: MongoStore,
    secret: '123456789!@#$%^&*()',
    resave: false,
    saveUninitialized: false,
  }),
)

app.use(passport.initialize())
app.use(passport.session())

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID
const FACEBOOK_SECRET_KEY = `${process.env.FACEBOOK_SECRET_KEY}`

passport.use(
  new strategy.Strategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_SECRET_KEY,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos'],
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile)
    },
  ),
)
passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

/*----------------------ENGINE -----------------*/
app.set('views', path.resolve(path.join('src','views')))
app.set('view engine', 'ejs')

/*----------------------ROUTES -----------------*/
app.use('/products', productsController)
app.get('/', (req, res) => {
  res.render('main')
})
app.post('/', (req, res) => {})
app.get('/register', (req, res) => {
  res.render('register')
})
app.get('/login', (req, res ) => {
  res.render(path.join('layouts', 'sessionInit'))
})
app.post('/register', (req, res) => {
  const data = {
    mail: req.body.email,
    password: req.body.password,
  }
  console.log(data)
})

app.get('/login-facebook', passport.authenticate('facebook'))

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/',
    successRedirect: '/profile',
    authType: 'reauthenticate',
  }),
)
app.get('/admin', (req, res) => {
  res.render('admin',{collections:true})
})
app.get('/admin/addcollection', (req,res ) => {
  res.render('admin',{addcollection:true})
})

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    if (!req.user.contador) {
      req.user.contador = 0
    }
    req.user.contador++
    const datosUsuario = {
      nombre: req.user.displayName,
      foto: req.user.photos[0].value,
    }
    res.render(path.join('layouts','profile'), {
      contador: req.user.contador,
      datos: datosUsuario,
    })
  } else {
    res.redirect('/')
  }
})
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})
const server = app.listen(8080, () => {
  console.log('Server up')
})
server.on('error', (error) => {
  console.log(error)
})
