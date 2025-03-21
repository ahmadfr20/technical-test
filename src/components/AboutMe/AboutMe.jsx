import React from "react";
import profilePic from "../../assets/profil.png";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          Ahmad Fathoni Rizaldi
        </h1>
        <p className="text-black text-sm">Full Stack Developer</p>
        <div className="mt-6 text-left space-y-3">
          <p><strong className="text-black">Tempat, Tanggal Lahir:</strong> Bandung, Indonesia</p>
          <p><strong className="text-black">Almamater:</strong> Universitas Logistik dan Bisnis Internasional</p>
          <p><strong className="text-black">Pengalaman Kerja:</strong></p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Full Stack Developer - PT. Bejana Investidata Globalindo (6 bulan)</li>
            <li>Freelance Full Stack Developer (5 bulan)</li>
          </ul>
          <p><strong className="text-black">Hobi:</strong> Ngoding, membaca, bermain game, dan eksplorasi teknologi baru</p>
        </div>
        <div className="mt-6">
          <a 
            href="/" 
            className="px-4 py-2 bg-black text-white rounded-lg transition duration-300"
          >
            Kembali ke Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
