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
    "visibility": "simplified"
  }, {
    "color": "#5b6571"
  }, {
    "lightness": "35"
  }]
}, {
  "featureType": "administrative.neighborhood",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#f3f4f4"
  }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "geometry",
  "stylers": [{
    "weight": 0.9
  }, {
    "visibility": "off"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#83cead"
  }]
}, {
  "featureType": "road",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#ffffff"
  }]
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#fee379"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "on"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway.controlled_access",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }, {
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels",
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
  "featureType": "water",
  "elementType": "all",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#7fc8ed"
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
