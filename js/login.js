document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-no').value;


    const pin = document.getElementById('pin-no').value;
    const conPin = parseInt(pin);

    if (accountNumber.length === 11) {
        if (conPin === 1234) {
            window.location.href = 'main.html';
        }
        else {
            alert('Enter correct pin');
        }
    }
    else {
        alert('Please insurt correct account no');
    }
})