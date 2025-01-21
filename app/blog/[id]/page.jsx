"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Next.js Router'dan parametreyi al
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
    return <div>Yükleniyor...</div>;
  }

  if (!blog) {
    return <div>Blog bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.baslik}</h1>
      <p>{blog.icerik}</p>
    </div>
  );
}