import React from 'react';

const Facilities = () => {
  const facilities = [
    '🖥️ Lab Komputer',
    '🔬 Lab IPA',
    '📖 Perpustakaan Digital',
    '🏀 Sports Hall',
    '🎭 Auditorium',
    '🍽️ Kantin Modern',
    '🚌 Bus Sekolah',
    '🏥 Klinik Kesehatan'
  ];

  return (
    <section id="fasilitas" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Fasilitas Modern
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 h-32 sm:h-40 lg:h-48 rounded-2xl flex items-center justify-center text-white text-base sm:text-lg lg:text-xl font-bold text-center p-4 hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              {facility}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;