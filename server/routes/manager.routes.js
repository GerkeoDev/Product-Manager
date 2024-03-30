
const ManagerController = require('../controllers/manager.controller')
module.exports = function(app){
    // app.get('/api', ManagerController.index)
    app.post('/api/product', ManagerController.createProduct)
    app.get('/api/products', ManagerController.findAllProducts)
    app.get('/api/product/:id', ManagerController.findOneProduct)
}