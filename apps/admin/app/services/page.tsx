"use client";

import { CrudResource } from "../../components/CrudResource";

export default function ServicesPage() {
  return <CrudResource title="Services" description="Manage the service cards shown on the public Services page." endpoint="/services" fields={[{ name: "title", label: "Service title", required: true }, { name: "slug", label: "Section anchor / slug", required: true }, { name: "icon", label: "Font Awesome icon", required: true }, { name: "description", label: "Description", type: "textarea", required: true }, { name: "sortOrder", label: "Display order", type: "number" }, { name: "isPublished", label: "Published", type: "checkbox" }]} columns={[{ key: "title", label: "Title" }, { key: "slug", label: "Slug" }, { key: "icon", label: "Icon" }, { key: "sortOrder", label: "Order" }, { key: "isPublished", label: "Published" }]} />;
}
