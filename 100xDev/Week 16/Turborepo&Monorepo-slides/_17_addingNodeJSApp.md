# Adding a Node.js app

Everything else remains the same (Create a new project, add typescript, add express…)

The only thing that’s different is that `tsc` doesn’t perform great with turborepo

You can use either `tsup` or `esbuild` for building your backend application

1.  Create `apps/backend`

2.  Initialize empty ts repo

```javascript
npm init -y
npx tsc --init
```

1.  Use base tsconfig (Ref - [https://github.com/vercel/turbo/blob/main/examples/kitchen-sink/apps/api/tsconfig.json](https://github.com/vercel/turbo/blob/main/examples/kitchen-sink/apps/api/tsconfig.json) )

```javascript
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "lib": ["ES2015"],
    "module": "CommonJS",
    "outDir": "./dist",
  },
  "exclude": ["node_modules"],
  "include": ["."]
}
```

1.  Add dependencies

```javascript
npm i express @types/express
```

1.  Add `src/index.ts`

```javascript
import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})
```

1.  Update turbo.json

```javascript
{
  "extends": ["//"],
  "pipeline": {
    "build": {
      "outputs": ["dist/**"]
    }
  }
}
```

1.  Install esbuild

```javascript
npm install esbuild
```

1.  Add build script to package.json

```javascript
"build": "esbuild src/index.ts --platform=node --bundle --outdir=dist"
```