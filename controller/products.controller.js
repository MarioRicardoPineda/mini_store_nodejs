const path = require('path')
const fs = require('fs')
const DB_PATH = path.join(__dirname + '/../data/db.json')
const db = require(DB_PATH)


const render = (file, res) => {
    res.sendFile(path.join(__dirname + `/../views/${file}.html`))
}

class ProductsController {

    async products(req, res) {
        return render('products', res)
    }

    async get(req, res) {
        return res.send(db)
    }

    async add(req, res) {

    }
}

module.exports = new ProductsController();