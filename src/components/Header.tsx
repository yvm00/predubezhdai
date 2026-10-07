"use client";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 p-5 select-none pointer-events-none">
      <div className="flex items-center justify-between">
        <p className="font-syne text-white text-[20px]">PREDUBEZHDAI</p>
        <p className="font-jost font-light text-white text-[20px]">manifesto</p>
      </div>
    </header>
  );
}
