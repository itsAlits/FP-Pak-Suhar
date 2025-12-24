'use client';
import { BellRing, Search, Send, User, Wallet, X } from 'lucide-react'
import React, { useState } from 'react'
import SellerCard from '../../components/SellerCard.jsx';


export default function page() {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className='h-screen'>
            <div className='h-fit p-4 text-white bg-[#13302c]'>
                <div className='mt-3 flex justify-between items-center'>
                    <div><img src="/logosolo.png" className='h-8' alt="" /></div>
                    <div className='flex'>
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
                    <h1 className='text-lg font-light'>Ngakan Made Alit Wiradhnata</h1>
                </div>
                <div className='glass mt-4  mb-6 p-4 rounded-lg flex justify-between items-center'>
                    <div>

                        <h1 className='text-sm font-extralight'>Saldo Akun</h1>
                        <h1 className='text-xl font-medium'>Rp 250.000</h1>
                    </div>
                    <div className='flex gap-3'>
                        <a href="/Topup">
                            <button className='bg-[#D3FF53] p-2 rounded-full text-black text-sm font-light flex items-center justify-center'>
                                <Wallet size={20} strokeWidth={1} />
                            </button>
                        </a>
                        <a href="/Topup">
                            <button className='bg-[#D3FF53] p-2 rounded-full text-black text-sm font-light flex items-center justify-center'>
                                <Send size={20} strokeWidth={1} />
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            <div className='bg-white rounded-t-xl p-4 -mt-2 h-full w-full text-black'>
                {showBanner && (
                    <div className='border p-4 border-amber-200 bg-amber-100 rounded-lg flex justify-between items-start'>
                        <div>
                            <h1 className='text-[12px]'>Gunakan Qris untukk dapatkan potongan hingga 50rb</h1>
                            <a href="" className='text-[12px] underline'>Lihat Sekarang</a>
                        </div>
                        <button onClick={() => setShowBanner(false)} className='flex-shrink-0'>
                            <X size={16} className='text-amber-900' />
                        </button>
                    </div>
                )}

                <div className='mt-6'>
                    <h1 className='font-light text-base mb-4'>Kategori</h1>
                    <div className='grid grid-cols-4 gap-3'>
                        <div className='bg-green-50 p-3 rounded-lg text-center cursor-pointer hover:bg-green-100 transition'>
                            <div className='text-2xl mb-2'>🥬</div>
                            <p className='text-xs font-light'>Sayuran</p>
                        </div>
                        <div className='bg-yellow-50 p-3 rounded-lg text-center cursor-pointer hover:bg-yellow-100 transition'>
                            <div className='text-2xl mb-2'>🍎</div>
                            <p className='text-xs font-light'>Buah</p>
                        </div>
                        <div className='bg-orange-50 p-3 rounded-lg text-center cursor-pointer hover:bg-orange-100 transition'>
                            <div className='text-2xl mb-2'>🥚</div>
                            <p className='text-xs font-light'>Telur</p>
                        </div>
                        <div className='bg-blue-50 p-3 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition'>
                            <div className='text-2xl mb-2'>🥛</div>
                            <p className='text-xs font-light'>Susu</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                     <h1 className='font-light text-base mb-4'>Penjual Sekitarmu</h1>
                     <div className='overflow-x-auto scrollbar-hide flex gap-4 pb-2'>
                        <SellerCard 
                            image="/2151529953.jpg" 
                            name="Toko Ikan Jhon Cornor" 
                            address="Jl. Gatot Subroto No.123" 
                            rating="★★★★★" 
                            reviews="156" 
                        />
                        <SellerCard 
                            image="/2149349406.jpg" 
                            name="Buah Asli Nusantara" 
                            address="Jl. Diponegoro No.45" 
                            rating="★★★★☆" 
                            reviews="243" 
                        />
                        <SellerCard 
                            image="/2151579044.jpg" 
                            name="Semangka Aji Mumpung" 
                            address="Jl. Ahmad Yani No.78" 
                            rating="★★★★★" 
                            reviews="189" 
                        />
                        <SellerCard 
                            image="/2149349406.jpg" 
                            name="Susu Murni Pedesaan" 
                            address="Jl. Sudirman No.56" 
                            rating="★★★★★" 
                            reviews="312" 
                        />
                     </div>
                </div>
            </div>
        </div>
    )
}
