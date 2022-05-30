function myMedia( x,  y, z, cont) {
var x, y, z, sumaTotal,cont;
sumaTotal =(parseFloat(x)+parseFloat(y)+parseFloat(z))/3;

if(isNaN(sumaTotal)){
sumaTotal= '';
}

if(x==''||y==''||z==''){
alert('Rellena todos los campos')
}

if((x<0||x>10)||(y<0||y>10)||(z<0||z>10)){
alert('Los numeros tienes que estar entre el 0 y el 10');
return '';
}


if(cont==1){
document.getElementById("promedio1").innerHTML= sumaTotal.toFixed(2);

}
else if(cont==2){
document.getElementById("promedio2").innerHTML = sumaTotal.toFixed(2);

}
else if(cont==3){
document.getElementById("promedio3").innerHTML = sumaTotal.toFixed(2);

}
else if(cont==4){
document.getElementById("promedio4").innerHTML = sumaTotal.toFixed(2);

}
else{
document.getElementById("promedio5").innerHTML = sumaTotal.toFixed(2);

}


}
    
    
