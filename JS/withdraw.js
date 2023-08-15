document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);

    withdrawField.value = '';

    if(isNaN(withdrawFieldValue)){
        alert('Please Give a Number!')
        return;
    }

    const totalWithdrawValue = document.getElementById('total-withdraw');
    const totalWithdrawValueString = totalWithdrawValue.innerText;
    const totalWithdraw = parseFloat(totalWithdrawValueString);

  

    const totalBalanceValue = document.getElementById('total-balance');
    const totalBalanceValueString = totalBalanceValue.innerText;
    const newBalance = parseFloat(totalBalanceValueString);


    if(withdrawFieldValue > newBalance){
        alert('Insufficient Funds!')
        return;
    }
    const newWithdrawValue = withdrawFieldValue + totalWithdraw;
    totalWithdrawValue.innerText = newWithdrawValue;

    const totalBalance = newBalance - newWithdrawValue;
    totalBalanceValue.innerText = totalBalance;
});