"use client";

import React from "react";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  const { data: session, status } = useSession();

  if (!session) redirect("/sign-in");

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      <p>{session?.user?.fullname}</p>
      <button onClick={handleLogout} className="bg-white p-3 text-black">
        Logout
      </button>
    </div>
  );
}
