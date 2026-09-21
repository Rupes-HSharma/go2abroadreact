import type { PageDocument, SectionNode } from "./schema";
import { componentRegistry } from "./registry";
import { themeStyles } from "./components";

export function SectionRenderer({
  section,
  assetBase,
  navigation,
}: {
  section: SectionNode;
  assetBase?: string;
  navigation?: PageDocument["navigation"];
}) {
  const entry = Object.hasOwn(componentRegistry, section.type)
    ? componentRegistry[section.type]
    : undefined;
  if (!entry || !section.isVisible) return null;
  const result = entry.schema.safeParse(section.data);
  if (!result.success) return null;
  const Component = entry.component;
  return (
    <section
      data-section-type={section.type}
      className={
        "pb-section pb-spacing-" + (section.settings?.padding ?? "normal")
      }
      style={{
        background: section.settings?.background,
        color: section.settings?.color,
        textAlign: section.settings?.align,
      }}
    >
      <Component
        data={result.data}
        settings={section.settings ?? {}}
        assetBase={assetBase}
        navigation={navigation}
      />
    </section>
  );
}
export function PageRenderer({
  document,
  assetBase,
}: {
  document: PageDocument;
  assetBase?: string;
}) {
  return (
    <div className="pb-site" style={themeStyles(document.theme)}>
      {document.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          navigation={document.navigation}
          assetBase={assetBase}
        />
      ))}
    </div>
  );
}
