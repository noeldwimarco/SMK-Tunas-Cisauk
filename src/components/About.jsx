import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Tentang Kami
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">
              Sekolah Terdepan dalam Pendidikan Berkualitas
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              SMA Nusantara adalah institusi pendidikan terkemuka yang telah berdiri sejak 1998. Kami berkomitmen untuk memberikan pendidikan berkualitas tinggi yang memadukan kurikulum akademik yang kuat dengan pengembangan karakter siswa.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dengan tenaga pengajar profesional dan berpengalaman, serta fasilitas modern yang lengkap, kami siap membimbing setiap siswa untuk mencapai potensi maksimal mereka.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Visi kami adalah menjadi sekolah pilihan utama yang menghasilkan lulusan unggul, berkarakter, dan siap bersaing di tingkat nasional maupun internasional.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 h-64 lg:h-96 rounded-2xl flex items-center justify-center text-white text-6xl lg:text-8xl shadow-2xl">
            🏫
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;