import React from 'react';

const Stats = () => {
  const stats = [
    { number: '25+', label: 'Tahun Berpengalaman' },
    { number: '1500+', label: 'Siswa Aktif' },
    { number: '98%', label: 'Lulus ke PTN' },
    { number: '50+', label: 'Guru Profesional' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;