"use client"

import type React from "react"
import Link from "next/link"
import { BadgeCheck, BriefcaseBusiness, House, Settings } from "lucide-react"
import { Topbar } from "@/components/topbar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ColorThemePicker } from "@/components/color-theme"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background h-screen overflow-hidden">
      <div className="mx-auto px-2 py-3 sm:px-4 sm:py-6 h-full box-border">
        <div className="rounded-3xl bg-card shadow-sm ring-1 ring-border overflow-hidden h-full flex flex-col">
          <main className="flex-1 min-h-0 bg-muted p-3 sm:p-5 md:px-7 md:py-7 xl:pb-7 xl:pt-0 overflow-auto">
            <Topbar />
            {children}
            <div className="fixed bottom-6 left-6 z-30">
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  className="rounded-full shadow-lg bg-brand text-white hover:opacity-90 focus-visible:ring-[color:color-mix(in_oklab,var(--brand)_35%,transparent)]"
                >
                  <Link href="/dashboard" aria-label="Open Home">
                    <House className="size-4" aria-hidden />
                    Home
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full shadow-lg bg-brand text-white hover:opacity-90 focus-visible:ring-[color:color-mix(in_oklab,var(--brand)_35%,transparent)]"
                >
                  <Link href="/myjobportfolio" aria-label="Open My Job Portfolio">
                    <BriefcaseBusiness className="size-4" aria-hidden />
                    Job Portfolio
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full shadow-lg bg-brand text-white hover:opacity-90 focus-visible:ring-[color:color-mix(in_oklab,var(--brand)_35%,transparent)]"
                >
                  <Link href="/mycertificates" aria-label="Open My Certificates">
                    <BadgeCheck className="size-4" aria-hidden />
                    Certificates
                  </Link>
                </Button>
              </div>
            </div>
            <footer className="mt-2 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full p-2 hover:bg-muted focus:outline-none focus:ring-2">
                  <Settings className="size-5" aria-hidden />
                  <span className="sr-only">Open settings</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5">
                    <ThemeToggle />
                  </div>
                  <div className="px-2 pb-2">
                    <ColorThemePicker />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
