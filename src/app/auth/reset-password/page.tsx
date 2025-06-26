// app/reset-password/page.tsx
"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({ password });

    if (error) toast.error(error.message);
    else {
      toast.success("Password updated!");
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleUpdate}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Update Password
      </button>
    </div>
  );
}
