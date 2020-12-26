import React from 'react';
import L from 'leaflet';
import { IAnt } from './ant';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

interface IMapProps {
    map: L.Map;
    ants: IAnt[];
    selectAnt: (thing: any) => void;
}

export const pointerIcon = new L.Icon({
    iconUrl: "./favicon.ico",
    iconRetinaUrl: "./favicon.ico",
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [64, 64],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
});

class Map extends React.Component<IMapProps> {
    private map!: L.Map;
    private layer = new L.LayerGroup();

    static defaultProps: Partial<IMapProps> = {
        ants: []
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

        this.props.ants.forEach((ant: IAnt) => {
            L.marker([ant.location.latitude, ant.location.longitude], { title: ant.name })
                .addTo(this.map)
                .on('click', this.props.selectAnt);
        });
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