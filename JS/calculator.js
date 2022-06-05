
function myMedia(Price, Entrance, Months, tae, cont) {
    var Price, Entrance, Months, sumaTotal, sumaDivide, restaPriceEntrance, cont;
    var tae = 0.07;

    restaPriceEntrance = (parseFloat(Price) - parseFloat(Entrance));
    sumaTotal = (((parseFloat(Price) - parseFloat(Entrance)) * tae)).toFixed(2);
    sumaDivide = ((parseFloat(restaPriceEntrance) + parseFloat(sumaTotal)) / parseFloat(Months)).toFixed(2);

    if (isNaN(sumaTotal)) {
        sumaTotal = '';
    }

    if (isNaN(sumaDivide)) {
        sumaDivide = '';
    }


    if (Price === "" || Entrance === "" || Months === "") {
        document.getElementById("demo").innerHTML = "All fields are mandatory";
        return false
    }
    else {
        document.getElementById("demo").innerHTML = "";

        if (cont == 1 && sumaDivide>0 && Price> 0 && Entrance > 0) {

            document.getElementById("resultadoFinal").innerHTML = `${sumaDivide}€`;
            document.getElementById("Prize").innerHTML = `${Price}€`;
            document.getElementById("Entrance").innerHTML = `${Entrance}€`;
            document.getElementById("Months").innerHTML = `${Months}€`;
        }
        else{
            document.getElementById("demo").innerHTML = "You have a negative number";

        }

        return false
    }


}


function myClean(Price, Entrance, Months, tae, cont) {

 

    if (cont == 2) {

        document.getElementById("resultadoFinal").innerHTML = '';
        document.getElementById("Prize").innerHTML = '';
        document.getElementById("Entrance").innerHTML = '';
        document.getElementById("Months").innerHTML = '';
    }



}

