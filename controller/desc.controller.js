const path = require('path')
const DB_PATH = path.join(__dirname + '/../data/db.json')
const db = require(DB_PATH)

const render = (file, res) => {
    res.sendFile(path.join(__dirname + `/../views/${file}.html`))
}

class DescController {

    async desc(req, res) {
        return render('descProduct', res)
    }

    // async get(req, res) {
    //     db.map(key => {
    //         if (key.id === req.params.id) {
    //             return res.send(key)
    //         }
    //     })
    // }

}

module.exports = new DescController();