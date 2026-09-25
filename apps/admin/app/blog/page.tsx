"use client";

import { CrudResource } from "../../components/CrudResource";

export default function BlogPage() {
  return (
    <CrudResource
      title="Blog posts"
      description="Create and manage articles published on the public website."
      endpoint="/admin/blog"
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "slug", label: "Slug", required: true },
        { name: "excerpt", label: "Excerpt", type: "textarea" },
        { name: "content", label: "Content", type: "textarea", required: true },
        { name: "coverImageUrl", label: "Cover image URL", type: "url" },
        {
          name: "status",
          label: "Status",
          type: "select",
          options: [
            { value: "DRAFT", label: "Draft" },
            { value: "PUBLISHED", label: "Published" },
            { value: "ARCHIVED", label: "Archived" },
          ],
        },
        { name: "publishedAt", label: "Publish date (ISO format)" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "status", label: "Status" },
        { key: "author.name", label: "Author" },
        { key: "publishedAt", label: "Published" },
      ]}
    />
  );
}
