"use client";

import { CrudResource } from "../../components/CrudResource";

export default function UsersPage() {
  return (
    <CrudResource
      title="Users"
      description="Manage admin, counsellor, and student accounts and their roles."
      endpoint="/users"
      fields={[
        { name: "name", label: "Full name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone" },
        { name: "password", label: "Password", type: "password", required: true },
        {
          name: "role",
          label: "Role",
          type: "select",
          required: true,
          options: [
            { value: "ADMIN", label: "Admin" },
            { value: "COUNSELLOR", label: "Counsellor" },
            { value: "STUDENT", label: "Student" },
          ],
        },
        {
          name: "status",
          label: "Status",
          type: "select",
          options: [
            { value: "ACTIVE", label: "Active" },
            { value: "INACTIVE", label: "Inactive" },
            { value: "SUSPENDED", label: "Suspended" },
          ],
        },
      ]}
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
        { key: "status", label: "Status" },
        { key: "lastLoginAt", label: "Last login" },
      ]}
    />
  );
}
