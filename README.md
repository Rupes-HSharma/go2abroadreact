# Go2Abroad

Go2Abroad is an npm monorepo for the public website, staff administration
dashboard, student portal, and NestJS backend API.

## Applications

| Application | Directory | Development URL | Purpose |
| --- | --- | --- | --- |
| Public website | `apps/frontend` | http://localhost:5173 | Public-facing React/Vite website |
| Admin dashboard | `apps/admin` | http://localhost:3001 | CMS and staff administration |
| Student portal | `apps/student` | http://localhost:3002 | Student-facing application |
| Backend API | `apps/api` | http://localhost:4000 | API, authentication, and content |

The API uses MySQL through Prisma. The reusable page-builder package is in
`packages/page-builder` and is built automatically before the development and
build commands that need it.

## Prerequisites

Install the following before starting:

- Node.js 20 or newer
- npm 10 or newer
- MySQL 8 or newer (XAMPP MySQL is supported)

Check your installed versions:

```bash
node --version
npm --version
mysql --version
```

## Initial setup

Run these commands from the repository root:

```bash
git clone <repository-url>
cd go2abroad
npm install
npm --prefix apps/frontend install
npm --prefix apps/admin install
npm --prefix apps/student install
npm --prefix apps/api install
```

Start MySQL and create the application database. The default local connection
expected by the project is `go2abroad` with user `root` and no password:

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS go2abroad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

If your MySQL credentials, host, port, or database name are different, update
`apps/api/.env` accordingly.

Create the environment files from their examples:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/admin/.env.example apps/admin/.env.local
```

Review the values in each file. In particular, change the API
`JWT_SECRET`, `SEED_ADMIN_PASSWORD`, and `SEED_STUDENT_PASSWORD` values.

Generate the Prisma client and apply the database migrations:

```bash
npm --prefix apps/api run db:generate
npm --prefix apps/api run db:migrate
```

The Prisma provider is configured for MySQL. The previous PostgreSQL migration
files are preserved under `apps/api/prisma/migrations-postgresql-archive/`; the
active migration history contains the MySQL baseline.

Optionally load the initial data:

```bash
npm --prefix apps/api run db:seed
npm --prefix apps/api run db:seed:cms
```

## Run all applications together

From the repository root:

```bash
npm run dev:all
```

This starts all four applications in parallel:

- Website: http://localhost:5173
- Admin: http://localhost:3001
- Student portal: http://localhost:3002
- API: http://localhost:4000
- API health check: http://localhost:4000/health

Press `Ctrl+C` to stop all applications.

## Run applications one by one

Open a separate terminal for each application, or run only the application you
need from the repository root.

### Public website

```bash
npm run dev:frontend
```

Open http://localhost:5173.

### Admin dashboard

```bash
npm run dev:admin
```

Open http://localhost:3001.

### Student portal

```bash
npm run dev:student
```

Open http://localhost:3002.

### Backend API

Make sure MySQL is running and the API setup has been completed first.

```bash
npm run dev:api
```

The API runs at http://localhost:4000. Verify it with:

```bash
curl http://localhost:4000/health
```

## Run from an individual application directory

The equivalent command can also be run inside an application directory. Run
one command per terminal:

```bash
cd apps/frontend && npm run dev
```

Use `apps/admin`, `apps/student`, or `apps/api` instead of `apps/frontend` for
the other applications.

Run these in separate terminals when you need multiple applications at once.

## Production build and start

Build every package and application from the repository root:

```bash
npm run build
```

Start each built application separately:

```bash
npm --prefix apps/frontend run start
npm --prefix apps/admin run start
npm --prefix apps/student run start
npm --prefix apps/api run start
```

The frontend preview server uses Vite's default port 4173. The other
application ports are 3001, 3002, and 4000.

## Useful commands

For GoDaddy VPS deployment, see [GODADDY_DEPLOYMENT.md](docs/GODADDY_DEPLOYMENT.md).

```bash
npm run typecheck     # Type-check all applications
npm run lint          # Run ESLint
npm run test:cms      # Build and run the Playwright CMS tests
npm run build:cms     # Build the shared page-builder package
```

Database commands:

```bash
npm --prefix apps/api run db:studio       # Open Prisma Studio
npm --prefix apps/api run db:migrate      # Create/apply development migrations
npm --prefix apps/api run db:generate     # Regenerate Prisma Client
npm --prefix apps/api run db:seed         # Seed application data
npm --prefix apps/api run db:seed:cms     # Seed page-builder data
```

## Project structure

```text
apps/
  frontend/       Public website
  admin/          Staff administration dashboard
  student/        Student portal
  api/            NestJS backend API and Prisma schema
packages/
  page-builder/   Shared page-builder package
```

## Frontend

The public website is a React/Vite single-page application. Its assets are in
`apps/frontend/public`, and its routes are defined in `apps/frontend/src/App.jsx`.
