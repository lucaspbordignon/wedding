/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['elsoezhobpdlrxpdggfg.supabase.co'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
