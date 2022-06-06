var actualBrand = "";
function openSidebar(brand) {
    console.log('open sidebar');
    document.querySelector('.sidebar-ourCars').classList.add('open');
    actualBrand = brand;
    console.log(actualBrand);
    chargephotosVehicules();
}

function closeSidebar() {
    console.log('close sidebar');
    document.querySelector('.sidebar-ourCars').classList.remove('open');
}   

const motos = {
    'bmw': [{ model: 'F900XR', hp: '105hp', price: '11.950&#8364', srcRute: `photosVehicules/bmwM/models/car1.png` },
    { model: 'R NINE T SCRAMBLER', hp: '109hp', price: '14.000&#8364', srcRute: `photosVehicules/bmwM/models/car2.png` },
    { model: 'R 1250 GS', hp: '136hp', price: '20.000&#8364', srcRute: `photosVehicules/bmwM/models/car3.png` },
    { model: 'K 1600', hp: '160hp', price: '33.000&#8364', srcRute: `photosVehicules/bmwM/models/car4.png` },
    { model: 'R1', hp: '150hp', price: '27.000&#8364', srcRute: `photosVehicules/bmwM/models/car5.png` },
    { model: 'S1000', hp: '165hp', price: '17.000&#8364', srcRute: `photosVehicules/bmwM/models/car6.png` }],

    'brixton': [{ model: 'CROMWELL 1200', hp: '30hp', price: '10.000&#8364', srcRute: `photosVehicules/brixton/models/car1.png` },
    { model: 'CROMWELL 125', hp: '11.2hp', price: '8000&#8364', srcRute: `photosVehicules/brixton/models/car2.png` },
    { model: 'CROMWELL 250', hp: '16.9hp', price: '7500&#8364', srcRute: `photosVehicules/brixton/models/car3.png` },
    { model: 'CROSSFIRE X', hp: '48hp', price: '6.000&#8364', srcRute: `photosVehicules/brixton/models/car4.png` },
    { model: 'FELSBERG 125', hp: '11hp', price: '3.000&#8364', srcRute: `photosVehicules/brixton/models/car5.png` },
    { model: 'SUNRAY 125', hp: '11hp', price: '5.000&#8364', srcRute: `photosVehicules/brixton/models/car6.png` }],
    
    'ducati': [{ model: 'PANIGALE V4', hp: '155hp', price: '18.000&#8364', srcRute: `photosVehicules/ducati/models/car1.png` },
    { model: 'DIAVEL', hp: '160hp', price: '21.000&#8364', srcRute: `photosVehicules/ducati/models/car2.png` },
    { model: 'SUPERLEGGERA', hp: '220hp', price: '115.000&#8364', srcRute: `photosVehicules/ducati/models/car3.png` },
    { model: 'SCRAMBLER 1100', hp: '86hp', price: '15.000&#8364', srcRute: `photosVehicules/ducati/models/car4.png` },
    { model: 'XDIAVEL', hp: '165hp', price: '25.000&#8364', srcRute: `photosVehicules/ducati/models/car5.png` },
    { model: 'MULTISTRADA', hp: '170hp', price: '20.000&#8364', srcRute: `photosVehicules/ducati/models/car6.png` }],
    
    'hondaM': [{ model: 'REBEL', hp: '85hp', price: '10.000&#8364', srcRute: `photosVehicules/hondaM/models/car1.png` },
    { model: 'NC750X', hp: '57hp', price: '12.000&#8364', srcRute: `photosVehicules/hondaM/models/car2.png` },
    { model: 'X-ADV', hp: '30hp', price: '10.000&#8364', srcRute: `photosVehicules/hondaM/models/car3.png` },
    { model: 'PCX-125', hp: '12.3hp', price: '8.000&#8364', srcRute: `photosVehicules/hondaM/models/car4.png` },
    { model: 'CB500X', hp: '110hp', price: '13.000&#8364', srcRute: `photosVehicules/hondaM/models/car5.png` },
    { model: 'CBR-500', hp: '130hp', price: '17.000&#8364', srcRute: `photosVehicules/hondaM/models/car6.png` }],
    
    'kawasaki': [{ model: 'NINJA 1000SX', hp: '140hp', price: '15.000&#8364', srcRute: `photosVehicules/kawasaki/models/car1.png` },
    { model: 'NINJA ZX', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/kawasaki/models/car2.png` },
    { model: 'NINJA H2', hp: '200hp', price: '19.000&#8364', srcRute: `photosVehicules/kawasaki/models/car3.png` },
    { model: 'VERSYS', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/kawasaki/models/car4.png` },
    { model: 'Z900-RS', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/kawasaki/models/car5.png` },
    { model: 'NINJA RZ', hp: '145hp', price: '14.000&#8364', srcRute: `photosVehicules/kawasaki/models/car6.png` }],
    
    'ktm': [{ model: '125SX', hp: '10hp', price: '7.000&#8364', srcRute: `photosVehicules/ktm/models/car1.png` },
    { model: '50SX', hp: '5hp', price: '4.000&#8364', srcRute: `photosVehicules/ktm/models/car2.png` },
    { model: '790 DUKE', hp: '87hp', price: '13.000&#8364', srcRute: `photosVehicules/ktm/models/car3.png` },
    { model: 'DUKE', hp: '17hp', price: '8.000&#8364', srcRute: `photosVehicules/ktm/models/car4.png` },
    { model: 'RC 390', hp: '44hp', price: '16.000&#8364', srcRute: `photosVehicules/ktm/models/car5.png` },
    { model: '1290 SUPER DUKE', hp: '177hp', price: '20.000&#8364', srcRute: `photosVehicules/ktm/models/car6.png` }],
    
    'kymco': [{ model: 'AGILITY CARRY 125', hp: '9.12hp', price: '2.500&#8364', srcRute: `photosVehicules/kymco/models/car1.png` },
    { model: 'AK 550 ST', hp: '53.4hp', price: '5.000&#8364', srcRute: `photosVehicules/kymco/models/car2.png` },
    { model: 'DTX 125', hp: '12.9hp', price: '5.000&#8364', srcRute: `photosVehicules/kymco/models/car3.png` },
    { model: 'GRAND DINK 300', hp: '23hp', price: '6.000&#8364', srcRute: `photosVehicules/kymco/models/car4.png` },
    { model: 'MILER 125', hp: '9.1hp', price: '4.000&#8364', srcRute: `photosVehicules/kymco/models/car5.png` },
    { model: 'SUPER DINK', hp: '13.3hp', price: '7.000&#8364', srcRute: `photosVehicules/kymco/models/car6.png` }],
    
    'peugeotM': [{ model: 'METROPOLIS 400', hp: '35.6hp', price: '9.000&#8364', srcRute: `photosVehicules/peugeotM/models/car1.png` },
    { model: 'PULSION 125', hp: '14hp', price: '8.000&#8364', srcRute: `photosVehicules/peugeotM/models/car2.png` },
    { model: 'TWEET 125', hp: '10hp', price: '6.000&#8364', srcRute: `photosVehicules/peugeotM/models/car3.png` },
    { model: 'KISBEE 50', hp: '4.6hp', price: '3.000&#8364', srcRute: `photosVehicules/peugeotM/models/car4.png` },
    { model: 'E-LUDIX', hp: '3hp', price: '2.000&#8364', srcRute: `photosVehicules/peugeotM/models/car5.png` },
    { model: 'DJANGO', hp: '3hp', price: '2.000&#8364', srcRute: `photosVehicules/peugeotM/models/car6.png` }],

    'piaggio': [{ model: 'BEVERLY', hp: '25hp', price: '5.000&#8364', srcRute: `photosVehicules/piaggio/models/car1.png` },
    { model: 'LIBERTY 300', hp: '11hp', price: '5.000&#8364', srcRute: `photosVehicules/piaggio/models/car2.png` },
    { model: 'MEDLEY 125', hp: '15hp', price: '6.000&#8364', srcRute: `photosVehicules/piaggio/models/car3.png` },
    { model: 'MP3 500 SPORT', hp: '43.5hp', price: '8.000&#8364', srcRute: `photosVehicules/piaggio/models/car4.png` },
    { model: '1 ACTIVE', hp: '2.7hp', price: '7.000&#8364', srcRute: `photosVehicules/piaggio/models/car5.png` },
    { model: 'LIBERTY 50', hp: '3.2hp', price: '4.000&#8364', srcRute: `photosVehicules/piaggio/models/car6.png` }],

    'suzuki': [{ model: 'GSX R-125', hp: '15hp', price: '5.000&#8364', srcRute: `photosVehicules/suzuki/models/car1.png` },
    { model: 'GSX S1000', hp: '150hp', price: '13.000&#8364', srcRute: `photosVehicules/suzuki/models/car2.png` },
    { model: 'GSX S950', hp: '95hp', price: '10.000&#8364', srcRute: `photosVehicules/suzuki/models/car3.png` },
    { model: 'HAYABUSA', hp: '190hp', price: '25.000&#8364', srcRute: `photosVehicules/suzuki/models/car4.png` },
    { model: 'KATANA', hp: '152hp', price: '18.000&#8364', srcRute: `photosVehicules/suzuki/models/car5.png` },
    { model: 'SV 950', hp: '76hp', price: '14.000&#8364', srcRute: `photosVehicules/suzuki/models/car6.png` }],

    'sym': [{ model: 'CRUISYM ALPHA 125', hp: '14hp', price: '6.000&#8364', srcRute: `photosVehicules/sym/models/car1.png` },
    { model: 'FIDDLE', hp: '11.4hp', price: '4.000&#8364', srcRute: `photosVehicules/sym/models/car2.png` },
    { model: 'SYM JET', hp: '12.6hp', price: '6.000&#8364', srcRute: `photosVehicules/sym/models/car3.png` },
    { model: 'SYM JOYMAX', hp: '14hp', price: '7.000&#8364', srcRute: `photosVehicules/sym/models/car4.png` },
    { model: 'SYMPHONY', hp: '11hp', price: '5.000&#8364', srcRute: `photosVehicules/sym/models/car5.png` },
    { model: 'SYM JET X', hp: '12hp', price: '6.000&#8364', srcRute: `photosVehicules/sym/models/car6.png` }],

    'yamaha': [{ model: 'TENERE 700', hp: '73hp', price: '12.000&#8364', srcRute: `photosVehicules/yamaha/models/car1.png` },
    { model: 'PW 50', hp: '3hp', price: '2.000&#8364', srcRute: `photosVehicules/yamaha/models/car2.png` },
    { model: 'TT R-125', hp: '15hp', price: '4.000&#8364', srcRute: `photosVehicules/yamaha/models/car3.png` },
    { model: 'MT-07', hp: '65hp', price: '8.000&#8364', srcRute: `photosVehicules/yamaha/models/car4.png` },
    { model: 'R6', hp: '118hp', price: '15.000&#8364', srcRute: `photosVehicules/yamaha/models/car5.png` },
    { model: 'R1', hp: '200hp', price: '22.000&#8364', srcRute: `photosVehicules/yamaha/models/car6.png` }],
}

function chargephotosVehicules() {
    var carPhoto1 = document.querySelector('#carPhoto1').src = `photosVehicules/${actualBrand}/models/car1.png`;
    var carPhoto2 = document.querySelector('#carPhoto2').src = `photosVehicules/${actualBrand}/models/car2.png`;
    var carPhoto3 = document.querySelector('#carPhoto3').src = `photosVehicules/${actualBrand}/models/car3.png`;
    var carPhoto4 = document.querySelector('#carPhoto4').src = `photosVehicules/${actualBrand}/models/car4.png`;
    var carPhoto5 = document.querySelector('#carPhoto5').src = `photosVehicules/${actualBrand}/models/car5.png`;
    var carPhoto6 = document.querySelector('#carPhoto6').src = `photosVehicules/${actualBrand}/models/car6.png`;
}

function closeModal() {
    const modal = document.querySelector('.modalContainer-ourCars');
    modal.classList.remove('showModal');
}

function openModal(value) {
    const myStr = (actualBrand.charAt(0).toUpperCase() + actualBrand.slice(1));
    const bike = motos[actualBrand][parseInt(value)];
    const modal = document.querySelector('.modalContainer-ourCars');
    const carImg = document.querySelector('#modalPhoto');
    const carLogo = document.querySelector('#modalLogo');
    const brand = document.querySelector('#marcaModal');
    const model = document.querySelector('#modeloModal');
    const hPower = document.querySelector('#horsePowerModal');
    const price = document.querySelector('#priceModal');
    modal.classList.add('showModal');
    carImg.src = `${bike.srcRute}`;
    brand.innerHTML = `Brand: ${myStr}`;
    model.innerHTML = `Model: ${bike.model}`;
    hPower.innerHTML = `Horse power: ${bike.hp}`;
    price.innerHTML = `Price: ${bike.price}`;
    carLogo.src = `photosVehicules/${actualBrand}/logo_${actualBrand}.png`

}