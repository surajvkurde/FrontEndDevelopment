//read element value for input screen
let screen=document.getElementById('screen');
//value of output 
let screenValue='';
//get all button elements, as on click it will be used to read current button value
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='AC'){
            screenValue='';
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}

