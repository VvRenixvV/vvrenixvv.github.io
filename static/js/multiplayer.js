const xpCards = document.querySelectorAll('.xp-card'); 

xpCards.forEach(card => { 
    card.addEventListener('click', (event) => { 
        // toggle open cards
        if (card.classList.contains('active')) {
            card.classList.remove('active');
            
            // Scroll the clicked card out of view
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'end'
            });
        }
        else {
            closeAllCards();
            card.classList.add('active'); 
            
            // Scroll the clicked card into view
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
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