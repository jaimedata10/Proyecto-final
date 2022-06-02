
function myMedia( Price, Entrance , Months, tae, cont) {
var Price, Entrance, Months, sumaTotal, sumaDivide, restaPriceEntrance, cont;
var tae = 0.07;

console.log(Price);
console.log(Entrance);
console.log(Months);
console.log(tae);

restaPriceEntrance = (parseFloat(Price)- parseFloat(Entrance));

sumaTotal =( ((parseFloat(Price)-parseFloat(Entrance))*tae) ).toFixed(2);


console.log(sumaTotal);

console.log('lo de abajo es lo de divide')

sumaDivide = ( ( parseFloat(restaPriceEntrance) + parseFloat(sumaTotal) ) / parseFloat(Months) ).toFixed(2);


console.log(sumaDivide);
console.log(sumaTotal);

if(isNaN(sumaTotal)){
sumaTotal= '';
}

if(isNaN(sumaDivide)){
    sumaDivide= '';
    }

/* 
if(Price==''||Entrance==''||Months==''){
alert('Rellena todos los campos')
}

if((Price<0||Price>90000)||(Entrance<0||Entrance>90000)||(Months<0||Months>90000)){
alert('Los numeros tienes que estar entre el 0 y el 90000');
return '';
}
*/







//esto es una prueba 


        if ( Price ==="" || Entrance ==="" || Months ==="" ) { 
            document.getElementById("demo").innerHTML = "All fields are mandatory";
            return false
        }
        else { 
            document.getElementById("demo").innerHTML = "";
           
            
            if(cont==1){

                document.getElementById("resultadoFinal").innerHTML = `${sumaDivide}€`;
                document.getElementById("Prize").innerHTML= `${Price}€`;
                document.getElementById("Entrance").innerHTML =  `${Entrance}€`;
                document.getElementById("Months").innerHTML = `${Months}`;
                
            }

            return false
        }
        

}
    
    
