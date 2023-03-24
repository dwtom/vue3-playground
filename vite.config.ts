import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const viteEnv = loadEnv(mode, process.cwd());
  const isProduction = viteEnv.VITE_USER_NODE_ENV === 'production';
  return {
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
    },
    server: {
      port: 10010,
      open: true,
    },
  };
});
