import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { PageTitle } from "@/components/page-title";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Skeleton } from "@/components/ui/skeleton";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_MOBILE } from "@/components/ui/sidebar";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await auth.api.listOrganizations({
    headers: await headers(),
  });
  if (data.length === 0 || !data) {
    redirect("/signup/create-workspace");
  }

  return (
    <SidebarProvider>
      <Suspense
        fallback={
          <Skeleton
            className={`h-screen w-${SIDEBAR_WIDTH_MOBILE} sm:w-${SIDEBAR_WIDTH} `}
          />
        }
      >
        <AppSidebar />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SidebarInset>{children}</SidebarInset>
      </Suspense>
    </SidebarProvider>
  );
}
