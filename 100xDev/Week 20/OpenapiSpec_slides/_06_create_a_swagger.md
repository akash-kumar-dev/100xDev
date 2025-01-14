# Create a swagger page

Given the OpenAPI Spec, you can create a swagger page for your app

[https://hono.dev/snippets/swagger-ui](https://hono.dev/snippets/swagger-ui)

```javascript
app.get('/ui', swaggerUI({ url: '/doc' }))
```

Try visiting [http://localhost:8787/ui](http://localhost:8787/ui)