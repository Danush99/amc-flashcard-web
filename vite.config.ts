import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import envCompatible from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',

  plugins: [react(), envCompatible(), tsconfigPaths(), svgrPlugin()],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  build: {
    outDir: 'build'
  },

  base: '/'
});
