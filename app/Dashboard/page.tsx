"use client";

import { Footer1 } from "@/components/Footer1";
import { Navigasi } from "@/components/Navigasi";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Fetch foto dari API
        async function fetchPhotos() {
            const res = await fetch("/api/photos");
            const data = await res.json();
            setPhotos(data);
        }
        fetchPhotos();
    }, []);

    const handleSelectWinner = async (id: string) => {
        // API buat update status foto jadi pemenang
        await fetch(`/api/photos/${id}/winner`, { method: "PATCH" });
        alert("Foto telah dipilih sebagai pemenang!");
        window.location.reload();
    };

    return (
        <>
            <Navigasi />
            <div className="mx-auto max-w-4xl p-6">
                <h2 className="mb-4 text-2xl font-bold">Dashboard Admin</h2>
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th className="border p-2">Foto</th>
                            <th className="border p-2">Judul</th>
                            <th className="border p-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {photos.map((photo) => (
                            <tr key={photo.id}>
                                <td className="border p-2">
                                    <img src={photo.imageUrl} alt={photo.title} className="size-20 object-cover" />
                                </td>
                                <td className="border p-2">{photo.title}</td>
                                <td className="border p-2">
                                    {!photo.isWinner && (
                                        <button
                                            onClick={() => handleSelectWinner(photo.id)}
                                            className="rounded bg-green-600 px-3 py-1 text-white"
                                        >
                                            Pilih Pemenang
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-72 p-0">
                <Footer1 />
            </div>
        </>
    );
}
