"use client";

import { useMemo } from "react";
import type { DivIcon } from "leaflet";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { HomeProperty } from "@/types/home";

interface CatalogMapProps {
  properties: HomeProperty[];
}

function buildPricePin(price: number): DivIcon {
  return L.divIcon({
    className: "catalog-pin-icon",
    html: `<span class="catalog-pin-inner">${price} EUR</span>`,
    iconSize: [56, 28],
    iconAnchor: [28, 14]
  });
}

function getMapCenter(properties: HomeProperty[]): [number, number] {
  if (properties.length === 0) {
    return [40.4168, -3.7038];
  }

  const aggregate = properties.reduce(
    (acc, property) => {
      return {
        latitude: acc.latitude + property.latitude,
        longitude: acc.longitude + property.longitude
      };
    },
    { latitude: 0, longitude: 0 }
  );

  return [aggregate.latitude / properties.length, aggregate.longitude / properties.length];
}

const CatalogMap = ({ properties }: CatalogMapProps) => {
  const center = useMemo(() => getMapCenter(properties), [properties]);

  return (
    <MapContainer center={center} zoom={6} scrollWheelZoom className="h-full w-full rounded-3xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.latitude, property.longitude]}
          icon={buildPricePin(property.nightlyPrice)}
        >
          <Popup>
            <div className="min-w-[12rem]">
              <p className="text-sm font-semibold text-zinc-900">{property.title}</p>
              <p className="text-xs text-zinc-600">{property.location}</p>
              <p className="mt-1 text-sm font-medium text-zinc-900">{property.nightlyPrice} EUR / noche</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CatalogMap;
