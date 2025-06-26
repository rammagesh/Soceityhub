"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Toaster, toast } from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/dashboard`, // after verification
      },
    });

    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Check your email to verify your account");
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleSignup}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </div>
  );
}
