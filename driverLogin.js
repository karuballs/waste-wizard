let form = document.querySelector('form');
let password = document.querySelector('#password');
let passError =  document.querySelector('.error');
let numCheck = /\d/g;
let cpassword = document.querySelector('.cpassword');
let spaceCheck = /\s/g;
let lowercaseCheck = /\[a-z]+gm/;
let uppercase = /\[A-Z]+gm/;
let licensePlateInput = document.querySelector('#licensePlate');
let licensePlateError = document.querySelector('.error-1');
let licensePlateCheck = /^[A-Z]{3}[0-9]{3}[A-Z]$/;

console.log(passError);

form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('there was a submission');
    console.log(password.value);

    if(password.value == cpassword.value){
        console.log('the passwords are the same');
    }
    else{
        console.log('the passwords do not match');
    }
});

password.addEventListener('input', function (){
    if(password.value == ""){
        passError.innerHTML = " ";
    }
    else if(numCheck.test(password.value) == false){
       passError.innerHTML = "you should have a number in your password";
    }
    else if(lowercaseCheck.test(password.value) == false){
        passError.innerHTML = "you should have a lowercase in your password";
    }
    else if(uppercase.test(password.value) == false){
        passError.innerHTML = "You do not have an uppercase in your password";
    }
    else if(numCheck.test(password.value) == true && lowercaseCheck.test(password.value) == true && uppercase.test(password.value) == true){
        passError.innerHTML = " ";
    }
})

licensePlateInput.addEventListener('input', function (){
    if(licensePlateInput.value == ""){
        licensePlateError.innerHTML = " ";
    }
    else if(licensePlateCheck.test(licensePlateInput.value) == false){
       licensePlateError.innerHTML = "Invalid license plate number. The format should be 3 capital letters followed by three numbers and finally a capital letter at the end.";
    }
    else{
        licensePlateError.innerHTML = " ";
    }
})


