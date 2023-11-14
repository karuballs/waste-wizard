let form = document.querySelector('form');
let password = document.querySelector('#password');
let passError =  document.querySelector('.error');
let numCheck = /\d/g;
let cpassword = document.querySelector('.cpassword');
let spaceCheck = /\s/g;
let lowercaseCheck = /\[a-z]+gm/;
let uppercase = /\[A-Z]+gm/;

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
    if(numCheck.test(password.value) == false){
       passError.innerHTML = "you should have a number in your password";
    }else if(lowercaseCheck.test(password.value) == false){
        passError.innerHTML = "you should have a lowercasein your password";
    }
    else if(uppercase.test(password.value) == false){
        passError.innerHTML = "You do not have an uppercase in your password";
    }
    else if(numCheck.test(password.value) == true && lowercaseCheck.test(password.value) == true && uppercase.test(password.value) == true){
        passError.innerHTML = " ";
    }else if(numCheck.test(password.value) == false && lowercaseCheck.test(password.value) == false && uppercase.test(password.value) == false){
        passError.innerHTML = " ";
    }
    
    

})
