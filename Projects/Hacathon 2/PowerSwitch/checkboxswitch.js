function switchPower(){
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');


    if(checkbox1.checked){
        checkbox2.checked = true;
        checkbox1.checked = false;
    }else{
        checkbox2.checked = false;
        checkbox1.checked = true;
    }
}