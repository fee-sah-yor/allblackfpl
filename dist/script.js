const card = document.querySelector('.thecard');
const allCards = document.querySelectorAll('.thecard');

allCards.forEach((card) => {
    card.addEventListener('click', function() {
        card.classList.toggle('flip');
        card.classList.toggle('active');
    });
});