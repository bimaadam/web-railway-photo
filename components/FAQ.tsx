import React from "react";

const FAQ = () => {
    return (
        <section className="bg-gray-100 py-12 dark:bg-gray-900" id="faq">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">FAQ (Pertanyaan yang Sering Diajukan)</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <details key={index} className="rounded-lg bg-white p-4 text-black shadow-md">
                            <summary className="cursor-pointer font-semibold">{item.question}</summary>
                            <p className="mt-2 text-gray-700">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section className="mb-0 bg-gradient-to-r from-blue-700 to-blue-500 py-16 text-center text-white dark:bg-gradient-to-r  dark:from-orange-400 dark:to-blue-900" id="cta">
            <div id="daftar" className="mx-auto max-w-4xl px-6">
                <h2 className="mb-4 text-4xl font-bold">Gabung Sekarang & Tunjukkan Fotografi Kereta Terbaikmu!</h2>
                <p className="mb-6 text-lg">Jangan lewatkan kesempatan untuk menjadi pemenang minggu ini.</p>
                <a href="/login" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition-all hover:bg-gray-200 dark:bg-gray-900">
                    Daftar Sekarang
                </a>
            </div>
        </section>
    );
};

const faqData = [
    { question: "Bagaimana cara mengikuti event mingguan ini?", answer: "Daftar akun dulu, lalu unggah foto kereta terbaik lo di halaman upload." },
    { question: "Apakah ada biaya untuk mengikuti event ini?", answer: "Gratis! Semua orang bisa ikut tanpa dipungut biaya." },
    { question: "Bagaimana sistem penilaian pemenang?", answer: "Pemenang dipilih berdasarkan kualitas foto dan voting komunitas." },
    { question: "Berapa lama event berlangsung?", answer: "Setiap minggu, pemenang akan diumumkan hari Minggu jam 19.00 WIB." },
    { question: "Apa ada hadiah bagi pemenang?", answer: "Pemenang akan mendapatkan badge khusus dan fotonya dipajang di halaman galeri!" },
];

export { FAQ, CTA };
