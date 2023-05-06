import { fileURLToPath, URL } from 'node:url';
import fs from 'fs';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 对element进行强制预构建，解决开发环境reloading问题
  const optimizeDepsElementPlusIncludes = ['element-plus/es'];
  fs.readdirSync('node_modules/element-plus/es/components').map(dirname => {
    fs.access(`node_modules/element-plus/es/components/${dirname}/style/css.mjs`, err => {
      if (!err) {
        optimizeDepsElementPlusIncludes.push(`element-plus/es/components/${dirname}/style/css`);
      }
    });
  });
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const viteEnv = loadEnv(mode, process.cwd());
  const isProduction = viteEnv.VITE_USER_NODE_ENV === 'production';
  const isStaging = viteEnv.VITE_USER_NODE_ENV === 'staging';
  return {
    optimizeDeps: {
      include: optimizeDepsElementPlusIncludes,
    },
    css: {
      devSourcemap: true,
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({ resolvers: [ElementPlusResolver()], dts: true }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
        dts: true,
        eslintrc: {
          enabled: true,
        },
      }),
      isStaging && visualizer(), // 预发布模式可以查看包体积报告
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    esbuild: {
      // 打包后去除打印及断点
      pure: isProduction ? ['console.log', 'debugger'] : [],
    },
    build: {
      reportCompressedSize: false, // 禁用 gzip 压缩大小报告 提高构建速度
      rollupOptions: {
        output: {
          // 静态资源分拆打包
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    server: {
      port: 10010,
      open: true,
    },
  };
});
