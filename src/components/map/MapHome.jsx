
import { MapContainer } from 'react-leaflet'
import Layers from './Layers';

const MapHome = () => {

    return (
        <div>
            <MapContainer
                className='h-[50vh] rounded-md z-0 mt-5'
                center={[13.75, 100.52]}
                zoom={8}
                scrollWheelZoom={true}>
                <Layers />
            </MapContainer>
        </div>
    )
}
export default MapHome;