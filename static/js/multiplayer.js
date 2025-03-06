const xpCards = document.querySelectorAll('.xp-card'); 

xpCards.forEach(card => { 
    card.addEventListener('click', ()=> { 
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
)}