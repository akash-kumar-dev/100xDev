TypeScript compiler cannot compile the code when we import it to other modules like common.
For that, we can use esbuild or tsup to compile the code.

## Using esbuild
```bash
npx esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js
```

## Using tsup
First, install the tsup package:
```bash
npm i tsup
```

Create a `tsup.config.ts` file:

```ts
import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  clean: true,
  format: ["cjs"],
  ...options,
}));
```

Add a build script in `package.json`:
```json
{
  "scripts": {
    "build": "tsup"
  }
}
```

Run the build command:
```bash
npm run build
```