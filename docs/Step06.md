[⬅ Step 05](Step05.md) | [🏠 HOME](../README.md) | [Step 07 ➡](Step07.md)

# Step 06

Now, let's move our controls around. Let's adjust their location on the map, and make our own!

The `google.maps.Map` class offers a `controls` attribute, where we can pass HTML elements (YES THAT'S RIGHT) and position them on our map, neatly. No need to fall into css absolute positioning or anything else you though of. We can just pass the elements we want to position on the map, and the map will do the rest.

Example:

```
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(<MY BUTTON>);
map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(<MY HTML ELEMENT MAYBE A LEGEND>);
```

You can also similarly adjust the position of the native controls, like the zoom control, the map type control, the scale control, the street view control, the rotate control, the fullscreen control, and the attribution control.

Example:

```
zoomControlOptions: {
  position: google.maps.ControlPosition.RIGHT_BOTTOM,
},
```

You can see the available positions [here](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning).

Now, adjust the location of some of your native controls. In the next step we will create a custom control.

Example of your Google Maps Options:

```
     const mapOptions: google.maps.MapOptions = {
          center: {
            lat: 0,
            lng: 0,
          },
          zoom: 4,
          scrollwheel: true,
          panControl: false,
          mapTypeControl: true,
          zoomControl: true,
          streetViewControl: false,
          scaleControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
          },
          mapTypeControlOptions: {
            mapTypeIds: [
              'roadmap',
              'satellite',
              'hybrid',
              'terrain',
              'styled_map',
            ],
            position: google.maps.ControlPosition.TOP_LEFT,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          },
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
          },
        };
```

Notice how you can change the style of the map type control, as well.

[⬅ Step 05](Step05.md) | [🏠 HOME](../README.md) | [Step 07 ➡](Step07.md)
