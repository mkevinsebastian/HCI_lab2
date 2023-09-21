function validationFunction(){
    const name = document.getElementById('name-uti').value
    const email = document.getElementById('email-uti').value
    const password = document.getElementById('password-uti').value
    const confirmp = document.getElementById('passwordc-uti').value
    const prefer = document.getElementById('prefer-uti').value
    const phonenum = document.getElementById('phonenum-uti').value
    const address = document.getElementById('address-uti').value
    const checkbox = document.getElementById('checkbox-uti').checked

    const validatemsg = document.getElementById('validate-msg')

    let msg = ''

    if(!name){
        msg = 'Name must be filled!'
    }
    else if(name.length < 3){
        msg = 'Name must be more than 3 characters!'
    }
    else if(!address){
        msg = 'Address must be filled!'
    }
    else if(!phonenum){
        msg = 'Phone number must be filled!'
    }
    else if(!email.endsWith('@gmail.com')){
        msg = 'Use your @gmail account!'
    }
    else if(password.length < 5){
        msg = 'Password must be more than 5 characters!'
    }
    else if(password != confirmp){
        msg = 'Your password not match!'
    }
    else if(prefer == ''){
        msg = 'You must choose your preferred product!'
    }
    else if(!checkbox){
        msg = 'You must agree with the terms and conditions'
    }
    if(msg){
        validatemsg.innerHTML = msg;
        return false
    }
    else{
        return true
    }
}