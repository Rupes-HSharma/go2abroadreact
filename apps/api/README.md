# Go2Abroad API

NestJS backend API for the frontend, admin, and student applications.

Implementation: NestJS + Prisma + MySQL, with modules for authentication, users,
students, website settings, pages, media, blogs, catalogue records, and leads.

Student applications, documents, destination management, and notifications are
planned workflows; they are not fully implemented API modules yet.

## Setup

Create `apps/api/.env` from `.env.example`, then set `DATABASE_URL` to your
MySQL connection string in `DATABASE_URL`.

```bash
npm --prefix apps/api install
npm run db:generate
npm run db:migrate
npm run dev:api
```

Health check: `GET http://localhost:4000/health`

## Authentication endpoints

- `POST /auth/admin/login`
- `POST /auth/student/register`
- `POST /auth/student/login`
- `POST /auth/logout`
- `POST /auth/password/forgot`
- `POST /auth/password/reset`

## Website settings endpoints

- `GET /settings/website`
- `POST /settings/website`
- `PATCH /settings/website`
- `DELETE /settings/website`
