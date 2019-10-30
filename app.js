var options = {
  componentRestrictions: {
    country: "ph"
  },
  types: ["geocode"]
};

function initialize() {
  var input = document.getElementById("address");
  var autocomplete = new google.maps.places.Autocomplete(input, options);

  google.maps.event.addListener(autocomplete, "place_changed", function() {
    var place = autocomplete.getPlace();
    // document.getElementById("city2").value = place.name;
    document.getElementById("lat").innerHTML = place.geometry.location.lat();
    document.getElementById("lng").innerHTML = place.geometry.location.lng();

    var coordinates = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: "Click to zoom"
    });
  });
}
