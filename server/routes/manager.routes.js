
const ManagerController = require('../controllers/manager.controller')
module.exports = function(app){
    app.post('/api/product', ManagerController.createProduct)
    app.get('/api/products', ManagerController.findAllProducts)
    app.get('/api/product/:id', ManagerController.findOneProduct)
    app.put('/api/product/:id', ManagerController.updateProduct)
    app.delete('/api/product/:id', ManagerController.deleteProduct)
}