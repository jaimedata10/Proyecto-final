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
    'audi': [{ model: 'Audi A3', hp: '150hp', price: "32.000&#8364", srcRute: `photosVehicules/audi/models/car1.png` },
    { model: 'Audi A4', hp: '220hp', price: '47.000&#8364', srcRute: `photosVehicules/audi/models/car2.png` },
    { model: 'Audi A6', hp: '280hp', price: '58.000&#8364', srcRute: `photosVehicules/audi/models/car3.png` },
    { model: 'Audi A1', hp: '140hp', price: '28.000&#8364', srcRute: `photosVehicules/audi/models/car4.png` },
    { model: 'Audi Q3', hp: '380hp', price: '62.000&#8364', srcRute: `photosVehicules/audi/models/car5.png` },
    { model: 'e-Tron', hp: '280hp', price: '85.000&#8364', srcRute: `photosVehicules/audi/models/car6.png` }],

    'bmw': [{ model: 'BMW Serie 5', hp: '300hp', price: '57.000&#8364', srcRute: `photosVehicules/bmw/models/car1.png` },
    { model: 'BMW X5', hp: '280hp', price: '61.000&#8364', srcRute: `photosVehicules/bmw/models/car2.png` },
    { model: 'BMW X3', hp: '240hp', price: '52.000&#8364', srcRute: `photosVehicules/bmw/models/car3.png` },
    { model: 'BMW Serie 8', hp: '360hp', price: '112.000&#8364', srcRute: `photosVehicules/bmw/models/car4.png` },
    { model: 'BMW Z4', hp: '300hp', price: '54.000&#8364', srcRute: `photosVehicules/bmw/models/car5.png` },
    { model: 'BMW Serie 1', hp: '160hp', price: '35.000&#8364', srcRute: `photosVehicules/bmw/models/car6.png` }],

    'citroen': [{ model: 'C5', hp: '160hp', price: '26.000&#8364', srcRute: `photosVehicules/citroen/models/car1.png` },
    { model: 'C4 Cactus', hp: '140hp', price: '19.000&#8364', srcRute: `photosVehicules/citroen/models/car2.png` },
    { model: 'C1', hp: '100hp', price: '16.500&#8364', srcRute: `photosVehicules/citroen/models/car3.png` },
    { model: 'C4', hp: '120hp', price: '19.000&#8364', srcRute: `photosVehicules/citroen/models/car4.png` },
    { model: 'Nemo', hp: '130hp', price: '22.000&#8364', srcRute: `photosVehicules/citroen/models/car5.png` },
    { model: 'Berlingo', hp: '140hp', price: '21.500&#8364', srcRute: `photosVehicules/citroen/models/car6.png` }],

    'ford': [{ model: 'Fiesta', hp: '100hp', price: '17.000&#8364', srcRute: `photosVehicules/ford/models/car1.png` },
    { model: 'Focus', hp: '150hp', price: '24.000&#8364', srcRute: `photosVehicules/ford/models/car2.png` },
    { model: 'Ecosport', hp: '120hp', price: '21.500&#8364', srcRute: `photosVehicules/ford/models/car3.png` },
    { model: 'Mustang', hp: '300hp', price: '56.000&#8364', srcRute: `photosVehicules/ford/models/car4.png` },
    { model: 'Ranger', hp: '150hp', price: '60.300&#8364', srcRute: `photosVehicules/ford/models/car5.png` },
    { model: 'Tourneo', hp: '200hp', price: '48.000&#8364', srcRute: `photosVehicules/ford/models/car6.png` }],

    'honda': [{ model: 'Civic R', hp: '250hp', price: '35.000&#8364', srcRute: `photosVehicules/honda/models/car1.png` },
    { model: 'CR-V', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/honda/models/car2.png` },
    { model: 'Honda E', hp: '120hp', price: '36.000&#8364', srcRute: `photosVehicules/honda/models/car3.png` },
    { model: 'HR-V', hp: '110hp', price: '20.000&#8364', srcRute: `photosVehicules/honda/models/car4.png` },
    { model: 'HR-V Hibrido', hp: '130hp', price: '30.000&#8364', srcRute: `photosVehicules/honda/models/car5.png` },
    { model: 'Civic', hp: '180hp', price: '25.000&#8364', srcRute: `photosVehicules/honda/models/car6.png` }],

    'kia': [{ model: 'Ceed', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/kia/models/car1.png` },
    { model: 'Niro', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/kia/models/car2.png` },
    { model: 'Rio', hp: '100hp', price: '19.000&#8364', srcRute: `photosVehicules/kia/models/car3.png` },
    { model: 'Sorento', hp: '150hp', price: '40.000&#8364', srcRute: `photosVehicules/kia/models/car4.png` },
    { model: 'Stringer', hp: '200hp', price: '16.000&#8364', srcRute: `photosVehicules/kia/models/car5.png` },
    { model: 'Picanto', hp: '80hp', price: '20.000&#8364', srcRute: `photosVehicules/kia/models/car6.png` }],

    'mercedes': [{ model: 'Clase S', hp: '400hp', price: '150.000&#8364', srcRute: `photosVehicules/mercedes/models/car1.png` },
    { model: 'Clase B', hp: '2O0hp', price: '35.000&#8364', srcRute: `photosVehicules/mercedes/models/car2.png` },
    { model: 'GLB SUV', hp: '210hp', price: '41.000&#8364', srcRute: `photosVehicules/mercedes/models/car3.png` },
    { model: 'GLA SUV', hp: '220hp', price: '39.000&#8364', srcRute: `photosVehicules/mercedes/models/car4.png` },
    { model: 'CLA Coupe', hp: '270hp', price: '16.000&#8364', srcRute: `photosVehicules/mercedes/models/car5.png` },
    { model: 'Clase G', hp: '330hp', price: '142.000&#8364', srcRute: `photosVehicules/mercedes/models/car6.png` }],

    'nissan': [{ model: 'Combi', hp: '150hp', price: '30.000&#8364', srcRute: `photosVehicules/nissan/models/car1.png` },
    { model: 'Qashqai', hp: '200hp', price: '35.000&#8364', srcRute: `photosVehicules/nissan/models/car2.png` },
    { model: 'Leaf', hp: '120hp', price: '40.000&#8364', srcRute: `photosVehicules/nissan/models/car3.png` },
    { model: 'Titan', hp: '130hp', price: '38.000&#8364', srcRute: `photosVehicules/nissan/models/car4.png` },
    { model: 'Armanda', hp: '110hp', price: '16.000&#8364', srcRute: `photosVehicules/nissan/models/car5.png` },
    { model: 'Sentra', hp: '160hp', price: '19.810&#8364', srcRute: `photosVehicules/nissan/models/car6.png` }],

    'opel': [{ model: 'Insignia', hp: '120hp', price: '20.000&#8364', srcRute: `photosVehicules/opel/models/car1.png` },
    { model: 'Astra', hp: '110hp', price: '25.000&#8364', srcRute: `photosVehicules/opel/models/car2.png` },
    { model: 'Mokka', hp: '115hp', price: '19.000&#8364', srcRute: `photosVehicules/opel/models/car3.png` },
    { model: 'Kadett', hp: '156hp', price: '32.000&#8364', srcRute: `photosVehicules/opel/models/car4.png` },
    { model: 'Meriva', hp: '112hp', price: '16.000&#8364', srcRute: `photosVehicules/opel/models/car5.png` },
    { model: 'Grandland', hp: '130hp', price: '20.000&#8364', srcRute: `photosVehicules/opel/models/car6.png` }],

    'peugeot': [{ model: '208', hp: '100hp', price: '19.000&#8364', srcRute: `photosVehicules/peugeot/models/car1.png` },
    { model: '3008', hp: '120hp', price: '25.000&#8364', srcRute: `photosVehicules/peugeot/models/car2.png` },
    { model: '2008', hp: '140hp', price: '19.000&#8364', srcRute: `photosVehicules/peugeot/models/car3.png` },
    { model: 'Partner', hp: '130hp', price: '30.000&#8364', srcRute: `photosVehicules/peugeot/models/car4.png` },
    { model: '5008', hp: '200hp', price: '40.000&#8364', srcRute: `photosVehicules/peugeot/models/car5.png` },
    { model: '108', hp: '70hp', price: '17.000&#8364', srcRute: `photosVehicules/peugeot/models/car6.png` }],

    'seat': [{ model: 'Alhambra', hp: '140hp', price: '30.400&#8364', srcRute: `photosVehicules/seat/models/car1.png` },
    { model: 'Ateca', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/seat/models/car2.png` },
    { model: 'Ibiza', hp: '80hp', price: '19.000&#8364', srcRute: `photosVehicules/seat/models/car3.png` },
    { model: 'Leon', hp: '110hp', price: '19.000&#8364', srcRute: `photosVehicules/seat/models/car4.png` },
    { model: 'Tarraco', hp: '120hp', price: '16.000&#8364', srcRute: `photosVehicules/seat/models/car5.png` },
    { model: 'Toledo', hp: '130hp', price: '20.000&#8364', srcRute: `photosVehicules/seat/models/car6.png` }],

    'volkswagen': [{ model: 'Golf', hp: '110hp', price: '20.000&#8364', srcRute: `photosVehicules/volkswagen/models/car1.png` },
    { model: 'Sirocco', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/volkswagen/models/car2.png` },
    { model: 'Saveiro', hp: '160hp', price: '28.000&#8364', srcRute: `photosVehicules/volkswagen/models/car3.png` },
    { model: 'Tiguan', hp: '200hp', price: '30.000&#8364', srcRute: `photosVehicules/volkswagen/models/car4.png` },
    { model: 'Artenon', hp: '210hp', price: '36.000&#8364', srcRute: `photosVehicules/volkswagen/models/car5.png` },
    { model: 'T-Cross', hp: '140hp', price: '35.000&#8364', srcRute: `photosVehicules/volkswagen/models/car6.png` }],

>>>>>>> 9ad3888f0696d2b130662521e8f2b0d4946768fe
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
    if (actualBrand == 'bmw') {
        carLogo.src = `photosVehicules/${actualBrand}M/logo_${actualBrand}M.png`
    }
    else {
        carLogo.src = `photosVehicules/${actualBrand}/${actualBrand}.svg`
    }
}