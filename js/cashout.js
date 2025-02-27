document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-no').value;

    const amount = getInputValueById('cashout-amount');
    const pin = getInputValueById('cash-pin-no');
    const mainBlance = getInnerTextById('main-blance');

    if (amount > mainBlance) {
        alert('Insufficient Blance');
        return;
    }
    if (accountNumber.length === 11) {
        if (pin === 1234) {
            const sum = mainBlance - amount;
            setInnerTexByIdandValue('main-blance', sum);

            const transContainer = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `Cashout ${amount} from ${accountNumber} account`;
            transContainer.appendChild(p);
        }
        else {
            alert('pin not valid');
        }
    }
    else {
        alert('account number not valid');
    }


})