


function getpin(){
    const pin = Math.round(Math.random()*100000);
    const pinstring = pin + '';

    if(pinstring.length == 4 )
    {

       // console.log(pin);
        return pin;
    }
    else {
        return getpin();
    
    }

}


function genaratepin(){

    const pin = getpin();

   document.getElementById('pinshow').value = pin;

   // console.log(pin);

  
}


document.getElementById('keyPad').addEventListener('click', function(event){

const number = event.target.innerText;
const numberinput = document.getElementById('numbershow');
//console.log(number);
if(isNaN(number))
{
    //console.log(number);
    if(number == 'C')
    {
        numberinput.value = '';
    }
//    else if(number == '&lt;')
//     {
//         const deletenumber = newNumber - number;

//         console.log(deletenumber)
//     }

}
else{
    const perviousnumber = numberinput.value;
    const newNumber = perviousnumber + number;
    numberinput.value = newNumber;
}




})


function verifyPin(){


   // console.log('verify');

   const genaratepins = document.getElementById('pinshow').value;
   const calpin = document.getElementById('numbershow').value;


   const matchpin = document.getElementById('Yesverify');
   const notmatch = document.getElementById('Noverify');


   const numberinput = document.getElementById('numbershow');

   if( genaratepins == calpin )
   {
    numberinput.value = '';
    matchpin.style.display='block';
    notmatch.style.display='none';
   }
   else{
      numberinput.value = '';
      notmatch.style.display='block';
      matchpin.style.display='none';
   }



 


}