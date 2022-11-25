import { Loader } from '@googlemaps/js-api-loader';
import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  connectedCallback() {
    const loader = new Loader({
      apiKey: 'AIzaSyC_RJdbJwQDj9n5NNrvU8xwUFIWQzejYEk',
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
customElements.define('my-map-root', AppElement);
