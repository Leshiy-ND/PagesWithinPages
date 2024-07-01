let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)


    let button = document.createElement('button')
    button.textContent = 'Send hello'
    
    button.onclick = () => {
        let cards_page = document.createElement('iframe')
        cards_page.className = 'iframe_cards'
        cards_page.src = './cards.html'
        cards_page.style.display = 'none'
        document.body.appendChild(cards_page)    

        let message = { text: 'Hello from parent' }
        cards_page.contentWindow.postMessage(JSON.stringify(message), 'https://leshiy-nd.github.io')
    }

    document.body.appendChild(button)
})



window.addEventListener('message', (event) => {
    if (event.origin === 'https://leshiy-nd.github.io') {
        let message = null
        try {
            message = JSON.parse(event.data)
        } catch (error) {
            message = false
        }

        if (message == false) return
        
        console.log("Received cards:");
        message.cards.forEach(card => {
            console.log(card)
        });
        document.querySelector('.iframe_cards').remove()
    }
})
