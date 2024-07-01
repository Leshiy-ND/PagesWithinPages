let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    let cards_page = document.createElement('iframe')
    cards_page.src = './cards.html'
    cards_page.style.display = 'none'

    window.addEventListener('message', (event) => {
        if (event.origin === 'https://leshiy-nd.github.io') {
            try {
                let message = JSON.parse(event.data)
            } catch (error) {
                return
            }
            console.log("Received cards:");
            message.cards.forEach(card => {
                console.log(card)
            });
            cards_page.remove()
        }
    })

    document.body.appendChild(cards_page)

    let button = document.createElement('button')
    button.textContent = 'Send hello'

    button.onclick = () => {
        let message = { text: 'Hello from parent' }
        cards_page.contentWindow.postMessage(JSON.stringify(message), 'https://leshiy-nd.github.io')
    }

    document.body.appendChild(button)
})