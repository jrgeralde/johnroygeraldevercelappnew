import { CalendarDays, GraduationCap } from "lucide-react"

export function UsersWidget() {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transform hover:scale-105 transition-transform duration-200">
      <div className="mb-3 flex items-center gap-2">
        <span
          aria-hidden
          className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
        >
          <GraduationCap className="size-4" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">Education</h3>
      </div>

      <div className="mt-4 mb-4 rounded-lg border border-border bg-background p-4 shadow-sm">
        <div className="mt-4 space-y-4">
          <div>
            <h6 className="flex items-start gap-2 text-sm font-semibold text-foreground">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span>1996, Masters in Computer Science Major in Artificial Intelligence</span>
            </h6>
            <p className="text-sm text-muted-foreground">Ateneo de Manila University</p>
            <p className="text-sm text-muted-foreground">Quezon City, Philippines</p>
          </div>

          <div>
            <h6 className="flex items-start gap-2 text-sm font-semibold text-foreground">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span>1987, BS in Management Engineering</span>
            </h6>
            <p className="text-sm text-muted-foreground">Ateneo de Davao University</p>
            <p className="text-sm text-muted-foreground">Davao City, Philippines</p>
          </div>
        </div>
      </div>
    </div>
  )
}
