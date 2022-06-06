var actualBrand = "";
function openSidebar(brand) {
    console.log('open sidebar');
    document.querySelector('.sidebar-ourCars').classList.add('open');
    actualBrand = brand;
    console.log(actualBrand);
    chargePhotos();
}

function closeSidebar() {
    console.log('close sidebar');
    document.querySelector('.sidebar-ourCars').classList.remove('open');
}   

const coches = {
    'audi': [{ model: 'Audi A3', hp: '150hp', price: "32.000&#8364", srcRute: `photos/audi/models/car1.png` },
    { model: 'Audi A4', hp: '220hp', price: '47.000&#8364', srcRute: `photos/audi/models/car2.png` },
    { model: 'Audi A6', hp: '280hp', price: '58.000&#8364', srcRute: `photos/audi/models/car3.png` },
    { model: 'Audi A1', hp: '140hp', price: '28.000&#8364', srcRute: `photos/audi/models/car4.png` },
    { model: 'Audi Q3', hp: '380hp', price: '62.000&#8364', srcRute: `photos/audi/models/car5.png` },
    { model: 'e-Tron', hp: '280hp', price: '85.000&#8364', srcRute: `photos/audi/models/car6.png` }],

    'bmw': [{ model: 'BMW Serie 5', hp: '300hp', price: '57.000&#8364', srcRute: `photos/bmw/models/car1.png` },
    { model: 'BMW X5', hp: '280hp', price: '61.000&#8364', srcRute: `photos/bmw/models/car2.png` },
    { model: 'BMW X3', hp: '240hp', price: '52.000&#8364', srcRute: `photos/bmw/models/car3.png` },
    { model: 'BMW Serie 8', hp: '360hp', price: '112.000&#8364', srcRute: `photos/bmw/models/car4.png` },
    { model: 'BMW Z4', hp: '300hp', price: '54.000&#8364', srcRute: `photos/bmw/models/car5.png` },
    { model: 'BMW Serie 1', hp: '160hp', price: '35.000&#8364', srcRute: `photos/bmw/models/car6.png` }],
    
    'citroen': [{ model: 'C5', hp: '160hp', price: '26.000&#8364', srcRute: `photos/citroen/models/car1.png` },
    { model: 'C4 Cactus', hp: '140hp', price: '19.000&#8364', srcRute: `photos/citroen/models/car2.png` },
    { model: 'C1', hp: '100hp', price: '16.500&#8364', srcRute: `photos/citroen/models/car3.png` },
    { model: 'C4', hp: '120hp', price: '19.000&#8364', srcRute: `photos/citroen/models/car4.png` },
    { model: 'Nemo', hp: '130hp', price: '22.000&#8364', srcRute: `photos/citroen/models/car5.png` },
    { model: 'Berlingo', hp: '140hp', price: '21.500&#8364', srcRute: `photos/citroen/models/car6.png` }],
    
    'ford': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/ford/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/ford/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/ford/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/ford/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/ford/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/ford/models/car6.png` }],
    
    'honda': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/honda/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/honda/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/honda/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/honda/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/honda/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/honda/models/car6.png` }],
    
    'kia': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/kia/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/kia/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/kia/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/kia/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/kia/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/kia/models/car6.png` }],
    
    'mercedes': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/mercedes/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/mercedes/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/mercedes/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/mercedes/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/mercedes/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/mercedes/models/car6.png` }],
    
    'nissan': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/nissan/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/nissan/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/nissan/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/nissan/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/nissan/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/nissan/models/car6.png` }],

    'opel': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/opel/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/opel/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/opel/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/opel/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/opel/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/opel/models/car6.png` }],

    'peugeot': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/peugeot/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/peugeot/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/peugeot/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/peugeot/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/peugeot/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/peugeot/models/car6.png` }],

    'seat': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/seat/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/seat/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/seat/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/seat/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/seat/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/seat/models/car6.png` }],

    'volkswagen': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photos/volkswagen/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photos/volkswagen/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photos/volkswagen/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photos/volkswagen/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photos/volkswagen/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photos/volkswagen/models/car6.png` }],

}

function chargePhotos() {
    var carPhoto1 = document.querySelector('#carPhoto1').src = `photos/${actualBrand}/models/car1.png`;
    var carPhoto2 = document.querySelector('#carPhoto2').src = `photos/${actualBrand}/models/car2.png`;
    var carPhoto3 = document.querySelector('#carPhoto3').src = `photos/${actualBrand}/models/car3.png`;
    var carPhoto4 = document.querySelector('#carPhoto4').src = `photos/${actualBrand}/models/car4.png`;
    var carPhoto5 = document.querySelector('#carPhoto5').src = `photos/${actualBrand}/models/car5.png`;
    var carPhoto6 = document.querySelector('#carPhoto6').src = `photos/${actualBrand}/models/car6.png`;
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