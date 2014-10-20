
var saveOnMeatsLatlng = new google.maps.LatLng(-34.397, 150.644);
var vancouverLatlng = new google.maps.LatLng(49.2500, -123.1000); 


function initialize() {
  var mapOptions = {
    center: myLatlng,
    zoom: 8
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// locations

    var saveOnMeats = new google.maps.Marker({
      map: map,
      position: saveOnMeatsLatlng,
      draggable: true,
      clickable: true,
      animation: google.maps.Animation.DROP,
      title: 'This is me!'
    });

    var vancouver = new google.maps.Marker({
      map: map,
      position: vancouverLatlng,
      draggable: true,
      clickable: true,
      animation: google.maps.Animation.DROP,
      title: 'This is me!'
    });
    

    // info window using googles InfoWindow (includes listener)
    var infoContent =  "<div id='content'>"+
      '<div> sup yo</div>';
    var infowindow = new google.maps.InfoWindow({
      content: infoContent
    });
    google.maps.event.addListener(vancouver, 'click', function() {
    infowindow.open(map,vancouver);
    });
  


    // bounce function to toggle bounce as well as shut it off with the set timeout!
    function toggleBounce(){
      if (vancouver.getAnimation() != null) {
        vancouver.setAnimation(null);
      } else {
        vancouver.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {vancouver.setAnimation(google.maps.Animation.Bounce)}, 5000);
      }
    }
     google.maps.event.addListener(vancouver, 'click', toggleBounce);



};



google.maps.event.addDomListener(window, 'load', initialize);
