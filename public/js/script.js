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

var map, heatmap;

function initMap(mapOptions) {

  map = new google.maps.Map(document.getElementById('map'), mapOptions)
  map.mapTypes.set(customMapTypeId, mapStyle);
  map.setMapTypeId(customMapTypeId);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });

}

function changeGradient() {
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function getPoints() {
  var heatPointArray = [];
  for (i = 0; i < 100; i++) {
    lat = 40.678 + Math.random() * 0.01
    lng = -73.965 + Math.random() * 0.01
    heatPointArray.push(new google.maps.LatLng(lat, lng))
  }
  return heatPointArray;
  // return [
  //   new google.maps.LatLng(40.6784471, -73.9653714),
  //   new google.maps.LatLng(40.6784471, -73.9753714),
  //   new google.maps.LatLng(40.6784471, -73.9853714),
  //   new google.maps.LatLng(40.6784471, -73.9953714),
  //   new google.maps.LatLng(40.6784471, -73.9453714),
  //   new google.maps.LatLng(40.6784471, -73.9353714),
  //   new google.maps.LatLng(40.6784471, -73.9253714),
  //   new google.maps.LatLng(40.6784471, -73.9153714),
  //   new google.maps.LatLng(40.6784471, -73.9053714),
  //   new google.maps.LatLng(40.6784471, -73.8953714),
  //   new google.maps.LatLng(40.6784471, -73.8853714),
  //   new google.maps.LatLng(40.6784471, -73.8753714),
  //   new google.maps.LatLng(40.6784471, -73.8653714),
  //   new google.maps.LatLng(40.6784471, -73.8553714),
  //   new google.maps.LatLng(40.6784471, -73.8453714),
  //   new google.maps.LatLng(40.6784471, -73.8353714),
  //   new google.maps.LatLng(40.6784471, -73.8253714),
  //   new google.maps.LatLng(40.6784471, -73.8153714),
  //   new google.maps.LatLng(40.6784471, -73.8053714),
  //   new google.maps.LatLng(40.6784471, -73.7953714),
  //   new google.maps.LatLng(40.6784471, -73.7853714),
  //   new google.maps.LatLng(40.6784471, -73.7753714),
  //   new google.maps.LatLng(40.6784471, -73.7653714),
  //   new google.maps.LatLng(40.6784471, -73.7565371),
  //   new google.maps.LatLng(40.6784471, -73.7453714),
  //   new google.maps.LatLng(40.6784471, -73.7353714)
  // ]
}
