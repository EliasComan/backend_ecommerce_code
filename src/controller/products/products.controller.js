import express from 'express'
import productsDao from '../../model/products/products.dao.js'

const products = new productsDao()

const routerproducts = express.Router()

routerproducts.get('/', (req, res) => {
  res.render('sessionInit')
})
routerproducts.post('/', (req, res) => {
  try {
    products.save(req.body).then(() => {
      res.status(200).send({ done: true })
    })
  } catch (error) {
    res.status(500).send('Error')
  }
})

export default routerproducts
