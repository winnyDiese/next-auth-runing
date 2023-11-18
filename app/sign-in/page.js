"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      email: "frdrcpeter@gmail.com",
      password: "azerty",
    };

    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
  };

  const { data: session } = useSession();
  if (session) redirect("/members");

  return (
    <div>
      <form onSubmit={handleSubmit} id="form-login">
        <button form="form-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
