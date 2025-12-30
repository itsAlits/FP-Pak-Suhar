import { MoveLeft, User, Store, Truck } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='p-6 h-screen'>
            <div>
                <MoveLeft size={24} className='cursor-pointer hover:opacity-70 transition-opacity' />
            </div>
            <div className='mt-8'>
                <h1 className='font-light text-lg'>Login</h1>
                <p className='text-sm font-extralight'>Selamat datang kembali di kara app</p>
            </div>
            <div className='mt-8 space-y-4'>
            
                <div>
                    <h1 className='font-light text-sm mb-1'>Username*</h1>
                    <input type="text" placeholder="ex : Kara@gmail.com" className="input focus-within:border-[#19403B] focus-within:outline-none text-sm w-full" />
                </div>
                <div>
                    <h1 className='font-light text-sm mb-1'>Password*</h1>
                    <input type="text" placeholder="ex : 123456" className="input focus-within:border-[#19403B] focus-within:outline-none text-sm w-full" />
                </div>
                <div className='flex my-6 justify-between items-center text-sm'>
                    <label className="label">
                        <input type="checkbox" defaultChecked className="checkbox size-5" />
                        Ingat Saya
                    </label>
                    <div className=' opacity-60'>Lupa password</div>
                </div>
                <a href="/User/Dashboard">
                    <button className="w-full mt-2 bg-[#D3FF53] font-lights py-3.5 rounded text-black text-[13px]">Login</button>
                </a>
                <div className='mt-4 text-center'>
                    <a href="/Daftar" className='text-sm underline font-light'>Belum Mempunyai Akun?</a>
                </div>
            </div>
             <div className='flex gap-4 justify-center mt-16'>
                    <a href='/User/Dashboard' className='flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-[#19403B] hover:bg-[#f5f5f5] transition-all duration-200 active:scale-95'>
                        <User size={24} strokeWidth={1} className='text-gray-700' />
                        <span className='text-xs font-light text-gray-600'>Client</span>
                    </a>
                    <a href='/Seller' className='flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-[#19403B] hover:bg-[#f5f5f5] transition-all duration-200 active:scale-95'>
                        <Store size={24} strokeWidth={1} className='text-gray-700' />
                        <span className='text-xs font-light text-gray-600'>Seller</span>
                    </a>
                    <a href='/Driver/Dashboard' className='flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-[#19403B] hover:bg-[#f5f5f5] transition-all duration-200 active:scale-95'>
                        <Truck size={24} strokeWidth={1} className='text-gray-700' />
                        <span className='text-xs font-light text-gray-600'>Driver</span>
                    </a>
                </div>
        </div>
    )
}
