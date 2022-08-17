let currDate = new Date();
let hours = currDate.getHours();
let minutes = currDate.getMinutes();
let seconds = currDate.getSeconds();
if (minutes <= 9) {
    minutes = "0" + minutes;
}
if (seconds <= 9) {
    seconds = "0" + seconds;
}
let todayDate = new Date();
let currYear = todayDate.getFullYear();
let currMonth = todayDate.getMonth() + 1;
let currDay = todayDate.getDate();





function userCard(numb) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: numb,
    }
    return {
        getCardOptions: function () {
            return card;
        },

        putCredits: function (money) {
            card.balance = money;
            // return card.balance;

            let transaction = {
                operationType: 'Received credits',
                credits: money,
                operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`

            }
            card.historyLogs.splice(0, 0, transaction);
        },
        takeCredits: function (money2) {
            if (card.balance >= money2) {
                card.balance = card.balance - money2;
                let transaction = {
                    operationType: 'Withdrawal of credits',
                    credits: money2,
                    operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.splice(0, 0, transaction);
            } else {
                console.error(card);
            }

        },
        setTransactionLimit: function (money3) {
            card.transactionLimit = money3;
            let transaction = {
                operationType: 'Transaction Limit change',
                credits: money3,
                operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
        },

        transferCredits: function (credits, cards) {
            cards.getCardOptions().balance += credits;
            // console.log(cards.getCardOptions());
            credits = credits + credits * 0.5 / 100;
            card.balance -= credits
        },

    }
}

const card3 = userCard(3);
const card1 = userCard(1);
card3.getCardOptions();
card3.putCredits(150);
card3.takeCredits(100);
card3.setTransactionLimit(50);
// card3.transferCredits(50, card1);
console.log(card3.getCardOptions());
console.log(card1.getCardOptions());