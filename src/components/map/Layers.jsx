import useRealestateStore from "@/store/realestate-store";
import {
    LayersControl,
    TileLayer,
    Marker,
    Popup,
    LayerGroup,
    Tooltip
} from "react-leaflet";

const Layers = () => {
    const realestates = useRealestateStore((state) => state.realestates)

    return (
        <LayersControl>
            <LayersControl.BaseLayer name="OSM" checked>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Sattellite">
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
            </LayersControl.BaseLayer>


            {/* Overlay Layers */}
            <LayersControl.Overlay name="Eastborder" checked>
                <LayerGroup>
                    {realestates.map((item) => {
                        return (
                            <Marker key={item.id} position={[item.lat, item.lng]}>
                                <Popup>
                                    {item.title}
                                    <br /> {item.description}
                                </Popup>
                                <Tooltip>
                                    {item.title}
                                </Tooltip>
                            </Marker>
                        );
                    })}
                </LayerGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )
}
export default Layers