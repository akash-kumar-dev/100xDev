# Adding Node polyfill

[https://www.npmjs.com/package/vite-plugin-node-polyfills](https://www.npmjs.com/package/vite-plugin-node-polyfills)

*   Install `vite-plugin-node-polyfills`

```javascript
npm install --save-dev vite-plugin-node-polyfills
```

*   Update `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(),],
})
```