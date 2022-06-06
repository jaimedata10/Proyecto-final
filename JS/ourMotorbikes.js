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
    'bmwM': [{ model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/bmwM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/bmwM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/bmwM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '17.000&#8364', srcRute: `photosVehicules/bmwM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '30.000&#8364', srcRute: `photosVehicules/bmwM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '85.000&#8364', srcRute: `photosVehicules/bmwM/models/car6.png` }],

    'brixton': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/brixton/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/brixton/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/brixton/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/brixton/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/brixton/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/brixton/models/car6.png` }],
    
    'ducati': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/ducati/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/ducati/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/ducati/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/ducati/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/ducati/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/ducati/models/car6.png` }],
    
    'hondaM': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/hondaM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/hondaM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/hondaM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/hondaM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/hondaM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/hondaM/models/car6.png` }],
    
    'kawasaki': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/kawasaki/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/kawasaki/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/kawasaki/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/kawasaki/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/kawasaki/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/kawasaki/models/car6.png` }],
    
    'ktm': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/ktm/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/ktm/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/ktm/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/ktm/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/ktm/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/ktm/models/car6.png` }],
    
    'kymco': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/kymco/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/kymco/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/kymco/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/kymco/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/kymco/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/kymco/models/car6.png` }],
    
    'peugeotM': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/peugeotM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/peugeotM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/peugeotM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/peugeotM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/peugeotM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/peugeotM/models/car6.png` }],

    'piaggio': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/piaggio/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/piaggio/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/piaggio/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/piaggio/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/piaggio/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/piaggio/models/car6.png` }],

    'suzuki': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/suzuki/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/suzuki/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/suzuki/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/suzuki/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/suzuki/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/suzuki/models/car6.png` }],

    'sym': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/sym/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/sym/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/sym/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/sym/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/sym/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/sym/models/car6.png` }],

    'yamaha': [{ model: 'Serie 1', hp: '150hp', price: '10.000&#8364', srcRute: `photosVehicules/yamaha/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000&#8364', srcRute: `photosVehicules/yamaha/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000&#8364', srcRute: `photosVehicules/yamaha/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000&#8364', srcRute: `photosVehicules/yamaha/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000&#8364', srcRute: `photosVehicules/yamaha/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000&#8364', srcRute: `photosVehicules/yamaha/models/car6.png` }],
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