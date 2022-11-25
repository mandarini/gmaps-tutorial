[⬅ Step 00](Step00.md) | [🏠 HOME](../README.md) | [Step 01 ➡](Step01.md)

# Step 02

Change the contents of `apps/base/src/app/app.element.ts` to:

```ts
import { Loader } from '@googlemaps/js-api-loader';
import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const loader = new Loader({
      apiKey: '<YOUR_API_KEY>',
      version: 'weekly',
      libraries: ['places'],
    });

    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    };

    loader
      .load()
      .then((google) => {
        new google.maps.Map(document.getElementById('map'), mapOptions);
      })
      .catch((e) => {
        // do something
      });
    this.innerHTML = `
     <div id="map"></div>
     `;
  }
}
customElements.define('gmaps-demo-root', AppElement);
```

Change the contents of `apps/base/src/app/app.element.css` to:

```css
#map {
  height: 100vh;
  width: 100vw;
}
```

Change the contents of `apps/base/src/styles.css` to:

```css
body {
  margin: 0;
  padding: 0;
}
```

[⬅ Step 00](Step00.md) | [🏠 HOME](../README.md) | [Step 01 ➡](Step01.md)
