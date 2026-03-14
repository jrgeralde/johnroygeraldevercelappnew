"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useState, useSyncExternalStore } from "react"
import {
  Home,
  BriefcaseBusiness,
  GraduationCap,
  FileDown,
  ChevronFirst,
  ChevronLast,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Item = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const items: Item[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/myjobportfolio", label: "My Job Portfolio", icon: BriefcaseBusiness },
  { href: "/mycertificates", label: "My Certificates", icon: GraduationCap },
  { href: "/security", label: "Download My CV", icon: FileDown },
]

const SIDEBAR_OPEN_STORAGE_KEY = "sidebar-open"
const SIDEBAR_OPEN_EVENT = "sidebar-open-change"

function subscribeSidebarOpen(callback: () => void) {
  if (typeof window === "undefined") return () => {}

  const onStorage = (event: StorageEvent) => {
    if (event.key === SIDEBAR_OPEN_STORAGE_KEY) callback()
  }

  const onCustom = () => callback()

  window.addEventListener("storage", onStorage)
  window.addEventListener(SIDEBAR_OPEN_EVENT, onCustom)

  return () => {
    window.removeEventListener("storage", onStorage)
    window.removeEventListener(SIDEBAR_OPEN_EVENT, onCustom)
  }
}

function getSidebarOpenSnapshot() {
  if (typeof window === "undefined") return true
  const saved = window.localStorage.getItem(SIDEBAR_OPEN_STORAGE_KEY)
  if (!saved) return true
  return saved === "1"
}

function getSidebarOpenServerSnapshot() {
  return true
}

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  const [cvDialogOpen, setCvDialogOpen] = useState(false)
  const open = useSyncExternalStore(
    subscribeSidebarOpen,
    getSidebarOpenSnapshot,
    getSidebarOpenServerSnapshot
  )
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      if (typeof window === "undefined") return
      const next = typeof value === "function" ? value(open) : value
      window.localStorage.setItem(SIDEBAR_OPEN_STORAGE_KEY, next ? "1" : "0")
      window.dispatchEvent(new Event(SIDEBAR_OPEN_EVENT))
    },
    [open]
  )

  return (
      <aside
      className={`bg-sidebar-gradient text-white transition-[width] duration-300 rounded-r-3xl flex flex-col h-full  ${
        open ? "w-52" : "w-20"
      }`}
      aria-label="Primary navigation"
    >
      <div className="flex items-center justify-between gap-2 px-4 py-5">
        <div className="flex flex-1 items-center gap-2">
          <div className="size-9 rounded-xl bg-white/20 grid place-items-center font-bold">R</div>
          <span className={`${open ? "block flex-1 text-center" : "hidden"} text-sm font-semibold`}>ROYTEK</span>
        </div>
        <button
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg bg-white/20 p-1.5 hover:bg-white/30"
        >
          {open ? <ChevronFirst className="size-5" /> : <ChevronLast className="size-5" />}
        </button>
      </div>

      <nav className="mt-2 flex-1">
        <ul className="flex flex-col gap-1 px-3">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href))

            if (label === "Download My CV") {
              return (
                <li key={href}>
                  <AlertDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        onClick={() => {
                          onClose?.()
                        }}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                          active ? "bg-white text-brand" : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        <Icon className={`size-5 ${active ? "text-brand" : "text-white"}`} />
                        <span className={`${open ? "block" : "hidden"} text-sm`}>{label}</span>
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Download CV?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Download JohnRoyGeraldeResumeWithPortfolio.pdf to your device.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            const href = "/assets/JohnRoyGeraldeResumeWithPortfolio.pdf"
                            const anchor = document.createElement("a")
                            anchor.href = href
                            anchor.download = "JohnRoyGeraldeResumeWithPortfolio.pdf"
                            document.body.appendChild(anchor)
                            anchor.click()
                            anchor.remove()
                            setCvDialogOpen(false)
                          }}
                        >
                          Download
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </li>
              )
            }

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => {
                    onClose?.()
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                    active ? "bg-white text-brand" : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  <Icon className={`size-5 ${active ? "text-brand" : "text-white"}`} />
                  <span className={`${open ? "block" : "hidden"} text-sm`}>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="px-3 pb-5 pt-2">
        <div className={`rounded-2xl bg-white/10 p-3`}>
          <p className="text-xs leading-5">{open ? "" : "Tip"}</p>
        </div>
      </div>
    </aside>
  )
}
