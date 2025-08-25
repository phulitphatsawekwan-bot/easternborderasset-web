import { MapContainer, TileLayer, useMapEvents, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from "react-i18next";


// Component สำหรับขยับแผนที่ตาม position
function MapFlyTo({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom(), { animate: true });
    }
  }, [position, map]);
  return null;
}

// Component สำหรับคลิกเลือกตำแหน่งบน map
function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
      setPosition(coords);
      map.flyTo(coords);
      if (setValue) {
        setValue('lat', coords.lat);
        setValue('lng', coords.lng);
      }
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}

const Mainmap = ({ register, control, setValue, Location }) => {
  const { t } = useTranslation();
  const DEFAULT_LOCATION = { lat: 13.75, lng: 100.52 };

  // ถ้า Location เป็น array ให้แปลงเป็น object, ใช้ useMemo ป้องกัน object ใหม่ทุก render
  const initialLocation = useMemo(() => {
    if (Location) {
      return Array.isArray(Location)
        ? { lat: parseFloat(Location[0]), lng: parseFloat(Location[1]) }
        : Location;
    }
    return DEFAULT_LOCATION;
  }, [Location]);

  // ใช้ useWatch ถ้ามี control (form)
  const lat = control ? useWatch({ control, name: 'lat' }) : null;
  const lng = control ? useWatch({ control, name: 'lng' }) : null;

  const [position, setPosition] = useState(initialLocation);

  // sync input lat/lng หรือ Location กับ marker
  useEffect(() => {
    if (lat !== undefined && lng !== undefined && lat !== null && lng !== null) {
      const parsedLat = parseFloat(lat);
      const parsedLng = parseFloat(lng);
      if (
        !isNaN(parsedLat) &&
        !isNaN(parsedLng) &&
        (position.lat !== parsedLat || position.lng !== parsedLng)
      ) {
        setPosition({ lat: parsedLat, lng: parsedLng });
      }
    } else if (initialLocation) {
      if (position.lat !== initialLocation.lat || position.lng !== initialLocation.lng) {
        setPosition(initialLocation);
      }
    }
  }, [lat, lng, initialLocation]);

  return (
    <div>
      {/* ถ้าเป็นฟอร์ม ให้แสดง input lat/lng */}
      {register && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">{t("latitude")}</label>
            <input
              type="number"
              step="any"
              {...register('lat')}
              defaultValue={initialLocation.lat}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{t("longitude")}</label>
            <input
              type="number"
              step="any"
              {...register('lng')}
              defaultValue={initialLocation.lng}
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>
      )}

      <MapContainer
        className="h-[50vh] rounded-md z-0"
        center={position}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* บังคับให้เลื่อนเมื่อ position เปลี่ยน */}
        <MapFlyTo position={position} />

        {/* Marker */}
        {position && <Marker position={position}></Marker>}

        {/* คลิกเลือกตำแหน่ง */}
        <LocationMarker position={position} setPosition={setPosition} setValue={setValue} />
      </MapContainer>
    </div>
  );
};

export default Mainmap;
