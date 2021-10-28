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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -22.3586012, lng: -47.392323 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}



