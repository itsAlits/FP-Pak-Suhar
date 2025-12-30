'use client'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapComponent({ orders }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const layerGroup = useRef(null)

  useEffect(() => {
    if (map.current) return

    // Initialize map with Bali coordinates
    map.current = L.map(mapContainer.current).setView([-8.6705, 115.2126], 12)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current)

    layerGroup.current = L.layerGroup().addTo(map.current)

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!map.current || !layerGroup.current) return

    // Clear existing layers
    layerGroup.current.clearLayers()

    // Driver location (Bali center)
    const driverMarker = L.circleMarker([-8.6705, 115.2126], {
      radius: 10,
      fillColor: '#19403B',
      color: '#fff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(layerGroup.current)
    driverMarker.bindPopup('<strong>Lokasi Anda</strong><br>Driver Aktif')

    // Add orders to map
    orders.forEach((order) => {
      // Pickup marker (green)
      const pickupMarker = L.circleMarker([order.pickupLat, order.pickupLng], {
        radius: 8,
        fillColor: '#10b981',
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(layerGroup.current)
      pickupMarker.bindPopup(`<strong>Pickup</strong><br>${order.seller}<br>${order.pickupAddress}`)

      // Delivery marker (blue)
      const deliveryMarker = L.circleMarker([order.deliveryLat, order.deliveryLng], {
        radius: 8,
        fillColor: '#3b82f6',
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(layerGroup.current)
      deliveryMarker.bindPopup(`<strong>Antar ke</strong><br>${order.customer}<br>${order.deliveryAddress}`)

      // Draw route line
      const route = L.polyline(
        [[order.pickupLat, order.pickupLng], [order.deliveryLat, order.deliveryLng]],
        {
          color: order.status === 'pending' ? '#fbbf24' : order.status === 'picked_up' ? '#60a5fa' : '#10b981',
          weight: 3,
          opacity: 0.6,
          dashArray: order.status === 'delivered' ? '5, 5' : ''
        }
      ).addTo(layerGroup.current)
    })

    // Fit bounds to show all markers
    if (orders.length > 0) {
      const bounds = L.latLngBounds([
        [-8.6705, 115.2126],
        ...orders.map(o => [o.pickupLat, o.pickupLng]),
        ...orders.map(o => [o.deliveryLat, o.deliveryLng])
      ])
      map.current.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [orders])

  return (
    <div 
      ref={mapContainer} 
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
      className='rounded-lg'
    />
  )
}
