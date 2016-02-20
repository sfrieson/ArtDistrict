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

  var map = new google.maps.Map(document.getElementById('map'), mapOptions)
  map.mapTypes.set(customMapTypeId, mapStyle);
  map.setMapTypeId(customMapTypeId);

  var heatmap = new google.maps.visualization.HeatmapLayer({
  data: getPoints(),
  map: map
});

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function getPoints(){
  return [
    new google.maps.LatLng(40.6784471, -73.9653714),
    new google.maps.LatLng(40.6784471, -73.9753714),
    new google.maps.LatLng(40.6784471, -73.9853714),
    new google.maps.LatLng(40.6784471, -73.9953714),
    new google.maps.LatLng(40.6784471, -73.9453714),
    new google.maps.LatLng(40.6784471, -73.9353714),
    new google.maps.LatLng(40.6784471, -73.9253714),
    new google.maps.LatLng(40.6784471, -73.9153714),
    new google.maps.LatLng(40.6784471, -73.9053714),
    new google.maps.LatLng(40.6784471, -73.8953714),
    new google.maps.LatLng(40.6784471, -73.8853714),
    new google.maps.LatLng(40.6784471, -73.8753714),
    new google.maps.LatLng(40.6784471, -73.8653714),
    new google.maps.LatLng(40.6784471, -73.8553714),
    new google.maps.LatLng(40.6784471, -73.8453714),
    new google.maps.LatLng(40.6784471, -73.8353714),
    new google.maps.LatLng(40.6784471, -73.8253714),
    new google.maps.LatLng(40.6784471, -73.8153714),
    new google.maps.LatLng(40.6784471, -73.8053714),
    new google.maps.LatLng(40.6784471, -73.7953714),
    new google.maps.LatLng(40.6784471, -73.7853714),
    new google.maps.LatLng(40.6784471, -73.7753714),
    new google.maps.LatLng(40.6784471, -73.7653714),
    new google.maps.LatLng(40.6784471, -73.7565371),
    new google.maps.LatLng(40.6784471, -73.7453714),
    new google.maps.LatLng(40.6784471, -73.7353714)
  ]
>>>>>>> adds heatmap basics
}
