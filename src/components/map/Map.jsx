import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet';
import './map.scss';
import Pin from "../pin/Pin"
import "leaflet/dist/leaflet.css";

function Map({items}){
    return(
    <MapContainer center={[51.50,-0.12]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(<Pin key={item.id} item={item} />))}
    
  </MapContainer>
    );
}

export default Map;