// components/ChangePassword.tsx
"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast, Toaster } from "react-hot-toast";

export default function ChangePassword() {
  const [password, setPassword] = useState("");

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) toast.error(error.message);
    else toast.success("Password changed successfully");
  };

  return (
    <div className="space-y-4 max-w-sm">
      <Toaster />
      <h3 className="text-lg font-semibold">Change Password</h3>
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleChangePassword}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Update Password
      </button>
    </div>
  );
}
