window.addEventListener("message", function(event) {
    if (event.origin === 'https://leshiy-nd.github.io') {
    let message = JSON.parse(event.data)
        console.log("Cards received message from parent:", message.text);

        let new_message = { cards: [] }
        document.querySelectorAll('.card').forEach(card_div => {
            let card = { name: '', description: '' }
            card.name        = card_div.querySelector('h2').textContent
            card.description = card_div.querySelector('p').textContent
            new_message.cards.push(card)
        })
        event.source.postMessage(JSON.stringify(new_message), event.origin);
    }
});

const HelloMessage = '(!) Hello Message'

console.log(HelloMessage, 'from cards.js')
