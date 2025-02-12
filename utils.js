import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

// Tarayıcıda bir kaynağın boyutunu hesaplar (örneğin bir resmin boyutu)
export function getResourceSize(url) {
    if (typeof window !== "undefined" && window.performance) {
        const entry = window.performance.getEntriesByName(url)?.[0];
        return entry?.encodedBodySize || undefined;
    }
    return undefined;
}

// Belirtilen aralıkta rastgele bir sayı üretir
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Rastgele benzersiz bir ad üretir
const uniqueNamesConfig = {
    dictionaries: [adjectives, animals],
    separator: '-',
    length: 2
};
export function uniqueName() {
    return uniqueNamesGenerator(uniqueNamesConfig) + "-" + randomInt(100, 999);
}

// Çevresel değişkene bağlı olarak yükleme özelliğini kontrol eder
export const uploadDisabled = process.env.NEXT_PUBLIC_DISABLE_UPLOADS?.toLowerCase() === "true";