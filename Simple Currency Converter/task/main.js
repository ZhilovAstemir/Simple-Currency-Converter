const input = require('sync-input');
let objOfCurrency = {USD:1, JPY:113.5, EUR:0.89, RUB:74.36, GBP:0.75};
console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
welcome();
function welcome() {
    console.log("What do you want to do?");
    let answer = input("1-Convert currencies 2-Exit program\n")
    if (+answer === 1) {
        start();
    } else if (+answer === 2) {
        console.log("Have a nice day!");
    } else {
        console.log("Unknown input");
        welcome();
    }
}
function start() {
    console.log("What do you want to convert?");
    let currencyFrom = input("From: ").toUpperCase();
    if (!objOfCurrency.hasOwnProperty(currencyFrom)) {
        console.log("Unknown currency");
        start();
    } else {
        let currencyTo = input("To: ").toUpperCase();
        if (!objOfCurrency.hasOwnProperty(currencyTo)) {
            console.log("Unknown currency");
            start();
        } else {
            let amount = input("Amount: ");
            if (Number(amount) !== +amount) {
                console.log("The amount has to be a number");
                start();
            } else {
                if (amount < 0) {
                    console.log(`The amount can not be less than 1`);
                    start();
                } else {
                    console.log(`Result: ${amount} ${currencyFrom} equals ${(amount / objOfCurrency[currencyFrom] * objOfCurrency[currencyTo]).toFixed(4)} ${currencyTo}`);
                    welcome();
                }
            }
        }
    }
}