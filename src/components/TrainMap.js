import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './TrainMap.css';

const trainRoutes = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Chennai to Coimbatore" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [80.2707, 13.0827], 
                    [76.9647, 11.0168]  
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Chennai to Tirupur" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [80.2707, 13.0827], 
                    [77.3411, 11.1085] 
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Chennai to Madurai" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [80.2707, 13.0827], 
                    [78.1198, 9.9252]   
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Coimbatore to Madurai" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [76.9647, 11.0168], 
                    [78.1198, 9.9252]   
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Coimbatore to Tirupur" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [76.9647, 11.0168], 
                    [77.3411, 11.1085] 
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Madurai to Tirupur" },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [78.1198, 9.9252],  
                    [77.3411, 11.1085]  
                ]
            }
        }
    ]
};

const stations = [
    { name: "Chennai", coordinates: [13.0827, 80.2707] },
    { name: "Coimbatore", coordinates: [11.0168, 76.9647] },
    { name: "Madurai", coordinates: [9.9252, 78.1198] },
    { name: "Tirupur", coordinates: [11.1085, 77.3411] },
];

const TrainMap = () => {
    return (
        <div className="map-container">
            <MapContainer center={[10.8505, 76.2711]} zoom={7} style={{ height: "100vh", width: "100vw" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON data={trainRoutes} style={{ color: 'blue', weight: 4 }} />
                {stations.map((station, idx) => (
                    <Marker
                        key={idx}
                        position={station.coordinates}
                        icon={L.divIcon({ className: 'station-marker', html: `<div>${station.name}</div>` })}
                    >
                        <Popup>{station.name} Railway Station</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default TrainMap;
