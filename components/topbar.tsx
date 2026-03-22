"use client"

import Image from "next/image"

export function Topbar() {
  return (
    <header className="lg:-mx-7 sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border mb-6 rounded-xl lg:rounded-none">
      <div className="flex items-center justify-start gap-3 px-4 py-4 md:px-7">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-[74px] shrink-0 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/images/IDPIC.jpg"
                alt="John Roy Geralde"
                width={74}
                height={74}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-2xl font-semibold text-foreground">John Roy Geralde</h3>
              <span className="block text-base leading-6 text-balance text-[color:color-mix(in_oklab,var(--brand)_70%,var(--foreground)_30%)]">
                Sr. Software Engineer / Fullstack Developer / Odoo Developer / Computer Science Instructor
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
