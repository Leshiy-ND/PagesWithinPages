window.addEventListener("message", function(event) {
    if (event.origin === 'https://leshiy-nd.github.io') {
    let message = JSON.parse(event.data)
        console.log("Cards received message from parent:", message.text);

        let new_message = { cards: [] }
        document.querySelectorAll('.card').forEach(card => {
            let card_name = card.querySelector('h2').textContent
            new_message.cards.push(card_name)
        })
        event.source.postMessage(JSON.stringify(new_message), event.origin);
    }
});