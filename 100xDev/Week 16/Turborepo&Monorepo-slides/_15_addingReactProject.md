# Adding React projects

1.  Go to the apps folder

```bash
cd apps
```

2\. Create a fresh vite app

```bash
npm create vite@latest 
```

1.  Update package.json to include `@repo/ui` as a dependency

```javascript
"@repo/ui": "*",
```

1.  Run npm install in the root folder

```bash
cd ..
npm install
```

1.  Run npm run dev

```bash
npm run dev
```

1.  Try importing something from the `ui` package and rendering it

2.  Add a `turbo.json` to the react folder to override the `outputs` object of this module.

Ref [https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces)

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