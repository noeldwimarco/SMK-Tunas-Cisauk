import React from 'react';

const Contact = () => {
  return (
    <section id="kontak" className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Bergabunglah Bersama Kami!
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Daftarkan putra-putri Anda sekarang dan jadilah bagian dari keluarga besar SMA Nusantara
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-12"
        >
          Hubungi Kami
        </a>
        
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">📍</div>
            <strong className="block mb-2 text-lg">Alamat</strong>
            <p className="text-sm opacity-90">
              Jl. Pendidikan No. 123<br/>
              Jakarta Selatan, 12345
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">📞</div>
            <strong className="block mb-2 text-lg">Telepon</strong>
            <p className="text-sm opacity-90">
              (021) 1234-5678<br/>
              0812-3456-7890
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">✉️</div>
            <strong className="block mb-2 text-lg">Email</strong>
            <p className="text-sm opacity-90">
              info@smanusantara.sch.id<br/>
              ppdb@smanusantara.sch.id
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;