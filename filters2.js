// CACHE SELECTORS
const marketingFilter = document.querySelector('#marketing-filter');
const codingFilter = document.querySelector('#coding-filter');
const designFilter = document.querySelector('#design-filter');
const showMoreBtn = document.querySelector('#showMoreBtn');
// const cards = document.querySelectorAll('.card');
// const marketingCards = document.querySelectorAll('.card-marketing');
// const codingCards = document.querySelectorAll('.card-coding');
// const designCards = document.querySelectorAll('.card-design');
// const marketingBg = document.querySelector('#marketing-bg');
// const codingBg = document.querySelector('#coding-bg');
// const designBg = document.querySelector('#design-bg');


// FILTERS
const filterContainer = document.querySelector('.filters');

// Handle filter changes using event delegation
filterContainer.addEventListener('change', (event) => {
    const filterType = event.target.value;
    const filterClass = `card-${filterType}`;

    hideAllCards();

    if (event.target.checked) {
        let filteredCards = document.querySelectorAll(`.${filterClass}`);

        filteredCards.forEach(card => {
            card.style.display = 'inline-block';
        });

        document.querySelector(`#${filterType}-bg`).classList.add('active');

        // Uncheck other filter checkboxes
        const filterCheckboxes = filterContainer.querySelectorAll('input[type=checkbox]');
        filterCheckboxes.forEach(checkbox => {
            if (checkbox !== event.target) {
                checkbox.checked = false;
                const otherFilterType = checkbox.value;
                document.querySelector(`#${otherFilterType}-bg`).classList.remove('active');
            }
        });
    } else {
        showAllCards();
        document.querySelector(`#${filterType}-bg`).classList.remove('active');
    }

    showMoreBtn.style.display = 'none';
});

function hideAllCards() {
    let allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.style.display = 'none'
    })
}

function showAllCards() {
    let allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.style.display = 'inline-block'
    })
}

// SHOWMORE BUTTON 

let boxes = [...document.querySelectorAll('.card')];
let currentItem = 0;
let numToShow = 6;

function showCards() {
    for (let i = currentItem; i < currentItem + numToShow; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }

    currentItem += numToShow;

    if (currentItem >= boxes.length) {
        showMoreBtn.style.display = 'none';
    }
}

showMoreBtn.onclick = () => {
    showCards();
};
