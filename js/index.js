

function initMap() {
    var LosAngeles = {
        lat: 29.951065, 
        lng: -90.071533
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: LosAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
}