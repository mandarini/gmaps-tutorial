[⬅ Step 06](Step06.md) | [🏠 HOME](../README.md) | [Step 08 ➡](Step08.md)

# Step 07

Now, as we said, we can place HTML elements on our map. We can make these elements into buttons, and have them act like controls, editing settings and options of our map.

Let's create a new HTML element, give an id to it, and position it on our map:

Place this HTML element anywhere in your HTML code.

```
      <button class="control" id="control-one">
        Show Greece
      </button>
```

Now, let's add an click event listener to our new element, and make sure every time our button is clicked, our map pans to Greece, and sets the Zoom level to 8.

```
const btn = document.getElementById('control-one') as HTMLButtonElement;
btn.addEventListener('click', () => {
  map.setZoom(8);
  map.setCenter({ lat: 37.7749, lng: 23 });
});
```

And finally let's add our new control to our map:

```
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(btn);
```

[⬅ Step 06](Step06.md) | [🏠 HOME](../README.md) | [Step 08 ➡](Step08.md)
