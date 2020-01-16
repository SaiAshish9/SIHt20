// import $ from 'jquery'
//
// import MapboxClient from 'mapbox'
//
//
//
//
// $(document).ready(function(){
//
//
//   var accessToken = 'pk.eyJ1Ijoic2FpYXNoaXNoIiwiYSI6ImNrMWdyNTc4cjA3dzEzb2sxaTlrdzFiOHoifQ.B1JQ-8A43BNcL-0kMxO9Bg';
//
//   var mapboxClient =new MapboxClient(accessToken)
//
//   mapboxClient.geocodeForward({
//   query:'janakpuri,delhi'})
//   .send()
//   .then(function (response) {
//   if (response && response.body && response.body.features && response.body.features.length) {
//   var feature = response.body.features[0];
//   var mapboxClient =new MapboxClient(accessToken)
//
//   var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: feature.center,
//   zoom: 10
//   });
//   new mapboxgl.Marker()
//   .setLngLat(feature.center)
//   .addTo(map);
//
//   new mapboxgl.Popup({
//     offset: 30
//   })
//     .setLngLat(feature.center)
//     .setHTML('<i style="color: #06D85F;" class="fa fa-users" aria-hidden="true"></i>')
//     .addTo(map);
//     var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// });
//     document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
//   map.addControl(new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   trackUserLocation: true
//   }));
//
// }})
//
//
// })
