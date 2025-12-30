'use client'
import React, { useState } from 'react'
import { CheckCircle, Clock, XCircle, Eye } from 'lucide-react'
import SellerLayout from '../../components/SellerLayout'

export default function PenjualanPage() {
  const [activeTab, setActiveTab] = useState('penjualan')
  const [purchases, setPurchases] = useState([
    { id: 1, buyer: 'Ahmad Wijaya', items: 'Semangka Merah (2x)', price: 120000, status: 'completed', date: '2024-01-15', address: 'Jl. Gatot Subroto No.123' },
    { id: 2, buyer: 'Siti Nurhaliza', items: 'Susu Murni (1L)', price: 35000, status: 'pending', date: '2024-01-14', address: 'Jl. Diponegoro No.45' },
    { id: 3, buyer: 'Budi Santoso', items: 'Telur Ayam (10x)', price: 45000, status: 'completed', date: '2024-01-13', address: 'Jl. Ahmad Yani No.78' },
    { id: 4, buyer: 'Rina Kusuma', items: 'Sayuran Organik Bundle', price: 85000, status: 'cancelled', date: '2024-01-12', address: 'Jl. Sudirman No.56' },
    { id: 5, buyer: 'Hendra Gunawan', items: 'Buah Naga (2kg)', price: 65000, status: 'completed', date: '2024-01-11', address: 'Jl. Merdeka No.89' },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-green-100', text: 'text-green-700', icon: <CheckCircle size={16} /> }
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: <Clock size={16} /> }
      case 'cancelled':
        return { bg: 'bg-red-100', text: 'text-red-700', icon: <XCircle size={16} /> }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', icon: null }
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Selesai'
      case 'pending':
        return 'Menunggu'
      case 'cancelled':
        return 'Dibatalkan'
      default:
        return status
    }
  }

  const totalRevenue = purchases
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.price, 0)

  const pendingOrders = purchases.filter(p => p.status === 'pending').length

  return (
    <SellerLayout activeTab={activeTab} setActiveTab={setActiveTab} storeName="Toko Semangka Jaya Makmur" balance="Rp 500.000">
      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-2 md:gap-4'>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3 md:p-4'>
          <p className='text-xs md:text-sm text-gray-600 font-light'>Total Penjualan</p>
          <p className='text-xl md:text-3xl font-semibold mt-2'>{purchases.length}</p>
        </div>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3 md:p-4'>
          <p className='text-xs md:text-sm text-gray-600 font-light'>Menunggu</p>
          <p className='text-xl md:text-3xl font-semibold mt-2'>{pendingOrders}</p>
        </div>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3 md:p-4'>
          <p className='text-xs md:text-sm text-gray-600 font-light'>Total Revenue</p>
          <p className='text-xl md:text-3xl font-semibold mt-2'>Rp {totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className='flex gap-2 overflow-x-auto pb-2'>
        <button className='px-4 py-2 rounded-lg bg-[#D3FF53] text-black font-light text-sm whitespace-nowrap hover:bg-[#c5ff33] transition'>
          Semua
        </button>
        <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
          Selesai
        </button>
        <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
          Menunggu
        </button>
        <button className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-light text-sm whitespace-nowrap hover:bg-gray-50 transition'>
          Dibatalkan
        </button>
      </div>

      {/* Purchases List */}
      <div className='bg-gray-50 rounded-lg border border-gray-200 p-4 md:p-6'>
        <h3 className='text-base md:text-lg font-light mb-4'>Daftar Penjualan</h3>
        {purchases.length === 0 ? (
          <p className='text-gray-500 text-xs md:text-sm font-light text-center py-8'>Belum ada penjualan.</p>
        ) : (
          <div className='space-y-3 md:overflow-x-auto'>
            {/* Mobile Card View */}
            <div className='md:hidden space-y-3'>
              {purchases.map((purchase) => {
                const statusColor = getStatusColor(purchase.status)
                return (
                  <div key={purchase.id} className='border border-gray-200 rounded-lg p-4 bg-white'>
                    <div className='flex justify-between items-start mb-3'>
                      <div className='flex-1'>
                        <h4 className='font-light text-sm mb-1'>{purchase.buyer}</h4>
                        <p className='text-xs text-gray-600 font-light'>{purchase.items}</p>
                      </div>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-light ${statusColor.bg} ${statusColor.text}`}>
                        {statusColor.icon}
                        <span>{getStatusLabel(purchase.status)}</span>
                      </div>
                    </div>
                    <div className='border-t border-gray-100 pt-3 space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Total</span>
                        <span className='font-light'>Rp {purchase.price.toLocaleString()}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600'>Tanggal</span>
                        <span className='font-light'>{purchase.date}</span>
                      </div>
                      <button className='w-full mt-3 flex items-center justify-center gap-2 text-sm font-light text-[#19403B] hover:bg-[#f5f5f5] py-2 rounded-lg transition'>
                        <Eye size={16} />
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop Table View */}
            <table className='hidden md:table w-full text-sm'>
              <thead className='border-b border-gray-200'>
                <tr>
                  <th className='text-left py-3 font-light'>Pembeli</th>
                  <th className='text-left py-3 font-light'>Item</th>
                  <th className='text-left py-3 font-light'>Total</th>
                  <th className='text-left py-3 font-light'>Tanggal</th>
                  <th className='text-left py-3 font-light'>Status</th>
                  <th className='text-left py-3 font-light'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => {
                  const statusColor = getStatusColor(purchase.status)
                  return (
                    <tr key={purchase.id} className='border-b border-gray-100 hover:bg-gray-50'>
                      <td className='py-4 font-light'>{purchase.buyer}</td>
                      <td className='py-4 font-light'>{purchase.items}</td>
                      <td className='py-4 font-light'>Rp {purchase.price.toLocaleString()}</td>
                      <td className='py-4 font-light'>{purchase.date}</td>
                      <td className='py-4'>
                        <div className={`flex items-center gap-1 w-fit px-3 py-1 rounded-full text-xs font-light ${statusColor.bg} ${statusColor.text}`}>
                          {statusColor.icon}
                          <span>{getStatusLabel(purchase.status)}</span>
                        </div>
                      </td>
                      <td className='py-4'>
                        <button className='flex items-center gap-2 text-sm font-light text-[#19403B] hover:underline'>
                          <Eye size={16} />
                          Lihat
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </SellerLayout>
  )
}
