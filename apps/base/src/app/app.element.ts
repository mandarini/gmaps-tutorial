import { Loader } from '@googlemaps/js-api-loader';
import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  connectedCallback() {
    const loader = new Loader({
      apiKey: 'AIzaSyAd1OipGv5JfLsgmMFpXXxnUEcf4Lth8yM',
      version: 'weekly',
      libraries: ['places'],
    });

    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
      mapId: 'IDd660c40670540313',
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
