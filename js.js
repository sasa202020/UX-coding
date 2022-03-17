function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.45802, lng: 12.18214},
    zoom: 12,
    mapId: '86ad4126f5ea124b'
    });
    const marker = new google.maps.Marker({
      position: { lat: 55.45802, lng: 12.18214 },
      map,
      title: "Test title",
      icon: {
        url: "/pics/bluepinpoint.png",
        scaledSize: new google.maps.Size(28, 43)
      }
    });
}


