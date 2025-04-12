const xpCards = document.querySelectorAll('.xp-card'); 

xpCards.forEach(card => { 
    card.addEventListener('click', (event) => { 
        // toggle open cards
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        }
        else {
            closeAllCards();
            card.classList.add('active'); 
        }
    }) 
}) 

function closeAllCards() { 
    xpCards.forEach(card => { 
        card.classList.remove('active'); 
    }
    )
}


const xpBriefHeaders = document.querySelectorAll('.xp-brief-header');

xpBriefHeaders.forEach(brief => {
    brief.addEventListener('click', (event) => {
        console.log("Stop Propagation")
        event.stopPropagation(); // Prevent the click from bubbling up
    })
})