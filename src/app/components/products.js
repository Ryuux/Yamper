const { products } = require('../data.json')

module.exports = {
  getProducts: (req, res) => {
    if (products.length > 0) {
      res.json({ products })
    } else {
      res.status(404).json({ error: 'No se encontraron productos.' })
    }
  },

  getProduct: (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id === Number(id))
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' })
    }
  },

  addProduct: (req, res) => {
    const { name, price, stock } = req.body
    if (!name || !price || !stock) {
      res.status(400).json({ error: 'Por favor, proporcione todos los campos.' })
      return
    }
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      stock
    }
    products.push(newProduct)
    res.json({ success: true })
  },

  updateProduct: (req, res) => {
    const { id } = req.params
    const { name, price, stock } = req.body
    if (!id || !name || !price || !stock) {
      res.status(400).json({ error: 'Por favor, proporcione todos los campos.' })
      return
    }
    const product = products.find(p => p.id === Number(id))
    if (product) {
      product.name = name
      product.price = price
      product.stock = stock
      res.json({ success: true })
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' })
    }
  },

  deleteProduct: (req, res) => {
    const { id } = req.params
    const productIndex = products.findIndex(p => p.id === Number(id))
    if (productIndex !== -1) {
      products.splice(productIndex, 1)
      res.json({ success: true })
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' })
    }
  }
}
