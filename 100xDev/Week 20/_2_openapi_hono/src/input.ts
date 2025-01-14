import { z } from '@hono/zod-openapi'

// the input from the user on the route
export const ParamsSchema = z.object({
  id: z.string().min(3).openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '1212121',
    }),
})
