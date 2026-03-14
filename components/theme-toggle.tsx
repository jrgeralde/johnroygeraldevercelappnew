"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const isDark = (resolvedTheme ?? theme) === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
      className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm"
    >
      <span>Theme</span>
      {isDark ? (
        <span className="inline-flex items-center gap-2">
          Dark <Moon className="size-4" />
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          Light <Sun className="size-4" />
        </span>
      )}
    </button>
  )
}
