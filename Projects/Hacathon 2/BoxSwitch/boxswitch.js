function switchPower(){
    var pwerOn = document.getElementById('on');
    var pwerOff = document.getElementById('off');

    if(pwerOn.style.backgroundColor != 'black'){
        pwerOff.style.backgroundColor = 'red';
        pwerOn.style.backgroundColor = 'black';
    }else{
        pwerOff.style.backgroundColor = 'black';
        pwerOn.style.backgroundColor = 'green';
    }
    
}