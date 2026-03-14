"use client"

import type React from "react"
import { useState } from "react"
import { Settings } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { ColorThemePicker } from "@/components/color-theme"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-background">
      <div className="mx-auto  px-2 py-3 sm:px-4 sm:py-6">
        <div className="rounded-3xl bg-card shadow-sm ring-1 ring-border overflow-hidden">
          {sidebarOpen && (
            <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          <div className="flex h-[95vh] flex-row-reverse">
            <div
              className={`
              fixed inset-y-0 right-0 z-50 lg:relative lg:z-auto
              transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
            `}
            >
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>

            <main className="flex-1 w-full lg:w-auto rounded-b-3xl lg:rounded-l-3xl lg:rounded-br-none bg-muted p-3 sm:p-5 md:px-7 md:py-7 xl:pb-7 xl:pt-0 overflow-auto">
              <Topbar onMenuClick={() => setSidebarOpen(true)} />
              {children}
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
    </div>
  )
}
