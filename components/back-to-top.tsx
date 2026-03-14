"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowUp } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

function isScrollableElement(element: HTMLElement) {
  const style = window.getComputedStyle(element)
  const overflowY = style.overflowY
  const canScrollY = overflowY === "auto" || overflowY === "scroll"
  return canScrollY && element.scrollHeight > element.clientHeight
}

function getScrollContainer(): HTMLElement | Window {
  const main = document.querySelector("main")
  if (main instanceof HTMLElement && isScrollableElement(main)) return main

  const scrollingElement = document.scrollingElement
  if (scrollingElement instanceof HTMLElement && scrollingElement.scrollHeight > scrollingElement.clientHeight) {
    return window
  }

  return window
}

export function BackToTop() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const thresholdPx = 300

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const container = getScrollContainer()

    const readScrollTop = () => {
      if (container instanceof Window) return window.scrollY ?? 0
      return container.scrollTop ?? 0
    }

    const onScroll = () => {
      setVisible(readScrollTop() > thresholdPx)
    }

    onScroll()

    if (container instanceof Window) {
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
    }

    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [pathname])

  const scrollToTop = () => {
    if (typeof window === "undefined") return
    const container = getScrollContainer()
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth"

    if (container instanceof Window) {
      window.scrollTo({ top: 0, behavior })
      return
    }

    container.scrollTo({ top: 0, behavior })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        type="button"
        variant="secondary"
        className="rounded-full shadow-lg"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" aria-hidden />
        Back to Top
      </Button>
    </div>
  )
}
