[⬅ Step 07](Step07.md) | [🏠 HOME](../README.md) | [Step 09 ➡](Step09.md)

# Step 08

Now, let's create a custom button that you can use to add markers on your map.

Again, let's create a new HTML element, give an id to it, and position it on our map:

Place this HTML element anywhere in your HTML code.

```
<button class="control" id="control-two">
  Add marker
</button>
```

Now, let's add an click event listener to our new element, and make sure every time our button, a toggle will be turned switched, to set our map to "add marker" mode.

```
const btn2 = document.getElementById(
  'control-two'
) as HTMLButtonElement;

map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(btn2);

let markerEnabled = false;

btn2.addEventListener('click', () => {
  markerEnabled = !markerEnabled;
});

```

Now, we need to tell our map to listen for clicks, and add a marker on the clicked location.

Notice how it will only add a new map on our map if the "markerEnabled" toggle is on.

```
google.maps.event.addListener(map, 'click', (event) => {
  if (markerEnabled) {
    new google.maps.Marker({
      position: event.latLng,
      map,
      title: 'Hi there!',
    });
  }
});
```

That way, you added a custonm interaction control to your map.

Google maps offers a wide range of "drawing" interactions in its drawing library. We can add the drawing library to our map's loader like this:

```
const loader = new Loader({
  apiKey: 'YOUR_API_KEY',
  version: 'weekly',
  libraries: ['places', 'drawing'],
});
```

And then, we can add a drawing manager to our map, like this:

````
const drawingManager = new google.maps.drawing.DrawingManager({
  drawingMode: null,
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER,
  },
});
drawingManager.setMap(map);
 ```

Now if you look at your map, you will see a number of drawing controls.

You can start drawing shapes on your map! :) If you want to save these shapes, you will need to create a data layer, but we will not get into that, now.

You can read more in the [documentation](https://developers.google.com/maps/documentation/javascript/reference/3.48/data?hl=en).

[⬅ Step 07](Step07.md) | [🏠 HOME](../README.md) | [Step 09 ➡](Step09.md)

