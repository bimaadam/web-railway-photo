import Image from "next/image";
import { FaCameraRetro, FaUsers, FaTrain } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="bg-gray-100 py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
                {/* Gambar */}
                <div className="relative">
                    <Image
                        src="/bg-kereta.jpg"
                        alt="Fotografi Kereta Api"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />

                    <div className="absolute -left-5 -top-5 rounded-lg bg-teal-500 px-4 py-2 text-sm text-white shadow-md">
                        🚆 Railway Photography
                    </div>
                </div>

                {/* Teks */}
                <div>
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">Tentang Kami</h2>
                    <p className="leading-relaxed text-gray-600">
                        Kami adalah komunitas bagi para pecinta <strong>fotografi kereta api</strong>.
                        Di sini, kamu bisa <strong>nongkrong, belajar, dan berbagi</strong> pengalaman serta ilmu seputar fotografi perkeretaapian.
                    </p>
                    <p className="mt-2 font-semibold text-gray-600">
                        📌 **Catatan:** Selain foto yang berhubungan dengan kereta api, harap **tidak** mengunggahnya di sini.
                        Terima kasih atas pengertiannya! 😊
                    </p>

                    {/* Icon Features */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <FaCameraRetro className="mb-2 text-3xl text-teal-600" />
                            <p className="font-semibold text-gray-700">Belajar Fotografi</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaTrain className="mb-2 text-3xl text-teal-600" />
                            <p className="font-semibold text-gray-700">Cinta Kereta Api</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUsers className="mb-2 text-3xl text-teal-600" />
                            <p className="font-semibold text-gray-700">Komunitas Solid</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
