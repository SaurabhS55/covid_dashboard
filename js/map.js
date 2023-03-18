mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1cmFiaDU1NSIsImEiOiJjbGZkaWFlcmcydGdzNDBvNGtpZGtlZnFqIn0.7TcFB6JB4ytek3xXGYTYGg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        zoom: 1.5,
        center: [30, 50],
        projection: 'globe'
    });

    map.on('load', () => {
        // Set the default atmosphere style
        map.setFog({});
    });