#### vite-plugin-node-polyfills 
- A Vite plugin to polyfill Node's Core Modules for browser environments
- [npm](https://www.npmjs.com/package/vite-plugin-node-polyfills)
    ```bash
        npm install --save-dev vite-plugin-node-polyfills
    ```
- Add the plugin to vite.config.ts file.

    ```js
    import { defineConfig } from 'vite'
    import { nodePolyfills } from 'vite-plugin-node-polyfills'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        nodePolyfills(),
      ],
    })
    ```

```bash
solana-keygen grind --starts-with kir:1 # generate a new keypair with a public key that starts with kir:1
```