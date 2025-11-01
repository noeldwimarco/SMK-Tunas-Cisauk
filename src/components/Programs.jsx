import React from 'react';

const Programs = () => {
  const programs = [
    { 
      icon: '📚', 
      title: 'Akselerasi Akademik', 
      desc: 'Program khusus untuk siswa berprestasi dengan kurikulum dipercepat dan pembimbingan intensif menuju PTN favorit.' 
    },
    { 
      icon: '🌍', 
      title: 'Bilingual Class', 
      desc: 'Kelas dengan pengajaran dwi bahasa (Indonesia-Inggris) untuk mempersiapkan siswa menghadapi era globalisasi.' 
    },
    { 
      icon: '🔬', 
      title: 'STEM Excellence', 
      desc: 'Program Science, Technology, Engineering & Math dengan laboratorium lengkap dan project-based learning.' 
    },
    { 
      icon: '🎨', 
      title: 'Creative Arts', 
      desc: 'Pengembangan bakat seni dan kreativitas melalui musik, teater, seni rupa, dan desain multimedia.' 
    },
    { 
      icon: '⚽', 
      title: 'Sports Academy', 
      desc: 'Pembinaan olahraga prestasi dengan pelatih bersertifikat di berbagai cabang olahraga.' 
    },
    { 
      icon: '💼', 
      title: 'Leadership Program', 
      desc: 'Pelatihan kepemimpinan dan soft skills untuk mempersiapkan pemimpin masa depan.' 
    }
  ];

  return (
    <section id="program" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Program Unggulan
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="text-5xl lg:text-6xl mb-4">{program.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;