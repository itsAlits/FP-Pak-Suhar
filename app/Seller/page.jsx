'use client'
import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import SellerLayout from '../components/SellerLayout'

export default function SellerDashboard() {
  const [items, setItems] = useState([
    { id: 1, name: 'Semangka Merah Premium', price: '60000', stock: '15', sold: 8, description: 'Semangka merah segar pilihan' },
    { id: 2, name: 'Susu Murni Segar', price: '35000', stock: '20', sold: 12, description: 'Susu murni 1 liter tanpa pengawet' },
    { id: 3, name: 'Telur Ayam Organik', price: '45000', stock: '30', sold: 18, description: 'Telur ayam organik per 10 butir' },
    { id: 4, name: 'Sayuran Organik Bundle', price: '85000', stock: '8', sold: 5, description: 'Paket sayuran organik pilihan' },
    { id: 5, name: 'Buah Naga Merah', price: '65000', stock: '12', sold: 7, description: 'Buah naga merah segar 2kg' },
  ])
  const [purchases, setPurchases] = useState([])
  const [showAddItem, setShowAddItem] = useState(false)
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', description: '' })
  const [activeTab, setActiveTab] = useState('inventory')

  const handleAddItem = (e) => {
    e.preventDefault()
    if (formData.name && formData.price && formData.stock) {
      setItems([...items, { id: Date.now(), ...formData, sold: 0 }])
      setFormData({ name: '', price: '', stock: '', description: '' })
      setShowAddItem(false)
    }
  }

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <SellerLayout activeTab={activeTab} setActiveTab={setActiveTab} storeName="Toko Semangka Jaya Makmur" balance="Rp 500.000">
      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-2'>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
          <p className='text-xs text-gray-600 font-light'>Total Items</p>
          <p className='text-xl font-semibold mt-2'>{items.length}</p>
        </div>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
          <p className='text-xs text-gray-600 font-light'>Penjualan</p>
          <p className='text-xl font-semibold mt-2'>{items.reduce((sum, item) => sum + parseInt(item.sold), 0)}</p>
        </div>
        <div className='bg-gray-50 rounded-lg border border-gray-200 p-3'>
          <p className='text-xs text-gray-600 font-light'>Revenue</p>
          <p className='text-xl font-semibold mt-2'>Rp {(items.reduce((sum, item) => sum + (parseInt(item.price) * parseInt(item.sold)), 0)).toLocaleString()}</p>
        </div>
      </div>

      {/* Add Item Button */}
      <button
        onClick={() => setShowAddItem(!showAddItem)}
        className='flex items-center justify-center gap-2 w-full bg-[#D3FF53] text-black px-4 py-2.5 rounded-lg font-light hover:bg-[#c5ff33] transition-colors'
      >
        <Plus size={18} />
        <span className='text-sm'>Tambah Item</span>
      </button>

      {/* Add Item Form */}
      {showAddItem && (
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-base font-light'>Tambah Item Baru</h3>
            <button onClick={() => setShowAddItem(false)}>
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleAddItem} className='space-y-3'>
            <div>
              <label className='block text-xs font-light mb-2'>Nama Item*</label>
              <input
                type='text'
                placeholder='Masukkan nama item'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-[#19403B] outline-none text-sm'
              />
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label className='block text-xs font-light mb-2'>Harga (Rp)*</label>
                <input
                  type='number'
                  placeholder='0'
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-[#19403B] outline-none text-sm'
                />
              </div>
              <div>
                <label className='block text-xs font-light mb-2'>Stok*</label>
                <input
                  type='number'
                  placeholder='0'
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-[#19403B] outline-none text-sm'
                />
              </div>
            </div>
            <div>
              <label className='block text-xs font-light mb-2'>Deskripsi</label>
              <textarea
                placeholder='Deskripsi item (opsional)'
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-[#19403B] outline-none text-sm'
                rows='3'
              ></textarea>
            </div>
            <div className='flex gap-2'>
              <button type='submit' className='flex-1 bg-[#D3FF53] text-black py-2 rounded-lg font-light hover:bg-[#c5ff33] transition-colors text-sm'>
                Simpan
              </button>
              <button
                type='button'
                onClick={() => setShowAddItem(false)}
                className='flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-light hover:bg-gray-50 transition-colors text-sm'
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Inventory List */}
      <div className='bg-gray-50 rounded-lg border border-gray-200 p-4'>
        <h3 className='text-base font-light mb-4'>Inventori Items</h3>
        {items.length === 0 ? (
          <p className='text-gray-500 text-xs font-light text-center py-8'>Belum ada item. Tambahkan item baru untuk memulai.</p>
        ) : (
          <div className='space-y-3'>
            {/* Mobile Card View */}
            {items.map((item) => (
              <div key={item.id} className='border border-gray-200 rounded-lg p-3 bg-white'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-light text-sm flex-1'>{item.name}</h4>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className='text-red-500 text-xs font-light hover:underline'
                  >
                    Hapus
                  </button>
                </div>
                <div className='grid grid-cols-3 gap-2 text-xs text-gray-600'>
                  <div>
                    <p className='font-light text-gray-500'>Harga</p>
                    <p className='font-light'>Rp {parseInt(item.price).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className='font-light text-gray-500'>Stok</p>
                    <p className='font-light'>{item.stock}</p>
                  </div>
                  <div>
                    <p className='font-light text-gray-500'>Terjual</p>
                    <p className='font-light'>{item.sold}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SellerLayout>
  )
}
