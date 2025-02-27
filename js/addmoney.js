document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin-no');
    const accountNo = document.getElementById('account-no').value;
    const mainBlance = getInnerTextById('main-blance');

    const selectedBank = document.getElementById('selected-bank').value;
    console.log(selectedBank);

    if (accountNo.length === 11) {
        if (amount <= 0) {
            alert('Please Enter a valid amonunt');
            return;
        }
        if (pin === 1234) {
            const sum = mainBlance + amount;
            setInnerTexByIdandValue('main-blance', sum);

            const transContainer = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add('bg-red-400')
            div.innerHTML = `
            <h1 class='text-yellow-400'>Added Money from : ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>Account Number:${accountNo}</p>
            `;
            // const p = document.createElement('p');
            // p.innerText = `added ${amount} fron ${accountNo} account`;

            transContainer.appendChild(div);

        }
        else {
            alert('pin is incorrect');
        }
    }
    else {
        alert('Account no is not ok');
    }
})



