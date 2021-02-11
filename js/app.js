// var hotel= {
//     name: "Rui Plaza España",
//     location:"Calle Gran Vía, 84, Centro de Madrid, 28013 Madrid, España",
//     img:"https://z.cdrst.com/foto/hotel-sf/c0380/granderesp/riu-plaza-espana-exterior-a69344a.jpg",
// };

// document.getElementById('name-hotel').innerHTML = "Hotel " + hotel.name;
// document.getElementById('location-hotel').innerHTML = "Ubicado en " + hotel.location;
// document.getElementById('img-hotel').src = hotel.img;

// var puntua = prompt("¿Cuál es la puntuación que le das al hotel?");
// document.getElementById('puntuacion').innerHTML = puntua + " estrellas";


//Opcionales

var hoteles = {
    Rui: {
    name: "Rui Plaza España",
    location:"Calle Gran Vía, 84, Centro de Madrid, 28013 Madrid, España",
    img:"https://z.cdrst.com/foto/hotel-sf/c0380/granderesp/riu-plaza-espana-exterior-a69344a.jpg",
},
    Vincci : {
    name: "Vincci Capitol",
    location: "Gran Vía, 41, Centro de Madrid, 28013 Madrid, España",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMVzAvuJ-gy8UHfJXrxVnYeV7oZkvUAuDfw&usqp=CAU",
},
    Eurostars : {
        name: "Eurostars Madrid Tower",
        location: "Castellana, 259B, Fuencarral - El Pardo, 28046 Madrid, España",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2pjmTQpFNFi5oi_XVrfbpD2R1wsUv5hSfA&usqp=CAU"
    },   
    
};

var eleccion = prompt("¿Que hotel quiere puntuar? Vincci, Rui o Eurostars");
document.getElementById('name-hotel').innerHTML = "Hotel " +hoteles[eleccion].name;
document.getElementById('location-hotel').innerHTML = "Ubicando en " + hoteles[eleccion].location;
document.getElementById('img-hotel').src = hoteles[eleccion].img;

var estrellas = {
    1 : "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2 : "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3 : "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4 : "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5 : "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var estrella = prompt("¿Cuál es tu puntuación del hotel "+ eleccion +"?");
document.getElementById('puntuacion').innerHTML = estrellas[estrella];

var anonimo = confirm("¿Quieres que tu reseña sea anónima?");
document.getElementById('anonima').checked = anonimo;