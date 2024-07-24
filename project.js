function validation(){
    var name= document.getElementById('exampleInput1').value;
    var email= document.getElementById('exampleInputEmail1').value;
    var number= document.getElementById('exampleInputNumber1').value;
    var state= document.getElementById('exampleState').value;


    var namecheck=/^[A-Za-z ]{2,}$/;
    var emailcheck=/^[A-Za-z0-9._ ]{3,}@[A-Za-z0-9]{3,}{.}{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    var statecheck=/^[A-Za-z ]{2,}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML=' '
    }
    else{
        document.getElementById('error-name').innerHTML='Use only Alphabets';
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML=' '
    }
    else{
        document.getElementById('error-email').innerHTML='Invalid email syntax. Ex:abc@xyz.com';
        return false;
    }
    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML=' '
    }
    else{
        document.getElementById('error-number').innerHTML='Use 10 digit valid phone number';
        return false;
    }
   
    const scriptURL=

   ' https://script.google.com/macros/s/AKfycbznXK9B2Aq6zmbT1OKXMJ2WWbwVQ0wkn5deXp6dXhSogG2KL6bj9V34Dtd8Hu8k0fmL/exec'
    const form= document.forms['form-google-sheet']
    
    form.addEventListener('submit', e => {
    
    e.preventDefault()
    
    fetch (scriptURL, {
    method: 'POST',
    body: new FormData (form)
    })
    .then (response=> alert(
    "Thanks for shopping !"))
    
    .catch(error=>console.error('Error!',error.message))
    })



}