import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',        // Cho phép truy cập từ máy khác
    port: 5179,             // Chọn port mong muốn
    strictPort: true,       // Không tự đổi nếu port đang bị chiếm
  }
})
