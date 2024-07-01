let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    let cards_page = document.createElement('iframe')
    cards_page.src = './cards.html'
    console.log(cards_page)

    window.addEventListener('message', (event) => {
        console.log("Index received message from:", event.origin);

        if (event.origin === 'https://leshiy-nd.github.io') {
            let message = JSON.parse(event.data)
            console.log("Index received message from cards:", message.text);
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