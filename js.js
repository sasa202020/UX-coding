function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {   // call for map
    center: {lat: 55.45802, lng: 12.18214},
    zoom: 12,
    mapId: '86ad4126f5ea124b'
    });
    const markers = [                                    //adding array of markers
      "Test title0",
      55.45802,
      12.18214,
      "/pics/bluepinpoint.png",
      28,
      43
    ];

      for(let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

      }

    const marker = new google.maps.Marker({              // adding marker
      position: { lat: 55.45802, lng: 12.18214 },
      map,
      title: "Test title0",
      icon: {
        url: "/pics/bluepinpoint.png",
        scaledSize: new google.maps.Size(28, 43)
      },
      animation: google.maps.Animation.DROP   //just for test better for delete i think
    });
    const infowindow = new google.maps.InfoWindow({      //adding info window
      content: "insert content for location insert content for location insert content for location ",
    });
    marker.addListener("click", () =>{          // call for opening info window
      infowindow.open(map,marker);
    });
}


