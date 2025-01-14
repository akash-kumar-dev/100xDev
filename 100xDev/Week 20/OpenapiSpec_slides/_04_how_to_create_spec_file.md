# How to create a spec

1.  Write it by hand (bad, but still happens)

2.  Auto generate it from your code

1.  Easy in languages that have deep types like Rust
2.  Slightly harder in languages like Go/Rust
3.  Node.js has some libraries/codebases that let you do it

1.  With express - [https://www.npmjs.com/package/express-openapi](https://www.npmjs.com/package/express-openapi) (highly verbose)
2.  Without express - [https://github.com/lukeautry/tsoa](https://github.com/lukeautry/tsoa) (Cohort 1 video)

5.  Hono has a native implementation with zod - [https://hono.dev/snippets/zod-openapi](https://hono.dev/snippets/zod-openapi)

We’ll be going through `d`, but we’ve covered `c.ii` in Cohort 1