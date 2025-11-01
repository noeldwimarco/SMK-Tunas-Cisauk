import React from 'react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Membentuk Generasi Unggul & Berkarakter
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 opacity-90">
          SMA Tunas Cisauk - Tempat Terbaik untuk Mengembangkan Potensi dan Meraih Prestasi
        </p>
        <a
          href="#kontak"
          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;