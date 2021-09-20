import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  base:'/filmy/',
  plugins: [reactRefresh(), tsconfigPaths()],
})
