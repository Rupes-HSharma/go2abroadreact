import { ApiBody } from "@nestjs/swagger";
import { componentRegistry, defaultTheme, metadataSchema } from "@go2abroad/page-builder";
const exampleDocument = {
  ...metadataSchema.parse({ title: "About", slug: "about" }),
  sections: [{ id: "c81fbf67-1569-4b91-b7d4-dc8fd37fe463", type: "hero", order: 0, isVisible: true, settings: {}, data: componentRegistry.hero.defaults }],
  theme: defaultTheme, navigation: [],
};
export const ConfigurationBody = (withRevision = false) => ApiBody({ schema: {
  type: "object", description: "Use the current document from GET /api/pages/:id. Component data is validated using the shared registry.",
  example: withRevision ? { revision: 0, document: exampleDocument } : exampleDocument,
} });
export const RevisionBody = () => ApiBody({ schema: { type: "object", required: ["revision"], properties: { revision: { type: "integer", minimum: 0, example: 0 } } } });
export const SectionBody = () => ApiBody({ schema: { type: "object", example: { type: "hero", data: componentRegistry.hero.defaults, order: 0, isVisible: true, settings: {} } } });
