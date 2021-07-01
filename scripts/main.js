const CARDS = document.querySelectorAll(".card-item");
CARDS.forEach((el) => {
    el.onclick = selectingCard;
});

const btnMy = document.querySelector("#btn-my").addEventListener("click", btnClickMy);
const btnNoMine = document.querySelector("#btn-not-mine").addEventListener("click", btnClickNotMine);
const btnDiscard = document.querySelector("#btn-discard").addEventListener("click", btnClickDiscard);

const btnCancelSelected = document.querySelector('#btn-cancel-selected').addEventListener('click', btnClickCancelSelected);
const btnClearCards = document.querySelector('#btn-clear-cards').addEventListener('click', btnClickClearCards);
const btnNewGame = document.querySelector('#btn-restart').addEventListener('click', btnClickNewGame);

let cardsSelected = [];
let cardsMy = [];
let cardsNotMine = [];
let cardsDiscard = [];

function selectingCard() {
    if (!cardsSelected.includes(this)) {
        cardsSelected.push(this);
    } else {
        cardsSelected = cardsSelected.filter(item => item !== this);
    }

    this.children[1].classList.toggle('border');
}

function btnClickMy() {
    cardsSelected.forEach(el => {
        cardsMy.push(el);
        cardsNotMine = cardsNotMine.filter(item => item !== el);
        cardsDiscard = cardsDiscard.filter(item => item !== el);
    });

    btnClickCancelSelected();
    drawing();
}

function btnClickNotMine() {
    cardsSelected.forEach(el => {
        cardsNotMine.push(el);
        cardsMy = cardsMy.filter(item => item !== el);
        cardsDiscard = cardsDiscard.filter(item => item !== el);
    });

    btnClickCancelSelected();
    drawing();
}

function btnClickDiscard() {
    cardsSelected.forEach(el => {
        cardsDiscard.push(el);
        cardsMy = cardsMy.filter(item => item !== el);
        cardsNotMine = cardsNotMine.filter(item => item !== el);
    });
    
    btnClickCancelSelected();
    drawing();
}

function btnClickCancelSelected() {
    CARDS.forEach(el => {
        el.children[1].classList.remove('border');
    });
    cardsSelected = [];
}

function btnClickClearCards() {
    cardsSelected.forEach(el => {
        cardsMy = cardsMy.filter(item => item !== el);
        cardsNotMine = cardsNotMine.filter(item => item !== el);
        cardsDiscard = cardsDiscard.filter(item => item !== el);
    });

    btnClickCancelSelected();
    drawing();
}

function btnClickNewGame() {
    cardsSelected = [];
    cardsMy = [];
    cardsNotMine = [];
    cardsDiscard = [];
    
    drawing();
}

function drawing() {
    CARDS.forEach(el => {
        el.children[0].children[0].style.backgroundColor = '';
        el.children[0].children[1].style.backgroundColor = '';
        el.children[0].children[1].innerHTML = '';
        el.children[1].classList.remove('border');
        el.children[2].classList.remove('backside');
    })

    cardsMy.forEach(el => {
        el.children[2].classList.remove('backside');

        el = el.children[0];
        el.children[0].style.backgroundColor = 'green';
        el.children[1].style.backgroundColor = 'green';
        el.children[1].innerHTML = "MY";
    });

    cardsNotMine.forEach(el => {
        el.children[2].classList.remove('backside');

        el = el.children[0];
        el.children[0].style.backgroundColor = 'red';
        el.children[1].style.backgroundColor = 'red';
        el.children[1].innerHTML = "!MY";
    });

    cardsDiscard.forEach(el => {
        el.children[2].classList.add('backside');
    });
}
