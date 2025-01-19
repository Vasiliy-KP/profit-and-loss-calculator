'use strict';

let necessaryExpenses = document.querySelectorAll('.expenses-item');
let expensesItemBtn = document.querySelector('.expenses-item-btn');
let optionalexpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBudgetBtn = document.querySelector('.count-budget-btn');

let allOptionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let possibleIncome = document.querySelector('.choose-income');
let accumulation = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');

let startBtn = document.querySelector('.start');

let budgetOutput = document.querySelector('.budget-value');
let dayBudgetOutput = document.querySelector('.daybudget-value');
let levelOutput = document.querySelector('.level-value');
let expensesOutput = document.querySelector('.expenses-value');
let optionalExpensesOutput = document.querySelector('.optionalexpenses-value');
let incomeOutput = document.querySelector('.income-value');
let monthSavingsOutput = document.querySelector('.monthsavings-value');
let yearSavingsOutput = document.querySelector('.yearsavings-value');


let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt('Enter the date as YYYY-MM-DD?', '');
    money = +prompt('Your budget per month?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Your budget per month?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetOutput.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < necessaryExpenses.length; i++) {
        let a = necessaryExpenses[i].value;
        let b = necessaryExpenses[++i].value;

        if (typeof a === 'string' && a != null && a !== '' && b != null && b !== '' && !isNaN(b)) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesOutput.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i <= allOptionalexpensesItem.length; i++) {
        let optionalExpensesItem = allOptionalexpensesItem[i].value;
        if (typeof optionalExpensesItem === 'string' && optionalExpensesItem != null && optionalExpensesItem !== '' && optionalExpensesItem.length < 50) {
            appData.optionalExpenses[i] = optionalExpensesItem;
            optionalExpensesOutput.textContent += appData.optionalExpenses[i] + ', ';
        }
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetOutput.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 645) {
            levelOutput.textContent = 'Minimum';
        } else if (appData.moneyPerDay > 645 && appData.moneyPerDay < 800) {
            levelOutput.textContent = 'Medium';
        } else if (appData.moneyPerDay > 800) {
            levelOutput.textContent = 'High';
        } else {
            levelOutput.textContent = 'Ups, something goes wrong';
        }
    } else dayBudgetOutput.textContent = 'Previously enter your budget!';

});

possibleIncome.addEventListener('input', function () {
    let items = possibleIncome.value;;
    appData.income = items.split(', ');
    incomeOutput.textContent = appData.income;
});

accumulation.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

function updateSavings() {
    if (appData.savings) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.monthIncome = (sum / 100 / 12) * percent;
        appData.yearIncome = (sum / 100) * percent;

        monthSavingsOutput.textContent = appData.monthIncome.toFixed(1);
        yearSavingsOutput.textContent = appData.yearIncome.toFixed(1);
    }
}
chooseSum.addEventListener('input', updateSavings);
choosePercent.addEventListener('input', updateSavings);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

