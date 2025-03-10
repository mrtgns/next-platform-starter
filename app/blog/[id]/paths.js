import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function generateStaticParams() {
    const querySnapshot = await getDocs(collection(db, "bloglar"));
    const paths = querySnapshot.docs.map(doc => ({
        id: doc.id
    }));

    return paths;
}