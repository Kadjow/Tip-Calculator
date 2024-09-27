function formatemoney(value){
    value = Math.ceil(value * 100 / 100)
}

function formateSplit(value){
    if(value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = Number(document.getElementById('tipInput').value);
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tipPercent').innerHTML = tipPercent + '%';
    document.getElementById('tipValue').innerHTML = '$' + tipValue.toFixed(2);
    document.getElementById('totalWithTip').innerHTML = '$' + billTotal.toFixed(2);
    document.getElementById('splitValue').innerHTML = formateSplit(split);
    document.getElementById('billEach').innerHTML = '$' + billEach.toFixed(2);
}
