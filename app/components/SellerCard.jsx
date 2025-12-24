export default function SellerCard({ image, name, address, rating, reviews }) {
    return (
        <div className='bg-white border border-base-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition flex-shrink-0 w-64'>
            <div className='h-40 overflow-hidden bg-gray-200'>
                <img src={image} alt={name} className='w-full h-full object-cover' />
            </div>
            <div className='p-4'>
                <h2 className='font-medium text-sm'>{name}</h2>
                <p className='text-xs font-light text-gray-600 mt-1'>{address}</p>
                <div className='flex items-center gap-2 mt-3 mb-3'>
                    <span className='text-yellow-500 text-sm'>{rating}</span>
                    <span className='text-xs text-gray-600'>({reviews})</span>
                </div>
                <button className='w-full bg-[#D3FF53] text-black text-[12px] font-light py-2 rounded-lg hover:bg-[#c5f240] transition'>
                    Kunjungi
                </button>
            </div>
        </div>
    )
}
