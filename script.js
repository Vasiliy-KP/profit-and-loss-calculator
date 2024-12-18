'use strict';

let startBtn = document.querySelector('.start');

let budgetOutput = document.querySelector('.budget-value');
let dayBudgetOutput = document.querySelector('.daybudget-value');
let levelOutput = document.querySelector('.level-value');
let expensesOutput = document.querySelector('.expenses-value');
let optionalExpensesOutput = document.querySelector('.optionalexpenses-value');
let incomeOutput = document.querySelector('.income-value');
let monthSavingsOutput = document.querySelector('.monthsavings-value');
let yearSavingsOutput = document.querySelector('.yearsavings-value');


let money, time;

function start() {
    money = +prompt('Your budget per month?', '');
    time = prompt('Enter the date as YYYY-MM-DD?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Your budget per month?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');

            if (typeof a === 'string' && a != null && a !== '' && b != null && b !== '' && !isNaN(b)) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    budgetPerDay() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`dailyBudget is ${appData.moneyPerDay}`);
    },
    detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log('Minimum');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Medium');
        } else if (appData.moneyPerDay > 2000) {
            console.log('High');
        } else {
            console.log('Ups, something goes wrong');
        }
    },
    checksavings() {
        if (appData.savings == true) {
            let save = +prompt('How many save-money do you have?', '');
            let percent = +prompt('Under what percent?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Your month bonus:' + appData.monthIncome);
        }
    },
    chooseOptExpenses() {
        for (let i = 1; i <= 3; i++) {
            let optionalExpensesItem = prompt('Other expenses?', '');
            if (typeof optionalExpensesItem === 'string' && optionalExpensesItem != null && optionalExpensesItem !== '' && optionalExpensesItem.length < 50) {
                appData.optionalExpenses[i] = optionalExpensesItem;
            } else i--;
        }
    },
    chooseIncome() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('What will bring other income? (count through the marck)', '');
            if (typeof items === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Something else?', ''));
                appData.income.sort();
                appData.income.forEach(function (item, i) {
                    let n = i + 1;
                    console.log(`Ways of extra income ${n}: ${item}`);
                });
            } else i--;

        }

    },
};

for (let key in appData) {
    console.log(`Our app includes: ${key} - ${appData[key]} `);
}
