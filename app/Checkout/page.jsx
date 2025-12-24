'use client';
import { MoveLeft, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'

export default function page() {
    const router = useRouter();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
        
        const totalPrice = savedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(totalPrice);
        setIsLoaded(true);
    }, []);

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        const totalPrice = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.error('Keranjang kosong');
            return;
        }
        
        const newOrder = {
            id: Date.now(),
            items: cart,
            subtotal: total,
            total: total,
            date: new Date().toLocaleDateString('id-ID'),
            status: 'Diproses'
        };
        
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(newOrder);
        
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        localStorage.removeItem('cart');
        
        toast.success('Pesanan berhasil dibuat!');
        router.push('/Pesanan');
    };

    return (
        <div className='pb-28 bg-gray-50 min-h-screen'>
            <div className='sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center gap-4 z-10'>
                <button onClick={() => router.back()} className='hover:bg-gray-100 p-2 rounded-lg transition'>
                    <MoveLeft size={24} />
                </button>
                <h1 className='font-light text-base'>Keranjang Belanja</h1>
            </div>

            <div className='p-4'>
                {!isLoaded ? (
                    <div className='text-center py-12'>
                        <p className='text-gray-600 font-light'>Loading...</p>
                    </div>
                ) : cart.length === 0 ? (
                    <div className='bg-white rounded-lg p-12 text-center mt-4'>
                        <div className='text-4xl mb-4'>🛒</div>
                        <p className='text-gray-600 font-light text-lg'>Keranjang Anda kosong</p>
                        <button 
                            onClick={() => router.push('/Product')}
                            className='mt-4 bg-[#D3FF53] text-black px-6 py-2 rounded-lg font-light hover:bg-[#c5f240] transition'
                        >
                            Mulai Berbelanja
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='space-y-3 mb-4'>
                            <h2 className='font-normal text-base text-gray-700 mb-4'>Jumlah Produk ({cart.length})</h2>
                            {cart.map((item) => (
                                <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-4 flex gap-4 hover:shadow-md transition'>
                                    <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-lg flex-shrink-0' />
                                    <div className='flex-1 min-w-0'>
                                        <h2 className='font-medium text-sm truncate'>{item.name}</h2>
                                        <p className='text-xs text-gray-500 font-light mb-2'>{item.seller}</p>
                                        <div className='flex justify-between items-end'>
                                            <div>
                                                <p className='text-xs text-gray-600 mb-1'>Qty: {item.quantity}</p>
                                                <p className='font-semibold text-sm'>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className='text-gray-400 hover:text-red-500 transition p-2'
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className='bg-white rounded-lg p-4 mb-6 border border-gray-200'>
                            <h2 className='font-normal text-base text-gray-700 mb-4'>Ringkasan Pesanan</h2>
                            <div className='space-y-3'>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-600'>Subtotal</span>
                                    <span className='font-light text-sm'>Rp {total.toLocaleString('id-ID')}</span>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-600'>Ongkos Kirim</span>
                                    <span className='font-light text-sm text-green-600'>Gratis</span>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-600'>Diskon</span>
                                    <span className='font-light text-sm text-red-600'>-Rp 0</span>
                                </div>
                                <div className='border-t border-base-300 pt-3 flex justify-between'>
                                    <span className='font-light text-sm text-gray-700'>Total Pembayaran</span>
                                    <span className='font-light text-sm text-[#13302c]'>Rp {total.toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                        </div>

                        <div className='bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6'>
                            <p className='text-xs text-blue-700 font-light'>
                                ℹ️ Estimasi pengiriman 1-2 hari kerja ke lokasi Anda
                            </p>
                        </div>
                    </>
                )}
            </div>

            {isLoaded && cart.length > 0 && (
                <div className=' p-4'>
                    <button 
                        onClick={handleCheckout}
                        className='w-full bg-[#D3FF53] text-black font-medium py-3.5 rounded-lg hover:bg-[#c5f240] transition'
                    >
                        Lanjutkan Pembayaran
                    </button>
                </div>
            )}
        </div>
    )
}
