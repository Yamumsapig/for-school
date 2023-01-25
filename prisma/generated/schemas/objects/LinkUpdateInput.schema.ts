import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { RetrospectiveUpdateOneRequiredWithoutLinkNestedInputObjectSchema } from './RetrospectiveUpdateOneRequiredWithoutLinkNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { WorkspaceUpdateOneRequiredWithoutLinkNestedInputObjectSchema } from './WorkspaceUpdateOneRequiredWithoutLinkNestedInput.schema'

const Schema: z.ZodType<Prisma.LinkUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    expiration: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    retro: z
      .lazy(() => RetrospectiveUpdateOneRequiredWithoutLinkNestedInputObjectSchema)
      .optional(),
    workspace: z
      .lazy(() => WorkspaceUpdateOneRequiredWithoutLinkNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const LinkUpdateInputObjectSchema = Schema