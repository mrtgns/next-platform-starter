/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)', // Tüm yollar için geçerli olacak
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' https://www.chatbase.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            {
              key: 'Permissions-Policy',
              value: 'geolocation=(), microphone=(), camera=()'
            }
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;