var hotel= {
    name: "Rui Plaza España",
    location:"Calle Gran Vía, 84, Centro de Madrid, 28013 Madrid, España",
    img:"https://z.cdrst.com/foto/hotel-sf/c0380/granderesp/riu-plaza-espana-exterior-a69344a.jpg",
};


document.getElementById('name-hotel').innerHTML = "Hotel " + hotel.name;
document.getElementById('location-hotel').innerHTML = "Ubicado en " + hotel.location;
document.getElementById('img-hotel').src = hotel.img;

var puntua = prompt("¿Cuál es la puntuación que le das al hotel?");
document.getElementById('puntuacion').innerHTML = puntua + " estrellas";

var anonimo = confirm("¿Quieres que tu reseña sea anónima?");
document.getElementById('anonima').checked = anonimo;