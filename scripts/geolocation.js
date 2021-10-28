// window.onload = async () => {

//     const getCoords = async () => {
//             const pos = await new Promise((resolve, reject) => {
//               navigator.geolocation.getCurrentPosition(resolve, reject);
//             });
        
//             return {
//               long: pos.coords.longitude,
//               lat: pos.coords.latitude,
//             };
//         };
    
//     const coords = await getCoords();
//     console.log(coords)
//     }
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem('latitude', JSON.stringify(position.coords.latitude))
        localStorage.setItem('longitude', JSON.stringify(position.coords.longitude))
        }, 
        (error) => console.log(error), 
        {
            enableHighAccuracy:true,
            timeout: 5000
        })
}

var map;
var directionsDisplay, directionsService;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: JSON.parse(localStorage.getItem('latitude')), lng: JSON.parse(localStorage.getItem('longitude')) },
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: { lat: JSON.parse(localStorage.getItem('latitude')), lng: JSON.parse(localStorage.getItem('longitude')) },
    map: map,
  });
}
initMap()



