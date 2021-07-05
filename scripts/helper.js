const SUITS = ['♠', '♦', '♣', '♥'];

const NAMES24 = ['A', 'K', 'Q', 'J', '10', '9'];
const NAMES36 = ['8', '7', '6'];
const NAMES54 = ['5', '4', '3', '2'];

const htmlTagForInserting = document.querySelector('.main__cards');

function insert(names) {
    let color = 'black';
    for (let i = 0; i < names.length; i++) {
        const mainRow = document.createElement('div');
        mainRow.classList.add('main__row');

        let html = '';
        for (let k = 0; k < SUITS.length; k++) {
            html += `
            <div class="card-item card-${color}">
                <div class="selected">
                    <div class="up"></div>
                    <div class="down"></div>
                </div>
                <div></div>
                <div>
                    <div class="background"></div>
                    <div class="grid"></div>
                </div>
                <div class="letter">${names[i]}</div>
                <div class="suit">${SUITS[k]}</div>
            </div>`;

            if (color === 'black') color = 'red';
            else color = 'black';
        }

        mainRow.innerHTML = html;
        htmlTagForInserting.append(mainRow);
    }
}

export function insert24Cards() {
    insert(NAMES24);
}

export function insert36Cards() {
    insert([...NAMES24, ...NAMES36]);
}

export function insert54Cards() {
    const mainRow = document.createElement('div');
    mainRow.classList.add('main__row');

    let html = '';
    html += `
    <div class="card-item card-black">
        <div class="selected">
            <div class="up"></div>
            <div class="down"></div>
        </div>
        <div></div>
        <div>
            <div class="background"></div>
            <div class="grid"></div>
        </div>
        <div class="letter">&#129313;</div>
        <div class="suit">J</div>
    </div>
    <div class="card-item card-red">
        <div class="selected">
            <div class="up"></div>
            <div class="down"></div>
        </div>
        <div></div>
        <div>
            <div class="background"></div>
            <div class="grid"></div>
        </div>
        <div class="letter">&#129313;</div>
        <div class="suit">J</div>
    </div>`;
    mainRow.innerHTML = html;
    htmlTagForInserting.append(mainRow);
    
    insert([...NAMES24, ...NAMES36, ...NAMES54]);
}

export default {
    insert24Cards,
    insert36Cards,
    insert54Cards
}