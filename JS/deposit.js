document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField = document.getElementById('deposit-field');
    const  depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
   

    const totalDepositValue = document.getElementById('total-deposit');
    const depositValueString = totalDepositValue.innerText;
    const depositValue = parseFloat(depositValueString);

    const totalDepositAmount = depositValue + depositFieldValue;

    totalDepositValue.innerText = totalDepositAmount;


    const totalBalanceValue =  document.getElementById('total-balance');
    const totalBalanceValueString = totalBalanceValue.innerText;
    const balanceValue = parseFloat(totalBalanceValueString);


    const newBalance = depositFieldValue + balanceValue;

    totalBalanceValue.innerText = newBalance;


    depositField.value = '';

});