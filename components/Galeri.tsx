import Image from "next/image";

const galleryImages = [
    "/placeholder1.jpg",
    "/placeholder2.jpg",
    "/placeholder3.jpg",
    "/placeholder4.jpg",
    "/placeholder5.jpg",
    "/placeholder6.jpg",
    "/placeholder7.jpg",
    "/placeholder8.jpg",
    "/placeholder9.jpg",
    "/placeholder10.jpg",
];

export default function Gallery() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">Pemenang Minggu Ini & Sebelumnya</h2>
                <div className="mx-auto grid max-w-4xl grid-cols-2 justify-center gap-6">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="relative h-56 w-full md:h-64">
                            <Image
                                src={src}
                                alt={`Pemenang ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
