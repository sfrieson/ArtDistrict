console.log('mapatttackkkk');

$(function() {
  initMap(initMapOptions);
});

var initMapOptions = {
  center: {
    lat: 40.732784,
    lng: -73.975941
  },
  scrollwheel: false,
  zoom: 13
};

function initMap(mapOptions) {

  var map = new google.maps.Map(document.getElementById('map'), initMapOptions)
  map.mapTypes.set(customMapTypeId, mapStyle);
  map.setMapTypeId(customMapTypeId);
}
