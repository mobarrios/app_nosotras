import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
//import * as mapboxgl from 'mapbox-gl';
import { Platform } from '@ionic/angular';
import { ConnectService } from '../connect.service';

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker,
//   Environment
// } from '@ionic-native/google-maps';


declare var google;



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit {

//map: mapboxgl.Map;
// marker: mapboxgl.Marker;

lat = -34.8215061;
lon = -58.4747831;
data: any[] = [];

tipos:any[] = [];

// map: GoogleMap;


  map;
  @ViewChild('mapElement',null) mapElement;

  constructor(
    private platform: Platform,
    private connectS: ConnectService
    ) {
    // mapboxgl.accessToken = 'pk.eyJ1IjoibW9iYXJyaW9zIiwiYSI6ImNqdXg3YTlsYzAwMm00MG8wOGdwZjY2NnEifQ.GLzsC9lze867YtvXJ7lgWQ';

    this.connectS.get('getSitesTipo').subscribe(data=>{
      this.tipos = data['results'];
      //console.log(data);
    });
  }

  ngAfterContentInit(): void {  


     this.connectS.get('getSites').subscribe( data => {
       this.data = data['results'];     
       this.showMap();
      });


    



    // const mk1 = new google.maps.Marker({
    //   position: {lat : -34.8120142, lng: -58.4722407},
    //   label: 'Com. de la mujer',
    //   map: this.map
    // });

    // const mk2 = new google.maps.Marker({
    //   position: {lat : -34.8132134, lng: -58.4657345},
    //   label: 'Juzgado de Paz',
    //   map: this.map
    // });

    // const mk3 = new google.maps.Marker({
    //   position: {lat : -34.8244848, lng: -58.4792054},
    //   label: 'Defensoría Civil N° 10',
    //   map: this.map
    // });


    // const mk4 = new google.maps.Marker({
    //   position: {lat : -34.8389994, lng: -58.475143},
    //   label: 'CPA',
    //   map: this.map
    // });

    // const mk5 = new google.maps.Marker({
    //   position: {lat :  -34.8139667, lng: -58.4615266},
    //   label: 'Policlínico Municipal',
    //   map: this.map
    // });


    // const mk6 = new google.maps.Marker({
    //   position: {lat : -34.8190076, lng: -58.4687796},
    //   label: 'Sec. de Pol. Sociales',
    //   map: this.map
    // });
    
    // const mk7 = new google.maps.Marker({
    //   position: {lat : -34.8357033, lng: -58.4635009},
    //   label: 'Servicio Local de Mte. Gde',
    //   map: this.map
    // });
    // const mk8 = new google.maps.Marker({
    //   position: {lat : -34.8528328, lng: -58.4802092},
    //   label: 'Serv. Local de El Jagüel',
    //   map: this.map
    // });
    // const mk9 = new google.maps.Marker({
    //   position: {lat : -34.7798103, lng: -58.514771},
    //   label: 'Serv. local de 9 de Abril',
    //   map: this.map
    // });
    // const mk10 = new google.maps.Marker({
    //   position: {lat : -34.8120142, lng: -58.4722407},
    //   label: 'Serv. Local de Luis Guillón',
    //   map: this.map
    // });
    // const mk11 = new google.maps.Marker({
    //   position: {lat : -34.8187979, lng: -58.46769},
    //   label: 'Dir. de Pol. de Género',
    //   map: this.map
    // });
  }


  categoria(cat: any) {

    for (let i = 0 ; i < this.data.length; i++) {
      if(this.data[i].sites_tipo_id == cat){
        console.log(cat);
          const mk = new google.maps.Marker({
            position: { lat : Number(this.data[i].lat), lng: Number(this.data[i].long) },
            label: this.data[i].title,
            map: this.map
          });
      }
    }

    // if (cat == 'seguridad') {

      //  this.showMap();

      // const mk1 = new google.maps.Marker({
      // position: {lat : -34.8120142, lng: -58.4722407},
      // label: 'Com. de la mujer',
      // map: this.map
      // });

    // } else if ( cat == 'justicia') {

    //   this.showMap();

    //   const mk2 = new google.maps.Marker({
    //     position: {lat : -34.8132134, lng: -58.4657345},
    //     label: 'Juzgado de Paz',
    //     map: this.map
    //   });

    //   const mk3 = new google.maps.Marker({
    //     position: {lat : -34.8244848, lng: -58.4792054},
    //     label: 'Defensoría Civil N° 10',
    //     map: this.map
    //   });

    // } else if (cat == 'salud') {

    //   this.showMap();

    //   const mk4 = new google.maps.Marker({
    //   position: {lat : -34.8389994, lng: -58.475143},
    //   label: 'CPA',
    //   map: this.map
    //   });

    //   const mk5 = new google.maps.Marker({
    //   position: {lat :  -34.8139667, lng: -58.4615266},
    //   label: 'Policlínico Municipal',
    //   map: this.map
    //   });


    //   const mk6 = new google.maps.Marker({
    //   position: {lat : -34.8190076, lng: -58.4687796},
    //   label: 'Sec. de Pol. Sociales',
    //   map: this.map
    //   });

    //   const mk7 = new google.maps.Marker({
    //   position: {lat : -34.8357033, lng: -58.4635009},
    //   label: 'Servicio Local de Mte. Gde',
    //   map: this.map
    //   });
    //   const mk8 = new google.maps.Marker({
    //   position: {lat : -34.8528328, lng: -58.4802092},
    //   label: 'Serv. Local de El Jagüel',
    //   map: this.map
    //   });
    //   const mk9 = new google.maps.Marker({
    //   position: {lat : -34.7798103, lng: -58.514771},
    //   label: 'Serv. local de 9 de Abril',
    //   map: this.map
    //   });
    //   const mk10 = new google.maps.Marker({
    //   position: {lat : -34.8120142, lng: -58.4722407},
    //   label: 'Serv. Local de Luis Guillón',
    //   map: this.map
    //   });

    // } else if (cat == 'genero') {

    //   this.showMap();

    //   const mk11 = new google.maps.Marker({
    //   position: {lat : -34.8187979, lng: -58.46769},
    //   label: 'Dir. de Pol. de Género',
    //   map: this.map
    //    });

    // }

  }

  showMap() {


    const pos = new google.maps.LatLng(this.lat, this.lon);

    this.map = new google.maps.Map(
    this.mapElement.nativeElement,
    {
      center: {lat: this.lat , lng: this.lon},
      zoom: 13
    });



  }

  markers() {

    const markers = [{
      position: {lat : -34.8120142, lng: -58.4722407},
      label: 'Com. de la mujer',
      map: this.map
    }];

    return markers;
  }


    ngOnInit() {


  //   const m = new mapboxgl.Map({
  //     container : 'map',
  //     style: 'mapbox://styles/mapbox/light-v10',
  // center: [this.lat, this.lon],
  // zoom: 3
  //   });

    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [{
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [this.lon, this.lat]
    //     },
    //     properties: {
    //       title: 'Mapbox',
    //       description: 'Washington, D.C.'
    //     }
    //   },
    //   {
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [-122.414, 37.776]
    //     },
    //     properties: {
    //       title: 'Mapbox',
    //       description: 'San Francisco, California'
    //     }
    //   }]
    // };

    // m.on('load', () => {
    //   m.addLayer(
    //   {
    //     id: 'points',
    //     source: {
    //       type: 'geojson',
    //       data: {
    //         type: "FeatureCollection",
    //         features: [
    //           {
    //             "type": "Feature",
    //             "properties": {
    //               "marker-color": "#7e7e7e",
    //               "marker-size": "medium",
    //               "marker-title": "dasdas"
    //             },
    //             "geometry": {
    //               "type": "Point",
    //               "coordinates": [
    //                 -58.36304426193237,
    //                 -34.60766084789814
    //               ]
    //             }
    //           }
    //         ]
    //       }
    //   }      });
    // });

   }


   
  
}
