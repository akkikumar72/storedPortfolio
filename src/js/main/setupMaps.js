// ------------------------------
// SETUP MAP : GOOGLE MAP
/*
    custom map with google api
    check out the link below for more information about api usage
    https://developers.google.com/maps/documentaztion/javascript/examples/marker-simple

*/
function setupMap() {

    var mapCanvas = $('#map-canvas');

    if(mapCanvas.length) {
        var latitude = mapCanvas.data("latitude");
        var longitude = mapCanvas.data("longitude");
        var zoom = mapCanvas.data("zoom");
        var marker_image = mapCanvas.data("marker-image");

        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {

            // How zoomed in you want the map to start at (always required)
            zoom: zoom,

            // disable zoom controls
            disableDefaultUI: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(latitude,longitude),

            // How you would like to style the map.
            // custom map styles from : https://snazzymaps.com/
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map-canvas');
        //var mapElement = $('#map-canvas');
        //var myLatlng = new google.maps.LatLng(mapElement.data("latitude"),mapElement.data("longitude"));

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        //CREATE A CUSTOM PIN ICON
        var marker_image = marker_image;
        var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(120, 90));

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude,longitude),
            map: map,
            icon: pinIcon,
            title: 'Hey, I am here'
        });
    }

}
// ------------------------------
