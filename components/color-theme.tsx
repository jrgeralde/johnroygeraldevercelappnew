"use client"

import { useCallback, useEffect, useSyncExternalStore } from "react"

const BRANDS = [
  { key: "purple", label: "Purple", color: "hsl(262, 83%, 58%)" },
  { key: "blue", label: "Blue", color: "hsl(220, 90%, 56%)" },
  { key: "teal", label: "Teal", color: "hsl(174, 63%, 45%)" },
  { key: "orange", label: "Orange", color: "hsl(32, 100%, 50%)" },
  { key: "pink", label: "Pink", color: "hsl(320, 72%, 66%)" },
] as const

const BRAND_STORAGE_KEY = "brand"
const BRAND_OVERRIDE_STORAGE_KEY = "brand-override"
const BRAND_OVERRIDE_DATE_STORAGE_KEY = "brand-override-date"
const BRAND_EVENT = "brand-change"

type BrandKey = (typeof BRANDS)[number]["key"]

function isBrandKey(value: string): value is BrandKey {
  return BRANDS.some((b) => b.key === value)
}

function toLocalDateKey(date: Date) {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function getDayBrand(date: Date): BrandKey {
  const day = date.getDay()
  if (day === 0 || day === 6) return "blue"

  const weekdayRotation: BrandKey[] = ["purple", "teal", "orange", "pink", "purple"]
  return weekdayRotation[day - 1] ?? "purple"
}

function applyBrand(brand: BrandKey) {
  document.documentElement.setAttribute("data-brand", brand)
  window.localStorage.setItem(BRAND_STORAGE_KEY, brand)
  window.dispatchEvent(new Event(BRAND_EVENT))
}

function subscribeBrand(callback: () => void) {
  if (typeof window === "undefined") return () => {}

  const onStorage = (event: StorageEvent) => {
    if (
      event.key === BRAND_STORAGE_KEY ||
      event.key === BRAND_OVERRIDE_STORAGE_KEY ||
      event.key === BRAND_OVERRIDE_DATE_STORAGE_KEY
    )
      callback()
  }

  const onCustom = () => callback()

  window.addEventListener("storage", onStorage)
  window.addEventListener(BRAND_EVENT, onCustom)

  return () => {
    window.removeEventListener("storage", onStorage)
    window.removeEventListener(BRAND_EVENT, onCustom)
  }
}

function getBrandSnapshot() {
  if (typeof window === "undefined") return "blue"
  const brand = window.localStorage.getItem(BRAND_STORAGE_KEY)
  if (brand && isBrandKey(brand)) return brand
  return "blue"
}

function getBrandServerSnapshot() {
  return "blue"
}

export function AutoColorTheme() {
  useEffect(() => {
    if (typeof window === "undefined") return

    let timeoutId: number | undefined

    const apply = () => {
      const now = new Date()
      const todayKey = toLocalDateKey(now)

      const overrideDate = window.localStorage.getItem(BRAND_OVERRIDE_DATE_STORAGE_KEY)
      const overrideBrand = window.localStorage.getItem(BRAND_OVERRIDE_STORAGE_KEY)

      if (overrideBrand && overrideDate === todayKey && isBrandKey(overrideBrand)) {
        applyBrand(overrideBrand)
        return
      }

      window.localStorage.removeItem(BRAND_OVERRIDE_STORAGE_KEY)
      window.localStorage.removeItem(BRAND_OVERRIDE_DATE_STORAGE_KEY)
      applyBrand(getDayBrand(now))
    }

    const scheduleNext = () => {
      if (timeoutId) window.clearTimeout(timeoutId)

      const now = new Date()
      const next = new Date(now)
      next.setHours(24, 0, 0, 0)
      const msUntilNext = next.getTime() - now.getTime() + 1000

      timeoutId = window.setTimeout(() => {
        apply()
        scheduleNext()
      }, msUntilNext)
    }

    const onVisibilityChange = () => {
      if (!document.hidden) apply()
    }

    apply()
    scheduleNext()
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [])

  return null
}

export function ColorThemePicker() {
  const current = useSyncExternalStore(subscribeBrand, getBrandSnapshot, getBrandServerSnapshot)

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", current)
  }, [current])

  const setBrand = useCallback(
    (key: string) => {
      if (typeof window === "undefined") return
      if (!isBrandKey(key)) return

      const todayKey = toLocalDateKey(new Date())
      window.localStorage.setItem(BRAND_OVERRIDE_STORAGE_KEY, key)
      window.localStorage.setItem(BRAND_OVERRIDE_DATE_STORAGE_KEY, todayKey)
      applyBrand(key)
    },
    []
  )

  return (
    <div>
      <p className="mb-1 text-xs text-muted-foreground">Color theme</p>
      <div className="flex items-center gap-2">
        {BRANDS.map((b) => (
          <button
            key={b.key}
            aria-label={`Use ${b.label} theme`}
            onClick={() => setBrand(b.key)}
            className={`size-6 rounded-full ring-2 transition ${current === b.key ? "ring-ring" : "ring-transparent"} outline-none focus-visible:ring-2`}
            style={{ backgroundColor: b.color }}
          />
        ))}
      </div>
    </div>
  )
}
