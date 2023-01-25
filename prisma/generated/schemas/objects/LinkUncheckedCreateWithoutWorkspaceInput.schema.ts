import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.LinkUncheckedCreateWithoutWorkspaceInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    retrospectiveId: z.string(),
  })
  .strict()

export const LinkUncheckedCreateWithoutWorkspaceInputObjectSchema = Schema