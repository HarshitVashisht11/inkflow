"use client"

import Link from "next/link"
import { Suspense } from "react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation";
import { LayoutDashboard, Star } from "lucide-react"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const NavButtons = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="space-y-1 w-full">
      <Button 
        variant={favorites ? "ghost" : "secondary"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full"
      >
        <Link href="/dashboard">
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Team Boards
        </Link>
      </Button>
      <Button 
        variant={favorites ? "secondary" : "ghost"}
        asChild
        size="lg"
        className="font-normal justify-start px-2 w-full"
      >
        <Link
          href={{
            pathname: "/dashboard",
            query: { favorites: true },
          }}
        >
          <Star className="h-4 w-4 mr-2" />
          Favorite Boards
        </Link>
      </Button>
    </div>
  )
}

export const OrgSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <span className={cn("font-semibold text-emerald-500 text-2xl",font.className)}>
            Ink Flow
          </span>
        </div>
      </Link>
      <OrganizationSwitcher 
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E5E5",
              justifyContent: "space-between",
              backgroundColor: "white",
            }
          }
        }}
      />
      <Suspense fallback={
        <div className="space-y-1 w-full">
          <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
          <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
        </div>
      }>
        <NavButtons />
      </Suspense>
    </div>
  )
}

export default OrgSidebar