const blockWeight = document.querySelector('#js-weight')
const refs = {
    buttonDecrement: blockWeight.querySelector('span[data-action="decrement"]'),
    buttonIncrement: blockWeight.querySelector('span[data-action="increment"]'),
    spanAmount: blockWeight.querySelector('.js-amount'),
};


refs.buttonDecrement.addEventListener('click', onDecrementClick);
refs.buttonIncrement.addEventListener('click', onIncrementClick);

let count = 2;
refs.spanAmount.textContent = count + " кг";

function onDecrementClick() {
    count -= 0.5;
    refs.spanAmount.textContent = count + " кг";
}

function onIncrementClick() {
    count += 0.5;
    refs.spanAmount.textContent = count + " кг";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const blockNumber = document.querySelector('#js-number')
const ref = {
    buttonDecremen: blockNumber.querySelector('span[data-action="decrem"]'),
    buttonIncremen: blockNumber.querySelector('span[data-action="increm"]'),
    spanAmoun: blockNumber.querySelector('.js-amoun'),
};


ref.buttonDecremen.addEventListener('click', onDecremenClick);
ref.buttonIncremen.addEventListener('click', onIncremenClick);

let coun = 1;
ref.spanAmoun.textContent = coun + " шт";

function onDecremenClick() {
    coun -= 1;
    ref.spanAmoun.textContent = coun + " шт";
}

function onIncremenClick() {
    coun += 1;
    ref.spanAmoun.textContent = coun + " шт";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const totalWeight = document.querySelector('.js-total-weight');
const totalNumber = document.querySelector('.js-total-number');
const totalPrice = document.querySelector('#js-total-price');
const btnsMinus = document.querySelectorAll('.minus');
const btnsPlus = document.querySelectorAll('.plus');

let price = 800;

function calculate() {
    let total = parseFloat(totalNumber.textContent) * price * parseFloat(totalWeight.textContent)
    totalPrice.textContent = total + " грн"
}

calculate()

for ( let btnMinus of btnsMinus) {
    btnMinus.addEventListener('click', function() {
        calculate()
    })
}

for ( let btnPlus of btnsPlus) {
    btnPlus.addEventListener('click', function() {
        calculate()
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Counter {
//     constructor({ selector, initCount, step }) {
//         const blockWeight = document.querySelector(selector);

//         this.count = initCount;
//         this.step = step;

//         this.refs = {
//             buttonDecrement: blockWeight.querySelector('span[data-action="decrement"]'),
//             buttonIncrement: blockWeight.querySelector('span[data-action="increment"]'),
//             spanAmount: blockWeight.querySelector('.js-amount'),
//         };

//         this.refs.spanAmount.textContent = this.count + " кг";
//         this.addEventListener();
//     }

// addEventListener () {
//     this.refs.buttonDecrement.addEventListener('click', this.onDecrementClick.bind(this));
//     this.refs.buttonIncrement.addEventListener('click', this.onIncrementClick.bind(this));
// }

// onDecrementClick() {
//     this.count -= this.step;
//     this.refs.spanAmount.textContent = this.count + " кг";
//     console.log('click -')
// }

// onIncrementClick() {
//     this.count += this.step;
//     this.refs.spanAmount.textContent = this.count + " кг";
//     console.log('click +')
// }
// }

// const weight = new Counter({ selector: "#js-weight", initCount: 1 , step: 0.5});
// const number = new Counter({ selector: "#js-number", initCount: 1 , step: 1});

////////////////////////////////////////////////////////////////////////////////////////////////////////////