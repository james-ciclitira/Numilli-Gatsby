var placeid_json = [{
  "placeid": 'ChIJmQJIxlVYwokRLgeuocVOGVU',
}, {
  "placeid": 'ChIJIQBpAG2ahYAR_6128GcTUEo',
}, {
  "placeid": 'ChIJW-T2Wt7Gt4kRKl2I1CJFUsI',
}, {
  "placeid": 'ChIJE9on3F3HwoAR9AhGJW_fL-I',
}, {
  "placeid": 'ChIJS5dFe_cZTIYRj2dH9qSb7Lk',
},
 {
  "placeid": 'ChIJS5dFe_cZTIYRj2dH9qSb7Lk',
},
  {
  "placeid": 'ChIJiextKI1ZwokRKTNKS2BGVRs',
}, {
  "placeid": 'ChIJIQBpAG2ahYAR_6128GcTUEo',
}, {
  "placeid": 'ChIJK9LmoS5BE4cRE2vo9ZLrjkE',
}, {
  "placeid": 'ChIJlxwyhIVbwokR9g81z_Ued-A',
}];

var openedInfoWindow = null;
function initialize() {
  var latitude = 41.036895,
    longitude = -88.242188,
    radius = 0,
    center = new google.maps.LatLng(latitude, longitude),
    mapOptions = {
      center: center,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  setMarkers(center, radius, map);
}

function setMarkers(center, radius, map) {

  var json = placeid_json;
  for (var i = 0, length = json.length; i < length; i++) {
    var data = json[i];
    createMarker(data, map);
  }
}

function createMarker(data, map) {
  var service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: data.placeid
  }, function(result, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: data.placeid,
        location: result.geometry.location,
      }
      //position: result.geometry.location
    });
    infoBox(map, marker, data, result);
  });

}

function infoBox(map, marker, data, result) {
  var infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListener(marker, "click", function(e) {

    infoWindow.setContent(data.content);
    infoWindow.open(map, marker);
  });

  (function(marker, data) {
    google.maps.event.addListener(marker, "click", function(e) {
      infoWindow.setContent(result.name);
      infoWindow.open(map, marker);
    });
  })(marker, data);
}

google.maps.event.addDomListener(window, 'load', initialize);