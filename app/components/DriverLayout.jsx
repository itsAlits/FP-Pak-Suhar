import { BellRing, Search, User, Wallet, Send } from 'lucide-react'
import MobileBottomNav from './MobileBottomNav'

export default function DriverLayout({ children, activeTab, setActiveTab, driverName = 'Nama Pengemudi', balance = 'Rp 250.000' }) {
  return (
    <div className='flex flex-col h-screen'>
      {/* Main Content */}
      <div className='flex-1 overflow-auto pb-24'>
        {/* Header Section */}
        <div id="Head" className='h-fit p-4 text-white bg-[#19403B]'>
          <div className='mt-3 flex justify-between items-center'>
            <div><img src="/logosolo.png" className='h-8' alt="Kara Logo" /></div>
            <div className='flex gap-2'>
              <button className='hover:bg-black/10 p-2 rounded-lg transition'>
                <BellRing size={19} />
              </button>
              <button className='hover:bg-black/10 p-2 rounded-lg transition'>
                <Search size={19} />
              </button>
              <button className='hover:bg-black/10 p-2 rounded-lg transition'>
                <User size={20} />
              </button>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='text-sm font-light'>Halo,</h1>
            <h1 className='text-lg font-light'>{driverName}</h1>
          </div>
          <div className='glass mt-4 mb-8 p-4 rounded-lg flex justify-between items-center border border-white/20'>
            <div>
              <h1 className='text-sm font-extralight'>Saldo Driver</h1>
              <h1 className='text-xl font-medium'>{balance}</h1>
            </div>
            <div className='flex gap-3'>
              <a href="/Topup">
                <button className='bg-[#D3FF53] p-2 rounded-full text-black text-sm font-light flex items-center justify-center hover:bg-[#c5ff33] transition'>
                  <Wallet size={20} strokeWidth={1} />
                </button>
              </a>
              <a href="/Transfer">
                <button className='bg-[#D3FF53] p-2 rounded-full text-black text-sm font-light flex items-center justify-center hover:bg-[#c5ff33] transition'>
                  <Send size={20} strokeWidth={1} />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='bg-white rounded-t-3xl -mt-6 p-4 space-y-4'>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
