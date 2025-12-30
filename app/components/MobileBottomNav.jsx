import { Package, ShoppingCart, LogOut } from 'lucide-react'

export default function MobileBottomNav({ activeTab, setActiveTab }) {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden'>
      <div className='flex justify-around items-center h-20'>
        <a href='/Seller'
          onClick={() => setActiveTab('inventory')}
          className={`flex flex-col items-center gap-1 py-2 px-4 transition-colors ${
            activeTab === 'inventory' ? 'text-[#19403B]' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Package size={22} strokeWidth={1} />
          <span className='text-xs font-light'>Home</span>
        </a>
        <a href='/Seller/Penjualan'
          onClick={() => setActiveTab('purchases')}
          className={`flex flex-col items-center gap-1 py-2 px-4 transition-colors ${
            activeTab === 'purchases' ? 'text-[#19403B]' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <ShoppingCart size={22} strokeWidth={1} />
          <span className='text-xs font-light'>Penjualan</span>
        </a>
        <a href='/Login' className='flex flex-col items-center gap-1 py-2 px-4 text-gray-600 hover:text-gray-800 transition-colors'>
          <LogOut size={22} strokeWidth={1} />
          <span className='text-xs font-light'>Keluar</span>
        </a>
      </div>
    </div>
  )
}
