// app/forgot-password/page.tsx
"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Toaster, toast } from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetLink = async () => {
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Password reset link sent! Check your email.");
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleResetLink}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>
    </div>
  );
}
