import { Loader } from '@googlemaps/js-api-loader';
import './app.element.css';
import * as mapStyle from '../assets/map-style.json';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  connectedCallback() {
    const loader = new Loader({
      apiKey: 'AIzaSyAd1OipGv5JfLsgmMFpXXxnUEcf4Lth8yM',
      version: 'weekly',
      libraries: ['places'],
    });

    loader
      .load()
      .then((google) => {
        const mapOptions = {
          center: {
            lat: 0,
            lng: 0,
          },
          zoom: 4,
          mapTypeControlOptions: {
            mapTypeIds: [
              'roadmap',
              'satellite',
              'hybrid',
              'terrain',
              'styled_map',
            ],
          },
        };
        const map = new google.maps.Map(
          document.getElementById('map'),
          mapOptions
        );

        const styledMapType = new google.maps.StyledMapType(mapStyle, {
          name: 'My Style',
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        const btn = document.getElementById('control-one') as HTMLImageElement;
        btn.addEventListener('click', () => {
          map.setZoom(8);
          map.setCenter({ lat: 37.7749, lng: 23 });
        });

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(btn);
      })
      .catch((e) => {
        // do something
      });

    this.innerHTML = `
      <div id="map"></div>
      <button class="control" id="control-one"> 
        Show Greece
      </button>
      `;
  }
}
customElements.define('my-map-root', AppElement);
