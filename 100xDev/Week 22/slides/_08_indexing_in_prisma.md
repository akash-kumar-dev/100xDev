# Indexes in Prisma

Ref - [https://www.prisma.io/docs/orm/prisma-schema/data-model/indexes](https://www.prisma.io/docs/orm/prisma-schema/data-model/indexes)

You can add an index to a `model` in prisma by doing the following -

```javascript
model User {
  id        String   @id @default(uuid())
  username  String   @unique
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id          String   @id @default(uuid())
  title       String
  content     String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  userId      String
  user        User     @relation(fields: [userId], references: [id])

  @@index([userId])
}
 
```

Let’s look at daily code and see where all can we introduce an index

[https://github.com/code100x/daily-code/blob/main/packages/db/prisma/schema.prisma#L129](https://github.com/code100x/daily-code/blob/main/packages/db/prisma/schema.prisma#L129)