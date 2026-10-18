"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      setError("Those details do not match.");
      return;
    }
    router.replace(params.get("next") || "/admin");
    router.refresh();
  }

  return (
    <main className="login-wrap">
      <form className="login-card stack" onSubmit={submit}>
        <span className="eyebrow">Madhuli desk</span>
        <h1 style={{ fontSize: 40 }}>Admin</h1>
        <p className="muted">Enquiries and fleet for the Somnath taxi desk.</p>
        <label className="field"><span>Username</span><input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" /></label>
        <label className="field"><span>Password</span><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" /></label>
        {error ? <p className="error">{error}</p> : null}
        <button className="btn" type="submit">Enter</button>
      </form>
    </main>
  );
}

export default function LoginPage() {
  return <Suspense fallback={<main className="login-wrap">Loading…</main>}><LoginForm /></Suspense>;
}
