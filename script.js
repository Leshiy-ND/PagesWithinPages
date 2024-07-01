let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    let cards_page = document.createElement('iframe')
    cards_page.src = './cards.html'
    console.log(cards_page)

    cards_page.onload = () => {
        cards_page.contentWindow.postMessage('Hello from parent', WEBISTE_DIR + 'cards.html')
    
        // cards_document.body.querySelectorAll('[card]').forEach(card => {
        //     console.log('Card')
        // })
    }
    window.addEventListener('message', (event) => {
        console.log('Received message:', event.data)
    })

    document.body.appendChild(cards_page)
})