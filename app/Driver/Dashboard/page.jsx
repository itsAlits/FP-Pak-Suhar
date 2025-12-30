'use client'
import React, { useState } from 'react'
import { CheckCircle, Clock, MapPin, Phone, Eye, Navigation } from 'lucide-react'
import DriverLayout from '../../components/DriverLayout'


export default function DriverDashboard() {
    const [activeTab, setActiveTab] = useState('orders')
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [orders, setOrders] = useState([
        {
            id: 1,
            seller: 'Toko Semangka Jaya Makmur',
            customer: 'Ahmad Wijaya',
            items: 'Semangka Merah (2x), Susu Murni (1L)',
            price: 155000,
            status: 'pending',
            pickupAddress: 'Jl. Gatot Subroto No.123',
            pickupLat: -7.7956,
            pickupLng: 110.3695,
            deliveryAddress: 'Jl. Merdeka No.45',
            deliveryLat: -7.7945,
            deliveryLng: 110.3800,
            distance: '2.3 km',
            timestamp: '14:30'
        },
        {
            id: 2,
            seller: 'Buah Asli Nusantara',
            customer: 'Siti Nurhaliza',
            items: 'Buah Naga (2kg), Apel (1kg)',
            price: 95000,
            status: 'picked_up',
            pickupAddress: 'Jl. Diponegoro No.45',
            deliveryAddress: 'Jl. Sudirman No.67',
            distance: '1.8 km',
            timestamp: '13:45'
        },
        {
            id: 3,
            seller: 'Susu Murni Pedesaan',
            customer: 'Budi Santoso',
            items: 'Susu Murni (2L), Telur Ayam (20x)',
            price: 125000,
            status: 'delivered',
            pickupAddress: 'Jl. Ahmad Yani No.78',
            deliveryAddress: 'Jl. Gatot Subroto No.89',
            distance: '3.1 km',
            timestamp: '12:00'
        },
        {
            id: 4,
            seller: 'Sayuran Organik Sleman',
            customer: 'Rina Kusuma',
            items: 'Sayuran Organik Bundle',
            price: 85000,
            status: 'pending',
            pickupAddress: 'Jl. Sudirman No.56',
            deliveryAddress: 'Jl. Diponegoro No.112',
            distance: '2.5 km',
            timestamp: '14:15'
        },
    ])

    const getStatusColor = (status) => {
        switch (status) {
            case 'delivered':
                return { bg: 'bg-green-100', text: 'text-green-700', icon: <CheckCircle size={16} /> }
            case 'picked_up':
                return { bg: 'bg-blue-100', text: 'text-blue-700', icon: <Navigation size={16} /> }
            case 'pending':
                return { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: <Clock size={16} /> }
            default:
                return { bg: 'bg-gray-100', text: 'text-gray-700', icon: null }
        }
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'delivered':
                return 'Terkirim'
            case 'picked_up':
                return 'Dalam Pengiriman'
            case 'pending':
                return 'Menunggu Pickup'
            default:
                return status
        }
    }

    const handlePickup = (orderId) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: 'picked_up' } : order
        ))
    }

    const handleDeliver = (orderId) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: 'delivered' } : order
        ))
    }

    const pendingOrders = orders.filter(o => o.status === 'pending').length
    const totalEarnings = orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + (o.price * 0.1), 0)

    if (activeTab === 'map') {
        return (
            <DriverLayout activeTab={activeTab} setActiveTab={setActiveTab} driverName="Bambang Sutejo" balance="Rp 250.000">
                {/* Map Container */}
                <div className='bg-gray-100 rounded-lg border border-gray-200 h-96 overflow-hidden'>
                    <MapComponent orders={orders} />
                </div>

                {/* Active Orders Info */}
                <div className='bg-gray-50 rounded-lg border border-gray-200 p-4 mt-4'>
                    <h3 className='text-base font-light mb-4'>Pesanan Aktif</h3>
                    <div className='space-y-3'>
                        {orders.filter(o => o.status !== 'delivered').map((order) => {
                            const statusColor = getStatusColor(order.status)
                            return (
                                <div key={order.id} className='bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-start hover:bg-gray-50 cursor-pointer transition'
                                    onClick={() => setSelectedOrder(order.id)}>
                                    <div className='flex-1'>
                                        <h4 className='font-light text-sm mb-1'>{order.seller}</h4>
                                        <p className='text-xs text-gray-600 font-light'>{order.customer}</p>
                                        <p className='text-xs text-gray-500 font-extralight mt-1'>{order.distance}</p>
                                    </div>
                                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-light ${statusColor.bg} ${statusColor.text} whitespace-nowrap`}>
                                        {statusColor.icon}
                                        <span>{getStatusLabel(order.status)}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </DriverLayout>
        )
    }

    return (
        <DriverLayout activeTab={activeTab} setActiveTab={setActiveTab} driverName="Bambang Sutejo" balance="Rp 250.000">
            {/* Stats Cards */}
            <div className='grid grid-cols-1 gap-2'>
                <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
                    <p className='text-xs text-gray-600 font-light'>Pesanan Hari Ini</p>
                    <p className='text-xl font-semibold mt-2'>{orders.length}</p>
                </div>
                <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
                    <p className='text-xs text-gray-600 font-light'>Menunggu Pickup</p>
                    <p className='text-xl font-semibold mt-2'>{pendingOrders}</p>
                </div>
                <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
                    <p className='text-xs text-gray-600 font-light'>Penghasilan</p>
                    <p className='text-xl font-semibold mt-2'>Rp {Math.round(totalEarnings).toLocaleString()}</p>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className='flex gap-2 overflow-x-auto pb-2'>
                <button className='px-4 py-2 rounded-lg bg-[#D3FF53] text-black font-light text-sm whitespace-nowrap hover:bg-[#c5ff33] transition'>
                    Semua
                </button>
                <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
                    Menunggu
                </button>
                <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
                    Dalam Pengiriman
                </button>
                <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
                    Terkirim
                </button>
            </div>

            {/* Orders List */}
            <div className='bg-gray-50 rounded-lg border border-gray-200 p-4'>
                <h3 className='text-base font-light mb-4'>Pesanan Pengiriman</h3>
                {orders.length === 0 ? (
                    <p className='text-gray-500 text-xs font-light text-center py-8'>Tidak ada pesanan.</p>
                ) : (
                    <div className='space-y-3'>
                        {orders.map((order) => {
                            const statusColor = getStatusColor(order.status)
                            return (
                                <div key={order.id} className='border border-gray-200 rounded-lg p-4 bg-white'>
                                    <div className='flex justify-between items-start mb-3'>
                                        <div className='flex-1'>
                                            <h4 className='font-light text-sm mb-1'>{order.seller}</h4>
                                            <p className='text-xs text-gray-600 font-light'>{order.customer}</p>
                                        </div>
                                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-light ${statusColor.bg} ${statusColor.text}`}>
                                            {statusColor.icon}
                                            <span>{getStatusLabel(order.status)}</span>
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-600 space-y-1 mb-3 pb-3 border-b border-gray-100'>
                                        <p className='font-light'><strong>Pickup:</strong> {order.pickupAddress}</p>
                                        <p className='font-light'><strong>Antar:</strong> {order.deliveryAddress}</p>
                                        <p className='font-light'><strong>Jarak:</strong> {order.distance}</p>
                                    </div>
                                    <div className='flex justify-between items-center mb-3'>
                                        <span className='font-light text-sm'>Rp {order.price.toLocaleString()}</span>
                                        <span className='text-xs text-gray-500'>{order.timestamp}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        {order.status === 'pending' && (
                                            <button
                                                onClick={() => handlePickup(order.id)}
                                                className='flex-1 bg-[#D3FF53] text-black py-2 rounded-lg font-light hover:bg-[#c5ff33] transition text-sm'
                                            >
                                                Ambil Pesanan
                                            </button>
                                        )}
                                        {order.status === 'picked_up' && (
                                            <button
                                                onClick={() => handleDeliver(order.id)}
                                                className='flex-1 bg-[#D3FF53] text-black py-2 rounded-lg font-light hover:bg-[#c5ff33] transition text-sm'
                                            >
                                                Tandai Terkirim
                                            </button>
                                        )}
                                        <button className='flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-light hover:bg-gray-50 transition text-sm flex items-center justify-center gap-1'>
                                            <Eye size={16} />
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </DriverLayout>
    )
}
