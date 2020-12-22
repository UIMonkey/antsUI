import React from 'react';
import L from 'leaflet';

interface IMapProps {
    marker: L.Marker;
    map: L.Map;
}

class Map extends React.Component<IMapProps> {
    private map!: L.Map;
    private layer = new L.LayerGroup();

    static defaultProps: Partial<IMapProps> = {
        marker: L.marker([50.5, 30.5]),
      }
    

    componentDidMount() {
        // create map
        this.map = L.map('mapid', {
            center: [50.0819, 8.6338],
            zoom: 6,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
        // this.layer = L.layerGroup().addTo(this.map);
        L.marker([50.0819, 8.6338], {title: 'Test'}).addTo(this.map);
        // this.updateMarkers(this.props.markersData);
    }

    // updateMarkers(markersData: L.Marker[]) {
    //     this.layer.clearLayers();
    //     markersData.forEach((marker: L.Marker) => {
    //         L.marker(
    //         marker.getLatLng(),
    //             {title: marker.title; }
    //       ).addTo(this.layer);
    //     });
    //   }

    render() {
        return <div id="mapid"></div>
    }
}

export default Map;