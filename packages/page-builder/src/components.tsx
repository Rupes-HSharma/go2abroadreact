import type { ReactNode } from "react";
import type { Data, NavigationNode, SectionNode, ThemeConfig } from "./schema";
import { safeUrl } from "./schema";

export type SectionProps = {
  data: Data;
  settings: SectionNode["settings"];
  assetBase?: string;
  navigation?: NavigationNode[];
};
const text = (d: Data, key: string) =>
  typeof d[key] === "string" || typeof d[key] === "number"
    ? String(d[key])
    : "";
const items = (d: Data) =>
  Array.isArray(d.items)
    ? d.items.filter(
        (v): v is Data =>
          typeof v === "object" && v !== null && !Array.isArray(v),
      )
    : [];
export function assetUrl(src: string, base = "") {
  return safeUrl(src, true)
    ? /^\/uploads\//.test(src)
      ? base + src
      : src
    : "";
}
function Photo({ data, assetBase }: SectionProps) {
  const src = assetUrl(text(data, "image"), assetBase);
  return src ? (
    <img
      className="pb-photo"
      src={src}
      alt={text(data, "imageAlt")}
      loading="lazy"
    />
  ) : null;
}
function Action({ data }: SectionProps) {
  const href = text(data, "buttonUrl");
  return text(data, "buttonText") && href && safeUrl(href) ? (
    <a className="pb-button" href={href}>
      {text(data, "buttonText")} <span aria-hidden="true">↗</span>
    </a>
  ) : null;
}
export function NavigationLinks({ nodes }: { nodes: NavigationNode[] }) {
  return (
    <ul className="pb-navigation">
      {nodes
        .filter((n) => n.isVisible)
        .map((n) => (
          <li key={n.id}>
            <a href={safeUrl(n.url) ? n.url : "#"}>{n.label}</a>
            {n.children.some((c) => c.isVisible) && (
              <NavigationLinks nodes={n.children} />
            )}
          </li>
        ))}
    </ul>
  );
}
export function HeaderSection(props: SectionProps) {
  return (
    <header className="pb-header">
      <a href="/" className="pb-brand">
        <Photo {...props} />
        {text(props.data, "siteName")}
      </a>
      <nav aria-label="Website navigation">
        <NavigationLinks nodes={props.navigation ?? []} />
      </nav>
      <Action {...props} />
    </header>
  );
}
export function HeroSection(props: SectionProps) {
  return (
    <div className="pb-split pb-hero">
      <div>
        <p className="pb-eyebrow">{text(props.data, "eyebrow")}</p>
        <h1>{text(props.data, "title")}</h1>
        <p className="pb-description">{text(props.data, "description")}</p>
        <Action {...props} />
      </div>
      <Photo {...props} />
    </div>
  );
}
// A deliberately small Markdown vocabulary. React escapes all raw HTML.
export function RichText({ value }: { value: string }) {
  const inline = (line: string): ReactNode[] =>
    line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link)
        return safeUrl(link[2]) ? (
          <a key={i} href={link[2]}>
            {link[1]}
          </a>
        ) : (
          link[1]
        );
      return part.startsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      );
    });
  return (
    <div className="pb-richtext">
      {value
        .split("\n")
        .map((line, i) =>
          line.startsWith("## ") ? (
            <h2 key={i}>{inline(line.slice(3))}</h2>
          ) : line.startsWith("- ") ? (
            <p key={i}>• {inline(line.slice(2))}</p>
          ) : (
            <p key={i}>{inline(line)}</p>
          ),
        )}
    </div>
  );
}
export function RichTextSection({ data }: SectionProps) {
  return (
    <>
      <h2>{text(data, "title")}</h2>
      <RichText value={text(data, "body")} />
    </>
  );
}
export function ImageTextSection(props: SectionProps) {
  const d = props.data;
  return (
    <div
      className={
        "pb-split " + (d.imagePosition === "right" ? "pb-image-right" : "")
      }
    >
      <Photo {...props} />
      <div>
        <h2>{text(d, "title")}</h2>
        <RichText value={text(d, "body")} />
        <Action {...props} />
        {text(d, "video") && (
          <video
            controls
            preload="metadata"
            src={assetUrl(text(d, "video"), props.assetBase)}
          />
        )}
        {text(d, "file") && (
          <p>
            <a href={assetUrl(text(d, "file"), props.assetBase)}>
              Download resource
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
function Cards(props: SectionProps) {
  return (
    <>
      <h2>{text(props.data, "title")}</h2>
      <p className="pb-description">{text(props.data, "description")}</p>
      <div className="pb-grid">
        {items(props.data).map((d, i) => (
          <article className="pb-card" key={i}>
            <Photo {...props} data={d} />
            <span className="pb-icon">{text(d, "icon")}</span>
            <h3>{text(d, "title")}</h3>
            <p>{text(d, "description")}</p>
            {text(d, "url") && safeUrl(text(d, "url")) && (
              <a href={text(d, "url")}>Learn more ↗</a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
export function ServicesSection(p: SectionProps) {
  return <Cards {...p} />;
}
export function FeaturesSection(p: SectionProps) {
  return <Cards {...p} />;
}
export function StatisticsSection({ data }: SectionProps) {
  return (
    <>
      <h2>{text(data, "title")}</h2>
      <div className="pb-grid">
        {items(data).map((d, i) => (
          <div className="pb-stat" key={i}>
            <strong>
              {text(d, "value")}
              {text(d, "suffix")}
            </strong>
            <p>{text(d, "label")}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export function TestimonialsSection(p: SectionProps) {
  return (
    <>
      <h2>{text(p.data, "title")}</h2>
      <div className="pb-grid">
        {items(p.data).map((d, i) => (
          <figure className="pb-card" key={i}>
            <blockquote>“{text(d, "quote")}”</blockquote>
            <figcaption>
              <Photo {...p} data={d} />
              <strong>{text(d, "name")}</strong>
              <p>{text(d, "detail")}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
export function FAQSection({ data }: SectionProps) {
  return (
    <>
      <h2>{text(data, "title")}</h2>
      {items(data).map((d, i) => (
        <details
          className="pb-faq"
          open={data.expanded === true || undefined}
          key={i}
        >
          <summary>{text(d, "question")}</summary>
          <p>{text(d, "answer")}</p>
        </details>
      ))}
    </>
  );
}
export function CTASection(p: SectionProps) {
  return (
    <div className="pb-cta">
      <h2>{text(p.data, "title")}</h2>
      <p className="pb-description">{text(p.data, "description")}</p>
      <Action {...p} />
    </div>
  );
}
export function FooterSection(p: SectionProps) {
  return (
    <footer>
      <div className="pb-split">
        <div>
          <h2>{text(p.data, "title")}</h2>
          <p>{text(p.data, "description")}</p>
          <p>{text(p.data, "contact")}</p>
        </div>
        <NavigationLinks nodes={p.navigation ?? []} />
      </div>
      <p className="pb-copyright">{text(p.data, "copyright")}</p>
    </footer>
  );
}
export function themeStyles(theme: ThemeConfig) {
  return {
    "--pb-primary": theme.primary,
    "--pb-secondary": theme.secondary,
    "--pb-accent": theme.accent,
    "--pb-heading": theme.headingFont,
    "--pb-body": theme.bodyFont,
    "--pb-radius": theme.radius + "px",
  } as React.CSSProperties;
}
