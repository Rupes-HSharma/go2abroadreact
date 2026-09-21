"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "../AdminShell";
import { cmsApi, messageOf, signOut } from "../../lib/cms-api";
import { Button } from "../ui/button";
const Permissions = createContext(false);
export const useCanPublish = () => useContext(Permissions);
export function CmsBoundary({ children }: { children: React.ReactNode }) {
  const [actor, setActor] = useState<{ role: string }>();
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setError("");
    cmsApi<{ role: string }>("/auth/cms-session")
      .then((value) => {
        if (active) setActor(value);
      })
      .catch((e) => {
        if (active) setError(messageOf(e));
      });
    return () => {
      active = false;
    };
  }, [attempt]);
  return (
    <AdminShell title="Page builder" onLogout={() => void signOut()}>
      {error ? (
        <div className="rounded-xl bg-white p-8">
          <p role="alert">{error}</p>
          <p className="my-4">
            Sign in with an authorized staff account to manage website pages.
          </p>
          <Button asChild>
            <Link href="/">Go to login</Link>
          </Button>{" "}
          <Button variant="outline" onClick={() => setAttempt(attempt + 1)}>
            Retry
          </Button>
        </div>
      ) : !actor ? (
        <p role="status" className="p-8">
          Checking your access…
        </p>
      ) : (
        <Permissions.Provider
          value={["SUPER_ADMIN", "ADMIN", "CONTENT_MANAGER"].includes(
            actor.role,
          )}
        >
          {children}
        </Permissions.Provider>
      )}
    </AdminShell>
  );
}
