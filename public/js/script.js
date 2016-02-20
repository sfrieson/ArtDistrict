console.log('mapatttackkkk');

$(function() {
  initMap(initMapOptions);
  setSubmitHandler();
});

var initMapOptions = {
  center: {
    lat: 40.678,
    lng: -73.965
  },
  scrollwheel: false,
  zoom: 15
};

var map, heatmap;

// initial map options
function initMap(mapOptions) {

  map = new google.maps.Map(document.getElementById('map'), mapOptions)
  map.mapTypes.set(customMapTypeId, mapStyle);
  map.setMapTypeId(customMapTypeId);

  newHeatMap();
}

// styles gradient
function changeGradient() {
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

// random points for now, will be ajax call eventually
function getPoints() {
  var heatPointArray = [];
  for (i = 0; i < 1000; i++) {
    lat = 40.678 + Math.random() * 0.01
    lng = -73.965 + Math.random() * 0.01
    heatPointArray.push(new google.maps.LatLng(lat, lng))
  }
  return heatPointArray;
}

// this will, update the heatpoints
function setSubmitHandler() {
  $('#submit').click(function(e) {
    e.preventDefault();
    newHeatMap();
  });
}

// this clears out the old heatmap and renders a new one.  eventually will be based on new data.
function newHeatMap() {
  if (heatmap) {
    heatmap.setMap(null);
  }
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
  changeGradient();
}
