"use client";
import { CrudResource } from "../../components/CrudResource";
export default function CoursesPage() {
  return (
    <CrudResource
      title="Courses"
      description="Manage the course-level cards displayed on the Courses page."
      endpoint="/courses"
      fields={[
        { name: "title", label: "Card title", required: true },
        { name: "slug", label: "Section anchor / slug", required: true },
        {
          name: "level",
          label: "Level label",
          required: true,
          type: "select",
          options: [
            { value: "Undergraduate", label: "Undergraduate" },
            { value: "Postgraduate", label: "Postgraduate" },
            { value: "Management", label: "Management" },
            { value: "Doctorate", label: "Doctorate" },
            { value: "Diploma", label: "Diploma" },
            { value: "Foundation", label: "Foundation" },
          ],
        },
        { name: "field", label: "Field of study" },
        { name: "duration", label: "Duration / format" },
        {
          name: "description",
          label: "Card description",
          type: "textarea",
          required: true,
        },
        {
          name: "highlights",
          label: "Key highlights (one per line)",
          type: "textarea",
        },
        { name: "popularCountries", label: "Popular countries" },
        { name: "sortOrder", label: "Display order", type: "number" },
        {
          name: "universityId",
          label: "University (optional)",
          optionsEndpoint: "/universities",
        },
        { name: "isPublished", label: "Published", type: "checkbox" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "level", label: "Level" },
        { key: "sortOrder", label: "Order" },
        { key: "isPublished", label: "Published" },
      ]}
    />
  );
}
