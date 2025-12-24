import Image from "next/image";

export default function Home() {
  return (
    <div id="Open" className="h-dvh w-full flex justify-between flex-col">
      <div className="w-full flex justify-end p-8"><img src="/Logo.png" className="w-18" alt="" /></div>
      <div className="h-full w-full flex items-end bg-linear-to-t from-black to-transparent">
        <div className="px-3 pb-12 text-center w-full  space-y-2">
          <h1 className=" text-2xl text-[#D3FF53] font-light">Mudah & Cepat</h1>
          <p className="font-extralight text-white text-[13px]">Buat kebutuhan harian dapur mu dalam genggaman tangan</p>
          <a href="/Login">
            <button className="w-full mt-8 bg-[#D3FF53] font-light p-4 rounded-full text-black text-sm">Login/Daftar</button>
          </a>
        </div>
      </div>
    </div>
  );
}
