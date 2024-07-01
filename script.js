let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)


    let button = document.createElement('button')
    button.textContent = 'Send hello'
    
    button.onclick = () => {
        button.remove()

        let cards_page = document.createElement('iframe')
        cards_page.className = 'iframe_cards'
        cards_page.src = './cards.html'
        cards_page.style.display = 'none'

        cards_page.onload = () => {
            let message = { text: 'Hello from parent' }
            cards_page.contentWindow.postMessage(JSON.stringify(message), 'https://leshiy-nd.github.io')
        }

        document.body.appendChild(cards_page)
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
        
        let title = document.createElement('h1')
        title.textContent = 'Received cards:'
        document.body.appendChild(title)

        message.cards.forEach(card => {
            let card_elem = document.createElement('div')
            name.textContent = card.name
            document.body.appendChild(card_elem)

            let name = document.createElement('h2')
            name.textContent = card.name
            card_elem.appendChild(name)

            let description = document.createElement('p')
            description.textContent = card.description
            card_elem.appendChild(description)
        });
        document.querySelector('.iframe_cards').remove()
    }
})
