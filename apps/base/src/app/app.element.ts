import { Loader } from '@googlemaps/js-api-loader';
import './app.element.css';
import * as mapStyle from '../assets/map-style.json';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  connectedCallback() {
    const loader = new Loader({
      apiKey: 'AIzaSyAd1OipGv5JfLsgmMFpXXxnUEcf4Lth8yM',
      version: 'weekly',
      libraries: ['places', 'drawing'],
    });

    loader
      .load()
      .then((google) => {
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

        const map = new google.maps.Map(
          document.getElementById('map'),
          mapOptions
        );

        const styledMapType = new google.maps.StyledMapType(mapStyle, {
          name: 'My Style',
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        const btn = document.getElementById('control-one') as HTMLButtonElement;
        const btn2 = document.getElementById(
          'control-two'
        ) as HTMLButtonElement;
        const sample = document.getElementById('sample') as HTMLDivElement;

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(btn);
        map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(btn2);
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(sample);

        let markerEnabled = false;

        btn.addEventListener('click', () => {
          map.setZoom(8);
          map.setCenter({ lat: 37.7749, lng: 23 });
        });

        btn2.addEventListener('click', () => {
          markerEnabled = !markerEnabled;
        });

        google.maps.event.addListener(map, 'click', (event) => {
          if (markerEnabled) {
            new google.maps.Marker({
              position: event.latLng,
              map,
              title: 'Hi there!',
            });
          }
        });

        const drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: null,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
          },
        });
        drawingManager.setMap(map);
      })
      .catch((e) => {
        // do something
      });

    this.innerHTML = `
      <div id="map"></div>
      <button class="control" id="control-one"> 
        Show Greece
      </button>
      <button class="control" id="control-two">
        Add marker
      </button>
      <div id="sample">
        <p>Here we could add a legend, or a description of our map, or our social links, or anything else you want.
        It's just an HTML element placed on our map
      </div>
      `;
  }
}

customElements.define('my-map-root', AppElement);
