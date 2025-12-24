import React from 'react'
import { Home, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3'>
      <div className='flex justify-around items-center'>
        <Link href="/User/Dashboard" className='flex-1 flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition'>
          <Home size={20} className='text-gray-600' />
          <span className='text-xs font-light text-gray-600'>Beranda</span>
        </Link>
    
        <Link href="/Pesanan" className='flex-1 flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition'>
          <ShoppingBag size={20} className='text-gray-600' />
          <span className='text-xs font-light text-gray-600'>Pesanan</span>
        </Link>
        <Link href="/Profil" className='flex-1 flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition'>
          <User size={20} className='text-gray-600' />
          <span className='text-xs font-light text-gray-600'>Profil</span>
        </Link>
      </div>
    </nav>
  )
}
