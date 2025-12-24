import { MoveLeft } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='p-6 h-screen'>
            <div>
                <MoveLeft size={24} />
            </div>
            <div className='mt-8'>
                <h1 className='font-light text-lg'>Daftar</h1>
                <p className='text-sm font-extralight'>Selamat datang di kara app</p>
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
                <a href="/Login">
                    <button className="w-full mt-2 bg-[#D3FF53] font-lights py-3.5 rounded text-black text-[13px]">Daftar</button>
                </a>
                <div className='mt-4 text-center'>
                    <a href="/Login" className='text-sm underline font-light'>Sudah Mempunyai Akun?</a>
                </div>
            </div>
        </div>
    )
}
