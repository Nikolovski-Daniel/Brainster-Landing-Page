// FILTERS
const marketingFilter = document.querySelector('#marketing-filter');
const codingFilter = document.querySelector('#coding-filter');
const designFilter = document.querySelector('#design-filter');
const showMoreBtn = document.querySelector('#showMoreBtn');


// FILTERS
marketingFilter.addEventListener('change', filterMarketing);
codingFilter.addEventListener('change', filterCoding);
designFilter.addEventListener('change', filterDesign);


function filterMarketing() {
    hideAllCards();

    if (marketingFilter.checked) {
        let marketingCards = document.querySelectorAll('.card-marketing');

        marketingCards.forEach(marketingCard => {
            marketingCard.style.display = 'inline-block';

            document.querySelector('#marketing-bg').classList.add('active')
        });

        codingFilter.checked = false;
        document.querySelector('#coding-bg').classList.remove('active');
        designFilter.checked = false;
        document.querySelector('#design-bg').classList.remove('active');
    } else {
        showAllCards();
        document.querySelector('#marketing-bg').classList.remove('active')
    }

    showMoreBtn.style.display = 'none';
}

function filterCoding() {
    hideAllCards();

    if (codingFilter.checked) {
        let codingCards = document.querySelectorAll('.card-coding');

        codingCards.forEach(codingCard => {
            codingCard.style.display = 'inline-block';

            document.querySelector('#coding-bg').classList.add('active')
        });
        marketingFilter.checked = false;
        document.querySelector('#marketing-bg').classList.remove('active');
        designFilter.checked = false;
        document.querySelector('#design-bg').classList.remove('active');
    } else {
        showAllCards();
        document.querySelector('#coding-bg').classList.remove('active')
    }
    showMoreBtn.style.display = 'none';
}

function filterDesign() {
    hideAllCards();

    if (designFilter.checked) {
        let designCards = document.querySelectorAll('.card-design');

        designCards.forEach(designCard => {
            designCard.style.display = 'inline-block';
            document.querySelector('#design-bg').classList.add('active')
        });
        marketingFilter.checked = false;
        document.querySelector('#marketing-bg').classList.remove('active');
        codingFilter.checked = false;
        document.querySelector('#coding-bg').classList.remove('active');
    } else {
        showAllCards();
        document.querySelector('#design-bg').classList.remove('active')
    }
    showMoreBtn.style.display = 'none';
}

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