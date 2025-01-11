/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',  // Включить экспорт статических файлов
  assetPrefix: isProd ? '/vertolet-landing/' : '',  // Указать префикс для GitHub Pages
  // basePath: '/vertolet-landing',  
  images: {
    unoptimized: true,  // Отключить оптимизацию изображений
  },
};

module.exports = nextConfig;
