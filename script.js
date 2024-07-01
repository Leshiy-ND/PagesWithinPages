let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    let cards_page = document.createElement('iframe')
    cards_page.src = './cards.html'
    console.log(cards_page)

    cards_page.onload = () => {
        let message = { text: 'Hello from parent' }
        cards_page.contentWindow.postMessage(JSON.stringify(message), WEBISTE_DIR + 'cards.html')
    
        // cards_document.body.querySelectorAll('[card]').forEach(card => {
        //     console.log('Card')
        // })
    }
    window.addEventListener('message', (event) => {
        console.log("Index received message from:", event.origin);

        if (event.origin === WEBISTE_DIR + 'cards.html') {
            let message = JSON.parse(event.data)
            console.log("Index received message from cards:", message.text);
        }
    })

    document.body.appendChild(cards_page)
})