var mapStyle = new google.maps.StyledMapType([{
  "featureType": "all",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }, {
    "color": "#efebe2"
  }]
}, {
  "featureType": "administrative.neighborhood",
  "elementType": "labels.text.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#888888"
  }]
}, {
  "featureType": "administrative.neighborhood",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "off"
  }, {
    "saturation": "0"
  }, {
    "color": "#717171"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi.attraction",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi.business",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi.government",
  "elementType": "all",
  "stylers": [{
    "color": "#dfdcd5"
  }]
}, {
  "featureType": "poi.medical",
  "elementType": "all",
  "stylers": [{
    "color": "#dfdcd5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "all",
  "stylers": [{
    "color": "#bad294"
  }]
}, {
  "featureType": "poi.place_of_worship",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi.school",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "poi.sports_complex",
  "elementType": "all",
  "stylers": [{
    "color": "#efebe2"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }, {
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }, {
    "visibility": "off"
  }, {
    "lightness": "0"
  }, {
    "weight": "1.69"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#fbfbfb"
  }, {
    "visibility": "off"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "transit",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "water",
  "elementType": "all",
  "stylers": [{
    "color": "#a5d7e0"
  }]
}], {
  name: 'Custom Style'
});
var customMapTypeId = 'custom_style';


var gradient = [
  'rgba(0, 0, 0, 0)',
  'rgba(0, 50, 0, 1)',
  'rgba(0, 100, 0, 1)'
  // 'rgba(0, 255, 255, 1)',
  // 'rgba(0, 191, 255, 1)',
  // 'rgba(0, 127, 255, 1)',
  // 'rgba(0, 63, 255, 1)',
  // 'rgba(0, 0, 255, 1)',
  // 'rgba(0, 0, 223, 1)',
  // 'rgba(0, 0, 191, 1)',
  // 'rgba(0, 0, 159, 1)',
  // 'rgba(0, 0, 127, 1)',
  // 'rgba(63, 0, 91, 1)',
  // 'rgba(127, 0, 63, 1)',
  // 'rgba(191, 0, 31, 1)',
  // 'rgba(255, 0, 0, 1)'
];

function gradientMaker() {
  for (i = 0; i < 10; i++) {
    var g = 100 - (i * 10);
    // opacity = i * .1
    var opacity = 1;
    var color = "rgba(0, " + g + ", 0," + opacity + ")";
    gradient.push(color);
    console.log(color);
  }
}

// gradientMaker();
