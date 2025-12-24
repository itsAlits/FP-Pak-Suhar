'use client';
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(savedOrders);
        setIsLoaded(true);
    }, []);

    if (!isLoaded) {
        return (
            <div className='pb-24 bg-base-100 min-h-screen'>
                <div className='sticky top-0 bg-base-100 border-b border-base-300 p-4 flex items-center gap-4 z-10'>
                    <button onClick={() => router.back()} className='hover:bg-base-200 p-2 rounded-lg transition'>
                        <MoveLeft size={24} />
                    </button>
                    <h1 className='font-light text-lg'>Pesanan Saya</h1>
                </div>
                <div className='p-4 text-center py-12'>
                    <p className='text-base-content/60 font-light'>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='pb-24 bg-base-100 min-h-screen'>
            <div className='sticky top-0 bg-base-100 border-b border-base-300 p-4 flex items-center gap-4 z-10'>
                <button onClick={() => router.back()} className='hover:bg-base-200 p-2 rounded-lg transition'>
                    <MoveLeft size={24} />
                </button>
                <h1 className='font-light text-lg'>Pesanan Saya</h1>
            </div>

            <div className='p-4'>
                {orders.length === 0 ? (
                    <div className='bg-base-100 border border-base-300 rounded-lg p-12 text-center mt-4'>
                        <div className='text-4xl mb-4'>📦</div>
                        <p className='text-base-content/60 font-light text-lg'>Belum ada pesanan</p>
                        <button 
                            onClick={() => router.push('/Product')}
                            className='mt-4 bg-[#D3FF53] text-black px-6 py-2 rounded-lg font-light hover:bg-[#c5f240] transition'
                        >
                            Mulai Berbelanja
                        </button>
                    </div>
                ) : (
                    <div className='space-y-4'>
                        {orders.map((order, index) => (
                            <div key={index} className='bg-base-100 border border-base-300 rounded-lg overflow-hidden hover:shadow-md transition'>
                                <div className='bg-gradient-to-r from-[#13302c] to-[#1b443f] text-white p-4 flex justify-between items-center'>
                                    <div>
                                        <p className='text-xs font-light opacity-80'>Nomor Pesanan</p>
                                        <p className='font-medium'>#{1000 + index}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-xs font-light opacity-80'>Status</p>
                                        <p className='font-medium text-[#D3FF53]'>Diproses</p>
                                    </div>
                                </div>

                                <div className='p-4 space-y-4'>
                                    {order.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className='flex gap-4 pb-4 border-b border-base-300 last:border-b-0'>
                                            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-lg' />
                                            <div className='flex-1'>
                                                <h3 className='font-medium text-sm'>{item.name}</h3>
                                                <p className='text-xs text-base-content/60 font-light'>{item.seller}</p>
                                                <p className='text-xs text-base-content/60 mt-1'>Qty: {item.quantity}</p>
                                                <p className='font-semibold text-sm mt-1'>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className='S pt-4 space-y-2'>
                                        <div className='flex justify-between text-sm'>
                                            <span className='text-base-content/60'>Subtotal</span>
                                            <span className='font-light'>Rp {order.subtotal.toLocaleString('id-ID')}</span>
                                        </div>
                                        <div className='flex justify-between text-sm'>
                                            <span className='text-base-content/60'>Ongkos Kirim</span>
                                            <span className='font-light text-success'>Gratis</span>
                                        </div>
                                        <div className='flex justify-between text-base font-semibold border-t border-base-300 pt-2'>
                                            <span>Total</span>
                                            <span className='text-[#13302c]'>Rp {order.total.toLocaleString('id-ID')}</span>
                                        </div>
                                    </div>

                                    <div className='border-t border-base-300 pt-4 space-y-1'>
                                        <p className='text-xs text-base-content/60'>📅 Tanggal Pemesanan: {order.date}</p>
                                        <p className='text-xs text-base-content/60'>⏱️ Estimasi: 1-2 hari kerja</p>
                                    </div>

                                    <button className='w-full mt-4 border border-base-300 text-[#13302c] font-light py-2 rounded-lg hover:bg-base-200 transition'>
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
