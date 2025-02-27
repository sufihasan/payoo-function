handleToggle('transaction-history', 'none');
document.getElementById('Transection-box').addEventListener('click', function () {
    handleToggle('transaction-history', 'block');
    handleToggle('cashout', 'none');
    handleToggle('addmoney', 'none');
})