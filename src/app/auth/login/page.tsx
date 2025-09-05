"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else router.push("/user");
    console.log(email, password, "login");
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Check your email to verify your account.");
    console.log(email, password, "login");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald to-forest flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[600px] p-8">
        <h2 className="text-heading3 font-bold text-charcoal mb-6 text-center">Login / Signup</h2>
        <div className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none"
          />
          <div className="flex gap-4">
            <button onClick={handleLogin} className="btn btn-primary flex-1">Login</button>
            <button onClick={handleSignup} className="btn btn-secondary flex-1">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
