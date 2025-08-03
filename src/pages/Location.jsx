import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Marker uchun default icon sozlash
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

export default function Location() {
  return (
    <section id="location" className="mt-10 mb-[50px] p-[5px]">
      <h2 className="text-2xl font-bold text-center mb-4">Bizning manzil</h2>
      <div className="h-[450px] max-w-[800px] mx-auto rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[39.1175857, 66.8910804]} // Koordinatalar: Iqtidor IT Academy
          zoom={15}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[39.1175857, 66.8910804]}>
            <Popup>Iqtidor IT Academy joylashuvi</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}
