const {Product} = require('../models/manager.model')

// module.exports.index = (req, res) =>{
//     res.json({
//         message: "Hello world"
//     })
// }

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}