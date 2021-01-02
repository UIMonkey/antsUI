import React from 'react';
import L from 'leaflet';
import { IAnt } from './ant';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

interface IMapProps {
    map: L.Map;
    ants: IAnt[];
    selectAnt: (e: L.LeafletMouseEvent) => void;
}

export const pointerIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/ant1.png`,
    iconRetinaUrl: "./ant1.png",
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [48, 48],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
});

export const defaultIcon = new L.Icon.Default({
    imagePath: `${process.env.PUBLIC_URL}/`
});

class Map extends React.Component<IMapProps> {
    private map!: L.Map;
    private layer = new L.LayerGroup();

    static defaultProps: Partial<IMapProps> = {
        ants: []
    }

    createMap() {
        return L.map('mapid', {
            center: [51.700963, 3.854044],
            zoom: 7,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
    }

    componentDidMount() {
        this.map = this.createMap();

        this.props.ants?.forEach((ant: IAnt) => {
            L.marker([ant.location.latitude, ant.location.longitude], { title: ant.name, icon: pointerIcon })
                .addTo(this.map)
                .on('click', this.props.selectAnt);
        });
    }

    componentDidUpdate() {
        this.map.eachLayer((layer: L.Layer) => {
            const marker = layer as L.Marker;
            if (marker.options) {
                const ant = this.props.ants.find((ant: IAnt) => ant.name === marker.options.title)
                if (ant) {
                    marker.setLatLng([ant.location.latitude, ant.location.longitude]);
                }
            }
        })
    }

    render() {
        return <div id="mapid"></div>
    }
}

export default Map;