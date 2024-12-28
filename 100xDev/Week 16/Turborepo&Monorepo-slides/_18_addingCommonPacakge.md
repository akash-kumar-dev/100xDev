# Adding a `common` module

A lot of times you need a module that can be shared by both frontend and backend apps

1.  Initialize a `packages/common` module

```javascript
cd packages
mkdir common
```

1.  Initialize an empty node.js project

```javascript
npm init -y
npx tsc --init
```

1.  Change the name to `@repo/common`

2.  Export a few things from `src/index.ts`

```javascript
export const NUMBER = 1;
```

1.  Add it to the `package.json` of various apps (next app/react app/node app)

```javascript
"@repo/common": "*",
```

1.  Import it in there and try to use it

2.  Run npm install in root folder and see if it works as expected