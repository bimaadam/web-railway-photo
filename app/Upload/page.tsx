"use client";

import { Navigasi } from "@/components/Navigasi";
import { useState } from "react";

export default function UploadFoto() {
    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!image) {
            alert("Pilih foto terlebih dahulu!");
            return;
        }

        const formData = new FormData();
        formData.append("file", image);
        formData.append("title", title);
        formData.append("description", description);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                alert("Foto berhasil di-upload!");
            } else {
                alert("Gagal mengupload foto!");
            }
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <>
            <Navigasi />
            <section className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">Upload Foto Event Mingguan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Judul Foto</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded border p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium" aria-placeholder="EXIF DATA PADA FOTO SERTAKAN">Deskripsi</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full rounded border p-2"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Pilih Foto</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" required />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Upload Foto
                    </button>
                </form>
            </section>
        </>
    );
}
