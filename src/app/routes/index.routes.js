const { Router } = require('express')
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../components/products')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de productos.' })
})

router.route('/products')
  .get(getProducts)
  .post(addProduct)

router.route('/products/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct)

module.exports = router
