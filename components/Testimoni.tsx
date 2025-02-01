import { Card } from "flowbite-react";

const testimonials = [
    {
        name: "Rizky Saputra",
        text: "Tempat yang keren buat berbagi pengalaman fotografi kereta api! Banyak ilmu baru yang bisa didapat.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Dewi Ananda",
        text: "Komunitas yang solid! Saya jadi lebih paham teknik fotografi kereta dan dapat teman baru.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Bagas Pratama",
        text: "Sangat membantu buat pemula seperti saya. Semua ramah dan mau berbagi ilmu.",
        image: "https://via.placeholder.com/100",
    },
];

export default function Testimoni() {
    return (
        <section id="testimoni" className="bg-gray-100 py-16">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-bold text-gray-800">Apa Kata Mereka?</h2>
                <p className="mt-2 text-gray-600">Pendapat para fotografer tentang komunitas ini.</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="rounded-lg bg-white p-6 shadow-md">
                            <img src={testimonial.image} alt={testimonial.name} className="mx-auto mb-4 size-16 rounded-full" />
                            <p className="italic text-white">"{testimonial.text}"</p>
                            <h3 className="mt-4 font-semibold text-white">{testimonial.name}</h3>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
