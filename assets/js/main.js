let id = document.getElementById.bind(document)

const content = id('content')
const desc = id('desc')

if (content) {

    const request = async () => {
        const response = await fetch('/products/all')
        const data = await response.json()

        render(data)

    }

    const render = data => {

        content.innerHTML = ''

        data.map(value => {

            content.innerHTML += `
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src="${value.image}" width="100%" height="200px">
                            <span class="card-title red-text">${value.title}</span>
                        </div>
                        <div class="card-content">
                            <p>${value.desc}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">$${value.price}</a>
                        </div>
                    </div>
                </div>
            `
        })

    }

    addEventListener('load', request)
}


