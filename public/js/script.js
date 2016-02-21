 console.log('mapatttackkkk');

 var map, heatmap;

 $(function() {
   enterToggle();
   initMap(initMapOptions);
   setSubmitHandler();
   toggleCategories();
   toggleSubmit();
   setSelectAllButton();
   // setDeselectAllButton();
 });

 var initMapOptions = {
   center: {
     lat: 40.7164175,
     lng: -73.9392051
   },
   scrollwheel: true,
   zoom: 11,
   mapTypeControl: false
 };

 var map, heatmap;

 // initial map options
 function initMap(mapOptions) {

   map = new google.maps.Map(document.getElementById('map'), mapOptions)
   map.mapTypes.set(customMapTypeId, mapStyle);
   map.setMapTypeId(customMapTypeId);

   //  getCategoryHeatPoints();
 }


 // styles gradient
 function changeGradient() {
   heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
 }

 // random points for now, will be ajax call eventually
 function getRandomPoints() {
   var heatPointArray = [];
   for (i = 0; i < 1000; i++) {
     lat = 40.678 + Math.random() * 0.01
     lng = -73.965 + Math.random() * 0.01
     heatPointArray.push(new google.maps.LatLng(lat, lng))
   }
   return heatPointArray;
 }

 function getCategoryHeatPoints(queries) {
   var j = 0;
   var heatPoints = [];
   queries.forEach(function(query) {
     $.ajax({
       method: 'get',
       url: '/businesses/' + query,
       success: function(response) {
         var businesses = response.businesses
         for (i = 0; i < businesses.length; i++) {
           var lat = businesses[i].lat;
           var lng = businesses[i].lon;
           heatPoints.push(new google.maps.LatLng(lat, lng))
         }
         j++;
         if (j === queries.length) {
           newHeatMap(heatPoints);
         }
       }
     });
   })
 }

 function getFormValues(form) {
   var checkedBoxes = $(form).parent().children('input.category:checked');
   var values = [];
   checkedBoxes.each(function() {
     values.push($(this).val());
   });
   console.log(values);
   return values
 }

 function getTagValues(form) {
   var tagBoxes = $(form).parent().children('input.tag:checked');
   var values = [];
   tagBoxes.each(function() {
     values.push($(this).val());
   });
   return values
 }

 function getTagHeatPoints(tagArray) {
   tags = {
     tags: tagArray
   }
   $.ajax({
     method: 'get',
     url: '/businesses/tags/taco',
     data: tags,
     success: function(response) {
       var heatPoints = [];
       var businesses = response.businesses
       for (var i = 0; i < businesses.length; i++) {
         var lat = businesses[i].lat;
         var lng = businesses[i].lon;
         heatPoints.push(new google.maps.LatLng(lat, lng))
       }
       newHeatMap(heatPoints);
     }
   });
 }

 // this will, update the heatpoints
 function setSubmitHandler() {
   $('#submit').click(function(e) {
     e.preventDefault();
     var tagValues = getTagValues(this);
     if (tagValues.length > 0){
       clearHeatmaps();
       getTagHeatPoints(tagValues);
     } else {
       console.log('You have nothing checked!');
     }
   });
 }

 // this clears out the old heatmap and renders a new one.  eventually will be based on new data.
 function newHeatMap(heatPoints) {
   heatmap = new google.maps.visualization.HeatmapLayer({
     data: heatPoints,
     map: map
   });
 }

 function clearHeatmaps() {
   if (heatmap) {
     heatmap.setMap(null);
   }
 }

 function enterToggle() {
  $('body').on('click', '#enter', function() {
    $('.navbar').css('display', 'block');
    $('.home-page').animate({
      left: '-100%'
    }, 400, function(){
      $('.navbar-right').css('display', 'block');
    });
  })
 }

 function toggleCategories() {
   $('body').on('click', '#select-option', function() {
     if ($('.controls').css('top') === '-104px') {
       $('.controls').animate({
         top: '104px'
       }, 500);
     } else {
       $('.controls').animate({
         top: '-104px'
       }, 500);
     }
   })
 }

 function toggleSubmit() {
   $('body').on('click', '#submit', function() {
     $('.controls').animate({
       top: '-104px'
     }, 500);
   });
 }

 function setSelectAllButton() {
  $('body').on('click', '#select-all', function(e){
    e.preventDefault();
    console.log($('input:checkbox').prop('checked'));
    if($('input:checkbox').prop('checked') === false){
      $('input:checkbox').prop('checked', true);
      $('#select-all').html('deselect all');
    }
    else if($('input:checkbox').prop('checked') === true){
      $('input:checkbox').prop('checked', false);
      $('#select-all').html('select all');
    }
  });
 }

 //
