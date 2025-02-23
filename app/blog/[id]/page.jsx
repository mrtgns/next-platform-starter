"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function BlogDetail() {
  const { id } = useParams(); // URL'den blog ID'sini al
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      
      try {
        const docRef = doc(db, "bloglar", id); // Firestore'dan veriyi çek
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Belirtilen ID'ye sahip blog bulunamadı.");
        }
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg text-gray-300">Yükleniyor...</div>;
  }

  if (!blog) {
    return <div className="text-center text-lg text-gray-300">Blog bulunamadı.</div>;
  }

  return (
    <div className="bg-gray-600 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">{blog.baslik}</h1>
        <div className="text-lg leading-relaxed space-y-6">
          {blog.icerik.map((paragraph, index) => (
            <p key={index} className="text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}