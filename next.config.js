/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  swcMinify: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400,
  },
  
  // Compression
  compress: true,
  
  // Experimental features for performance  
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', '@tanstack/react-query', 'framer-motion'],
    optimizeCss: true,
    serverComponentsExternalPackages: ['firebase'],
    webpackBuildWorker: true,
    optimizeServerReact: true,
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  
  // Optimized webpack for TBT reduction
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 200000, // Smaller chunks for better loading
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };
      
      // Enable module concatenation for better performance
      config.optimization.concatenateModules = true;
    }
    return config;
  },
}

module.exports = nextConfig