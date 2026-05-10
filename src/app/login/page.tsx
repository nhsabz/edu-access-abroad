"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      router.push("/portal");
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="max-w-[28rem] w-full bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] p-8 border border-surface-variant">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <span className="material-symbols-outlined text-[32px]">lock</span>
          </div>
          <h1 className="font-h2 text-h2 text-on-surface mb-2">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant">Sign in to your student portal</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-error-container text-on-error-container rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-label-caps text-label-caps text-on-surface" htmlFor="password">
                Password
              </label>
              <a href="#" className="font-label-caps text-label-caps text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">key</span>
              <input 
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input 
              type="checkbox" 
              id="remember"
              className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <label htmlFor="remember" className="font-body-md text-sm text-on-surface-variant cursor-pointer">
              Remember me
            </label>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-surface-tint disabled:opacity-70 text-primary-foreground font-label-caps text-label-caps py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            {isLoading ? "Signing In..." : "Sign In"}
            <span className="material-symbols-outlined text-[18px]">login</span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="font-body-md text-sm text-on-surface-variant">
            Don't have an account?{' '}
            <a href="/signup" className="text-secondary font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
