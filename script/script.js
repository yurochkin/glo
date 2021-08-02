let money = 666;
let income = 'freelance';
let addExpenses = 'internet, taxi, utilities payments' ;
let deposit = true;
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
console.log('budget:', budgetDay);