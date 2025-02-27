function getInputValueById(id) {
    const amount = document.getElementById(id).value;
    const convertedAmount = parseInt(amount);
    return convertedAmount;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTexByIdandValue(id, value) {
    document.getElementById(id).innerText = value;

}

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}

