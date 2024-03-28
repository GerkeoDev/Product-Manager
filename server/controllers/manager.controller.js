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