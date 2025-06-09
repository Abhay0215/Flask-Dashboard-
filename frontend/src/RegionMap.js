import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const RegionMap = ({ data = [] }) => {
    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data.map((item, index) => (
                <CircleMarker
                    key={index}
                    center={[item.lat || 0, item.lng || 0]}
                    color="blue"
                    radius={5}
                >
                    <Popup>{item.region}</Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    );
};

export default RegionMap;