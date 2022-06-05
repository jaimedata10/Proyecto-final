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

const motos = {
    'bmwM': [{ model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/bmwM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/bmwM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/bmwM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '17.000€', srcRute: `photos/bmwM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '30.000€', srcRute: `photos/bmwM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '85.000€', srcRute: `photos/bmwM/models/car6.png` }],

    'brixton': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/brixton/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/brixton/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/brixton/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/brixton/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/brixton/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/brixton/models/car6.png` }],
    
    'ducati': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/ducati/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/ducati/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/ducati/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/ducati/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/ducati/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/ducati/models/car6.png` }],
    
    'hondaM': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/hondaM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/hondaM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/hondaM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/hondaM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/hondaM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/hondaM/models/car6.png` }],
    
    'kawasaki': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/kawasaki/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/kawasaki/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/kawasaki/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/kawasaki/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/kawasaki/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/kawasaki/models/car6.png` }],
    
    'ktm': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/ktm/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/ktm/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/ktm/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/ktm/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/ktm/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/ktm/models/car6.png` }],
    
    'kymco': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/kymco/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/kymco/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/kymco/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/kymco/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/kymco/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/kymco/models/car6.png` }],
    
    'peugeotM': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/peugeotM/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/peugeotM/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/peugeotM/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/peugeotM/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/peugeotM/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/peugeotM/models/car6.png` }],

    'piaggio': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/piaggio/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/piaggio/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/piaggio/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/piaggio/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/piaggio/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/piaggio/models/car6.png` }],

    'suzuki': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/suzuki/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/suzuki/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/suzuki/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/suzuki/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/suzuki/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/suzuki/models/car6.png` }],

    'sym': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/sym/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/sym/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/sym/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/sym/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/sym/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/sym/models/car6.png` }],

    'yamaha': [{ model: 'Serie 1', hp: '150hp', price: '10.000€', srcRute: `photos/yamaha/models/car1.png` },
    { model: 'Serie 1', hp: '150hp', price: '25.000€', srcRute: `photos/yamaha/models/car2.png` },
    { model: 'Serie 1', hp: '150hp', price: '19.000€', srcRute: `photos/yamaha/models/car3.png` },
    { model: 'Serie 1', hp: '150hp', price: '5.000€', srcRute: `photos/yamaha/models/car4.png` },
    { model: 'Serie 1', hp: '150hp', price: '16.000€', srcRute: `photos/yamaha/models/car5.png` },
    { model: 'Serie 1', hp: '150hp', price: '20.000€', srcRute: `photos/yamaha/models/car6.png` }],
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
    carLogo.src = `photos/${actualBrand}/logo_${actualBrand}.png`

}