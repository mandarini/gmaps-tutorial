[⬅ Step 04](Step04.md) | [🏠 HOME](../README.md) | [Step 06 ➡](Step06.md)

# Step 05

Now, let's see how we can add our own custom styles, manually, with code, on our map.

## Create a JSON file with our custom styles

Create a new file in `apps/base/src/assets` called `map-style.json`. In there, you can create a JSON file with all the custom style settings you want.

You can see the reference for that:

- [https://developers.google.com/maps/documentation/javascript/style-reference](https://developers.google.com/maps/documentation/javascript/style-reference)

You can start with this:

```
[
  {
    "featureType": "all",
    "stylers": [
      { "color": "#C0C0C0" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#CCFFFF" }
    ]
  },{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
]
```

and build up from there.

## Add the style to your map

1. Import the file to your `apps/base/src/app/app.element.ts` file:

```
import * as mapStyle from '../assets/map-style.json';
```

2. Add `resolveJsonModule` to your compiler options in `apps/base/tsconfig.app.json`, just to be able to import that `json` file above:

```
"compilerOptions": {
  "resolveJsonModule": true
  ...
}
```

3. Add the style to your map like this:

```
const styledMapType = new google.maps.StyledMapType(mapStyle, {
  name: 'My Style',
});
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
```

4. Oops, make sure you put your map in `map` const, so that we can use it:

```
const map = new google.maps.Map(
  document.getElementById('map'),
  mapOptions
);
```

## Add the map control options to your map

```
const mapOptions = {
...
mapTypeControlOptions: {
  mapTypeIds: [
    'roadmap',
    'satellite',
    'hybrid',
    'terrain',
    'styled_map',
  ],
},
...
```

What's that? Let's take a look at the [documentation](https://developers.google.com/maps/documentation/javascript/reference/control#MapTypeControlOptions).

It's the controls you can add on your map. And the `mapTypeIds` is the list of map types you want to show on the map, which you can find [here](https://developers.google.com/maps/documentation/javascript/reference/map#MapTypeId).

[⬅ Step 04](Step04.md) | [🏠 HOME](../README.md) | [Step 06 ➡](Step06.md)
