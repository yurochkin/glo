'use strict';
let money = prompt('Ваш месячный доход?');
let income = 'freelance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');
let mission = 777;
let period = 8;



console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);
console.log('length_addExpenses: ', addExpenses.length);
console.log('Период равен ${period} месяцев.');
console.log('Цель заработать ${mission} рублей/долларов/гривен/юани');
console.log(addExpenses.toLocaleLowerCase().split(', '));


let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);
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


