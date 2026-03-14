"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

function getISOWeek(date: Date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayOfWeek = utcDate.getUTCDay() || 7
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayOfWeek)
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1))
  const weekNumber = Math.ceil(((utcDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return weekNumber
}

function getWeekTheme(date = new Date()) {
  const week = getISOWeek(date)
  return week % 2 === 0 ? "light" : "dark"
}

function WeekThemeSync() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const applyTheme = () => {
      const desired = getWeekTheme()
      if (resolvedTheme !== desired) setTheme(desired)
    }

    applyTheme()
    const intervalId = window.setInterval(applyTheme, 60 * 60 * 1000)
    return () => window.clearInterval(intervalId)
  }, [pathname, resolvedTheme, setTheme])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // We force attribute="class" so the "dark" class is placed on <html>,
  // and provide a stable storageKey to persist the choice.
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={getWeekTheme()}
      enableSystem={false}
      disableTransitionOnChange
      storageKey="smart-home-theme"
      {...props}
    >
      <WeekThemeSync />
      {children}
    </NextThemesProvider>
  )
}
