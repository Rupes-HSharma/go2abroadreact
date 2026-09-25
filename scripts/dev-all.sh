#!/bin/sh

set -u

npm run dev:frontend 2>&1 | sed 's/^/[frontend] /' & frontend_pid=$!
npm run dev:admin 2>&1 | sed 's/^/[admin]    /' & admin_pid=$!
npm run dev:student 2>&1 | sed 's/^/[student]  /' & student_pid=$!
npm run dev:api 2>&1 | sed 's/^/[api]      /' & api_pid=$!

cleanup() {
  trap - INT TERM EXIT
  kill "$frontend_pid" "$admin_pid" "$student_pid" "$api_pid" 2>/dev/null || true
}

trap cleanup INT TERM EXIT
wait "$frontend_pid" "$admin_pid" "$student_pid" "$api_pid"
