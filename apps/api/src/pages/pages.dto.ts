import { BadRequestException } from "@nestjs/common";
import { z } from "zod";
import {
  documentSchema,
  metadataSchema,
  sectionSchema,
} from "@go2abroad/page-builder";

export function validate<T>(
  schema: z.ZodType<T, z.ZodTypeDef, unknown>,
  value: unknown,
): T {
  const result = schema.safeParse(value);
  if (!result.success)
    throw new BadRequestException(
      result.error.issues.map(
        (issue) => issue.path.join(".") + ": " + issue.message,
      ),
    );
  return result.data;
}
export const createPageSchema = metadataSchema
  .partial()
  .required({ title: true, slug: true });
export const updatePageSchema = createPageSchema.partial();
export const saveDraftSchema = z
  .object({ revision: z.number().int().min(0), document: documentSchema })
  .strict();
export const revisionSchema = z
  .object({ revision: z.number().int().min(0) })
  .strict();
export const createSectionSchema = z
  .object({
    type: z.string(),
    data: z.record(z.unknown()),
    settings: z.record(z.unknown()).optional(),
    order: z.number().int().min(0).optional(),
    isVisible: z.boolean().optional(),
  })
  .strict();
export const updateSectionSchema = createSectionSchema.partial();
export const reorderSchema = z
  .object({ sectionIds: z.array(z.string().uuid()).max(100) })
  .strict();
export const nodeSchema = sectionSchema;
