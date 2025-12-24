'use client';
import { Heart, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const products = [
        { id: 1, name: 'Sayuran Segar', price: 25000, image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1603177235/attached_image/berbagai-manfaat-sayuran-hijau-untuk-kesehatan.jpg', rating: 4.5, reviews: 120, seller: 'Toko Sayuran Segar' },
        { id: 2, name: 'Buah Apel Merah', price: 35000, image: 'https://www.astronauts.id/blog/wp-content/uploads/2022/12/Kenali-Jenis-jenis-Buah-Apel-dan-Manfaatnya.jpg', rating: 4.8, reviews: 240, seller: 'Buah Asli Nusantara' },
        { id: 3, name: 'Telur Ayam Fresh', price: 45000, image: 'https://www.yogyagroup.com/storage/article/6877796f26f68_1752660335.jpg', rating: 4.6, reviews: 189, seller: 'Peternakan Modern' },
        { id: 4, name: 'Susu Murni', price: 55000, image: 'https://asset.kompas.com/crops/qLbVXtrMAt2LFewz6efvv5xlJNE=/0x0:1000x667/1200x800/data/photo/2020/11/30/5fc47705160f5.jpg', rating: 4.9, reviews: 312, seller: 'Susu Murni Pedesaan' },
        { id: 5, name: 'Brokoli Organik', price: 28000, image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/06/27044615/Ini-13-Manfaat-Brokoli-untuk-Kesehatan-yang-Perlu-Diketahui-.jpg.webp', rating: 4.7, reviews: 156, seller: 'Toko Sayuran Segar' },
        { id: 6, name: 'Wortel Premium', price: 32000, image: 'https://www.yesdok.com/visual/slideshow/carrots-cover-1-article-1627602282.jpg?w=1200', rating: 4.5, reviews: 98, seller: 'Toko Sayuran Segar' },
    ];

    return (
        <div className='pb-24'>
            <div id='Head' className=' py-8 px-4 text-center text-white bg-[#13302c]'>
                <h1 className='text-xl font-light'>Produk</h1>
                <p className='font-light text-sm'>Produk yang hari ini tersedia di pasar</p>
            </div>
            
            <div className='p-4'>
                <div className='grid grid-cols-2 gap-4'>
                    {products.map((product) => (
                        <Link key={product.id} href={`/Product/${product.id}`}>
                            <div className='border border-base-300 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer'>
                                <div className='h-40 bg-gray-200 overflow-hidden relative'>
                                    <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
                                    <button className='absolute top-2 right-2 bg-white p-1.5 rounded-full hover:bg-gray-100'>
                                        <Heart size={18} />
                                    </button>
                                </div>
                                <div className='p-3'>
                                    <h2 className='font-medium text-sm truncate'>{product.name}</h2>
                                    <p className='text-xs text-gray-600 font-light mb-2'>{product.seller}</p>
                                    <div className='flex items-center gap-1 mb-2'>
                                        <Star size={14} className='text-yellow-500 fill-yellow-500' />
                                        <span className='text-xs font-light'>{product.rating} ({product.reviews})</span>
                                    </div>
                                    <p className='font-semibold text-sm'>Rp {product.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
