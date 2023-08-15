document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    console.log(email);

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(password);

    userEmail.value = '';
    userPassword.value = '';

    //temporary validation

    if(email === 'ks@gmail.com' && password === 'ks2001'){
        console.log(location.href = 'savings.html');
    }
    else{
        alert('Invalid Inputs!')
        location.href = 'index.html';
    }
});