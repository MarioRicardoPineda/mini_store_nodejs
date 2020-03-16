const path = require('path')

const render = (file, res) => {
    res.sendFile(path.join(__dirname + `/../views/${file}.html`))
}

class HomeController {

    async index(req, res) {
        return render('index', res)
    }
}

module.exports = new HomeController();