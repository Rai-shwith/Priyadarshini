import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:true
  },
  plugins: [react(), tailwindcss({
    config: {
      content: [
        './index.html', 
        './src/**/*.{js,jsx,ts,tsx}'  // Ensure it includes your React files
      ],
      theme: {
        extend: {
          colors: {
            primary: '#1E40AF',   // Custom primary blue
            secondary: '#F59E0B', // Custom secondary yellow
            background: '#F1F5F9', // Custom light background
            textPrimary: '#333333', // Custom dark text color
            textSecondary: '#6B7280', // Custom gray text color
          },
        },
      },
      plugins: [],
    },
  }
  )],
})
