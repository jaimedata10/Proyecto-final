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

const coches = {
    'audi': [{ model: 'Serie 1', hp: '150hp', price: "20.000&#8364", srcRute: `photosVehicules/audi/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/audi/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/audi/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '17.000&#8364', srcRute: `photosVehicules/audi/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '30.000&#8364', srcRute: `photosVehicules/audi/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '85.000&#8364', srcRute: `photosVehicules/audi/models/car6.png` }],

    'bmw': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/bmw/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/bmw/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/bmw/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/bmw/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/bmw/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/bmw/models/car6.png` }],
    
    'citroen': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/citroen/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/citroen/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/citroen/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/citroen/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/citroen/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/citroen/models/car6.png` }],
    
    'ford': [{ model: 'Fiesta', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/ford/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/ford/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/ford/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/ford/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/ford/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/ford/models/car6.png` }],
    
    'honda': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/honda/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/honda/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/honda/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/honda/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/honda/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/honda/models/car6.png` }],
    
    'kia': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/kia/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/kia/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/kia/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/kia/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/kia/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/kia/models/car6.png` }],
    
    'mercedes': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/mercedes/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/mercedes/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/mercedes/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/mercedes/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/mercedes/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/mercedes/models/car6.png` }],
    
    'nissan': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/nissan/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/nissan/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/nissan/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/nissan/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/nissan/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/nissan/models/car6.png` }],

    'opel': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/opel/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/opel/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/opel/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/opel/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/opel/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/opel/models/car6.png` }],

    'peugeot': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/peugeot/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/peugeot/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/peugeot/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/peugeot/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/peugeot/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/peugeot/models/car6.png` }],

    'seat': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/seat/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/seat/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/seat/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/seat/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/seat/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/seat/models/car6.png` }],

    'volkswagen': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/volkswagen/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/volkswagen/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/volkswagen/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/volkswagen/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/volkswagen/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/volkswagen/models/car6.png` }],

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
    const car = coches[actualBrand][parseInt(value)];
    const modal = document.querySelector('.modalContainer-ourCars');
    const carImg = document.querySelector('#modalPhoto');
    const carLogo = document.querySelector('#modalLogo');
    const brand = document.querySelector('#marcaModal');
    const model = document.querySelector('#modeloModal');
    const hPower = document.querySelector('#horsePowerModal');
    const price = document.querySelector('#priceModal');
    modal.classList.add('showModal');
    carImg.src = `${car.srcRute}`;
    brand.innerHTML = `Brand: ${myStr}`;
    model.innerHTML = `Model: ${car.model}`;
    hPower.innerHTML = `Horse power: ${car.hp}`;
    price.innerHTML = `Price: ${car.price}`;
    carLogo.src = `photos/${actualBrand}/${actualBrand}.svg`

}