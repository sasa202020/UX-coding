





function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {   // call for map
    center: {lat: 55.45802, lng: 12.18214},
    zoom: 12,
    mapId: '86ad4126f5ea124b',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
    });
    const markers = [                                    //adding array of markers
      [
        "Test title0",
      55.45802,
      12.18214,
      "./pics/bluepinpoint.png",
      28,
      43
      ],

      [
        "Køge Svømmeland",
        55.48472451959858,
        12.17600994876877,
        "./pics/bluepinpoint.png",
        28,
        43
      ],

      [
        "Køge Golf Club",
        55.42787041249714,
        12.181131837151261,
        "./pics/bluepinpoint.png",
        28,
        43
      ]
    ];
/* let marker0 = {
  title : "Test title0",
  lat : 55.45802,
  lng : 12.18214,
  url : "./pics/bluepinpoint.png",
}
let marker1 = {
  title : "Køge Svømmeland",
  lat : 55.48472451959858,
  lng : 12.17600994876877,
  url : "./pics/bluepinpoint.png",
} 
let marker1 = {
  title : "Køge Svømmeland",
  lat : 55.48472451959858,
  lng : 12.17600994876877,
  url : "./pics/bluepinpoint.png",
}   */
      for(let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({              // adding marker
          position: { lat: currMarker[1], lng: currMarker[2] },
          map,
          title: currMarker[0],
          icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
          },
          animation: google.maps.Animation.DROP   //just for test better for delete i think
        });
        const infowindow = new google.maps.InfoWindow({      //adding info window
          content: "will insert info after here will insert info after here will insert info after here will insert info after here",
        });
        marker.addListener("click", () =>{          // call for opening info window
          infowindow.open(map,marker);
        });

      }

   
}

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const popup = document.querySelector('.popup')
const main_popup = document.querySelector('.main-popup')

open_btn.addEventListener('click', () => {
  console.log('tets')
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});