
function validasi(){
var username = document.registration.uname;
var password = document.registration.pass;
var passwordCon = document.registration.passCon;
var email = document.registration.email;
var emailCon = document.registration.emailCon;

if(unameValidation(username)){
    if(passValidation(password)){
        if(passwordConValidation(passwordCon,password)){
            if(emailValidation(email)){
                if(emailConValidation(emailCon,email)){

                }
            }
        }
    }
}
}
function unameValidation(uname){
    if(uname.value.length==0){
        alert('User Name tidak boleh kosong');
        return false
    }
    return true
}
function passValidation(pass){
    if(pass.value.length==0){
        alert('Password tidak boleh kosong')
        return false
    }
    return true

}
function passwordConValidation(passCon,pass){
    if(passCon.value!==pass.value){
        alert('Password tidak sama');
        return false
    }
    return true
}
function emailValidation(email){
    if(email.value.length==0){
        alert('email tidak boleh kosong');
        return false
    }
    return true
}
function emailConValidation(emailCon,email){
    if(emailCon.value!==email.value){
        alert('Email tidak sama');
        return false
    }else{
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}

