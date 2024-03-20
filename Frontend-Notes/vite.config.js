import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     'api/':{target:'http://localhost:8000',
  //     secure:false,
  //   }
  //   }
  // },  
  plugins: [react()],
  server: {
    // windows
    host: '192.168.1.5',
    // linux
    // host: '192.168.1.1',
    port: 8111,
    // default
    // host : '127.0.0.1',
    // port : 8000
  }
})
