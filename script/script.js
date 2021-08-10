'use strict';
let money = +prompt('Ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let mission = 777;
let period = 8;



console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);
console.log('length_addExpenses: ', addExpenses.length);
console.log('Период равен ${period} месяцев.');
console.log('Цель заработать ${mission} рублей/долларов/гривен/юани');
console.log(addExpenses.toLocaleLowerCase().split(', '));




const budgetDay = (money / 30);
console.log('Бюджет на день: ', Math.floor(budgetDay));
if (budgetDay === 1200) {
    console.log('Почти успеха достиг');
} else if (budgetDay === 600) {
    console.log('почти средний уровень дохода');
} else if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
} else {
    console.log('уровень дохода ниже среднего');
}

const isNumber = (n) => {
    console.log('n: ', n);
    console.log(parseFloat(n));
    console.log(isFinite(n));
    return !isNaN(parseFloat(n)) && isFinite(n);
};
do {
    money = prompt('Ваш месячный доход?');
} while (!isNumber(money));

let expenses = [];

const getExpensesMonth = () => {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        sum += (() => {
            let n = 0;
            do {
                n = prompt('Во сколько это обойдется?');
            } while (!isNumber(n));
            return +n;
        })();
    }
    return sum;
};



console.log(getExpensesMonth());
const getAccumulatedMonth = (moneyMonth, expensesMonth) => {
    if (!moneyMonth) { moneyMonth = 0; }
    return moneyMonth - expensesMonth;
};
const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());

const getTargetMonth = (myMiss, budgetMonth) => {
    return Math.ceil(myMiss / budgetMonth);
};

const targetMonth = getTargetMonth(mission, accumulatedMonth);

(targetMonth >= 0) ?
    console.log(`Цель будет достигнута за: ${targetMonth} месяцев`) :
    console.log(`Цель не будет достигнута`);
    console.log('Бюджет на день: ', Math.floor(budgetDay));