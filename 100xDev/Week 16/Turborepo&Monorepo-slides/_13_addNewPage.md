# Let’s add a new page

Try adding a new page to `/admin` to the `apps/web` next.js website.

It should use a simple `Admin` component from `packages/ui`

Steps to follow -

*   Create a new file `admin.tsx` inside `packages/ui/src`

*   Export a simple React component

Solution

```javascript
"use client";

export const Admin = () => {
  return (
    <h1>
        hi from admin component
    </h1>
  );
};
```

*   Add the component to exports in `packages/ui/package.json`

*   Create `apps/web/app/admin/page.tsx`

*   Export a default component that uses the `@repo/ui/admin` component

*   Run npm run dev (either in root or in `apps/web` ) and try to see the website

*   Go to [http://localhost:3000/admin](http://localhost:3000/admin)

💡

You can also use the `packages/ui/turbo/generators` to quickly bootstrap a new component Try running `npx gen react-component` and notice it’ll do step 1, 2, 3 for you in one cli call