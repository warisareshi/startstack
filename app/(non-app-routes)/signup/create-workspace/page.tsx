import Loading from "@/app/loading";
import { CreateWorkspaceForm } from "@/components/forms/create-workspace-form";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Workspace | Sign Up",
  description: "Create an account",
};

export default function CreateWorkspacePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<Loading />}>
        {" "}
        <CreateWorkspaceForm />
      </Suspense>
    </main>
  );
}
