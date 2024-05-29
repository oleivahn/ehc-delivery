import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function AdminDashboard() {
  const { sessionClaims } = auth();

  const role = sessionClaims && Object.values(sessionClaims.membership)[0];
  // If the user does not have the admin role, redirect them to the home page
  if (role !== "org:admin") {
    redirect("/");
  }

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the &apos;admin&apos; role.</p>
    </>
  );
}
