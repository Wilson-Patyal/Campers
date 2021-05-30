let a = localStorage.getItem('coordinates')
let title = localStorage.getItem('title');
let loc = localStorage.getItem('location');
let b = a.split(',');

mapboxgl.accessToken = mapToken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
    center: b, // starting position [lng, lat]
    zoom: 8// starting zoom
})
map.addControl(new mapboxgl.NavigationControl())


new mapboxgl.Marker()
    .setLngLat(b)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${title}</h3><p>${loc}</p>`
            )
    )
    .addTo(map)

