'use client';
import { Heart, MoveLeft, Share2, Star } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const params = useParams();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const productData = {
        1: { name: 'Sayuran Segar', price: 25000, image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1603177235/attached_image/berbagai-manfaat-sayuran-hijau-untuk-kesehatan.jpg', rating: 4.5, reviews: 120, seller: 'Toko Sayuran Segar', description: 'Sayuran segar berkualitas tinggi langsung dari petani', stock: 50 },
        2: { name: 'Buah Apel Merah', price: 35000, image: 'https://www.astronauts.id/blog/wp-content/uploads/2022/12/Kenali-Jenis-jenis-Buah-Apel-dan-Manfaatnya.jpg', rating: 4.8, reviews: 240, seller: 'Buah Asli Nusantara', description: 'Buah apel merah pilihan dengan rasa manis', stock: 30 },
        3: { name: 'Telur Ayam Fresh', price: 45000, image: 'https://www.yogyagroup.com/storage/article/6877796f26f68_1752660335.jpg', rating: 4.6, reviews: 189, seller: 'Peternakan Modern', description: 'Telur ayam segar berkualitas premium', stock: 100 },
        4: { name: 'Susu Murni', price: 55000, image: 'https://asset.kompas.com/crops/qLbVXtrMAt2LFewz6efvv5xlJNE=/0x0:1000x667/1200x800/data/photo/2020/11/30/5fc47705160f5.jpg', rating: 4.9, reviews: 312, seller: 'Susu Murni Pedesaan', description: 'Susu murni langsung dari peternakan', stock: 40 },
        5: { name: 'Brokoli Organik', price: 28000, image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/06/27044615/Ini-13-Manfaat-Brokoli-untuk-Kesehatan-yang-Perlu-Diketahui-.jpg.webp', rating: 4.7, reviews: 156, seller: 'Toko Sayuran Segar', description: 'Brokoli organik tanpa pestisida', stock: 60 },
        6: { name: 'Wortel Premium', price: 32000, image: 'https://www.yesdok.com/visual/slideshow/carrots-cover-1-article-1627602282.jpg?w=1200', rating: 4.5, reviews: 98, seller: 'Toko Sayuran Segar', description: 'Wortel premium berkualitas tinggi', stock: 75 },
    };

    const product = productData[params.id] || productData[1];

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItem = cart.find(item => item.id === params.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id: params.id, ...product, quantity });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        router.push('/Checkout');
    };

    return (
        <div className='pb-24'>
            <div className='sticky top-0 bg-white border-b border-base-300 p-4 flex justify-between items-center z-10'>
                <button onClick={() => router.back()}>
                    <MoveLeft size={24} />
                </button>
                <h1 className='font-light'>Detail Produk</h1>
                <Share2 size={24} strokeWidth={1} className='text-gray-600' />
            </div>

            <div className='p-4'>
                <div className='h-64 bg-gray-200 rounded-lg overflow-hidden mb-4'>
                    <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
                </div>

                <div className='flex justify-between items-start mb-4'>
                    <div>
                        <h1 className='text-lg font-medium mb-2'>{product.name}</h1>
                        <div className='flex items-center gap-2 mb-2'>
                            <Star size={14} className='text-yellow-500 fill-yellow-500' />
                            <span className='font-light text-sm'>{product.rating} ({product.reviews} ulasan)</span>
                        </div>
                    </div>
                    <button className='bg-gray-100 p-3 rounded-full hover:bg-gray-200'>
                        <Heart size={20} />
                    </button>
                </div>

                <div className='mb-4'>
                    <p className='text-xl font-semibold mb-1'>Rp {product.price.toLocaleString('id-ID')}</p>
                    <p className='text-sm font-light text-gray-600'>Stok: {product.stock} tersedia</p>
                </div>

                <div className=' pt-4 mb-4'>
                    <h2 className='font-medium mb-2'>Deskripsi</h2>
                    <p className='text-sm font-light text-gray-700'>{product.description}</p>
                </div>

                <div className=' pt-4 mb-4'>
                    <h2 className='font-medium mb-2'>Penjual</h2>
                    <p className='text-sm font-light'>{product.seller}</p>
                </div>

                <div className=' border-t border-base-300 pt-4'>
                    <h2 className='font-medium mb-3'>Jumlah</h2>
                    <div className='flex items-center gap-4 mb-6'>
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className='w-10 h-10 border rounded-lg hover:bg-gray-100'
                        >
                            -
                        </button>
                        <div className='text-lg font-medium'>{quantity}</div>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className='w-10 h-10 border rounded-lg hover:bg-gray-100'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className=' p-4 bg-white '>
                <button 
                    onClick={handleAddToCart}
                    className='w-full bg-[#D3FF53] text-black font-medium py-3.5 rounded-lg hover:bg-[#c5f240] transition'
                >
                    Tambah ke Keranjang
                </button>
            </div>
        </div>
    )
}
