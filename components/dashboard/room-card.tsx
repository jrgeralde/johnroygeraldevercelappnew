"use client"

import { CalendarDays, Cog, PenTool, Presentation, UserRound, Youtube } from "lucide-react"

export function RoomCard(_: { title: string }) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transform hover:scale-105 transition-transform duration-200">
      <div className="mb-3 flex items-center gap-2">
        <span
          aria-hidden
          className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
        >
          <UserRound className="size-4" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">About me</h3>
      </div>

      <div className="w-full space-y-6">
        <hr className="border-border" />

        <div className="rounded-lg border border-border bg-background p-4 shadow-sm transform hover:scale-105 transition-transform duration-200">
          <h5 className="flex items-start gap-2 font-semibold text-foreground">
            <Cog className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>Senior Software Engineer / Full Stack Web Developer / Odoo Developer</span>
          </h5>
          <h6 className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span>1996 - Present</span>
          </h6>
          <p className="mt-4 mb-1.5 text-sm text-foreground">
            Highly skilled software development professional bringing talents for software design, development and integration. Offering advanced knowledge of in-demand programming languages. Gained extensive background in writing code and developing software solutions to various local industry clients.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
            Practices Exemplary Work Ethic. Strives to exceed expectations and Prioritizes meeting deadlines without supervision. Aggressive yet cheerful with colleagues.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
            Constantly Updates and Trains on Recent Developments on Technologies and Platforms, well trained in ReactJs,NextJs,GraphQL and Odoo.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
            Specializes in Modernizing Legacy Systems, having wide experience in developing desktop and web solutions in Delphi, Unigui, NodeJS, Python and C#.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">
            Provides support for software systems and customization of software solutions.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">
            An experienced Database Administrator with actual experience in Windows Server Failover Clustering and Replication.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">
            Regularly practices vibe coding using Cursor AI, Trae AI and other Github Copilot AI coding agents.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">An avid user of Linux and Ubuntu.</p>
          <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
            Underwent training in CRM Using Go High Level (GHL)
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4 shadow-sm transform hover:scale-105 transition-transform duration-200">
          <h5 className="flex items-start gap-2 font-semibold text-foreground">
            <Presentation className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>Computer Science Instructor, Ateneo de Davao University</span>
          </h5>
          <h6 className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span>November 1987 - Present</span>
          </h6>
          <p className="mt-4 mb-1.5 text-sm text-foreground">
            Conducts actual classroom instruction designed to achieve course objectives that are aligned with the school&apos;s mission and vision.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">
            Collaborates with industry, makes project proposals for software development, develops and implements software solutions for various aspects of their operation.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm text-foreground">
            Mentors students, fostering a collaborative learning environment that promotes innovation and knowledge sharing on various projects with industry partners.
          </p>
          <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
            Maintains very high standard in delivering classes. Very rarely late in coming to class. And never been absent for years. Informs students early when class is not possible and very earnest in granting grade consultations so students can protest, complain or have grades corrected.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4 shadow-sm transform hover:scale-105 transition-transform duration-200">
          <h5 className="flex items-start gap-2 font-semibold text-foreground">
            <PenTool className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>Youtube Content Creator and Author of Various Instructional Videos on Computer Programming and Other Subject Areas</span>
          </h5>
          <h6 className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span>2021 - Present</span>
          </h6>
          <p className="mt-4 mb-1.5 text-sm text-foreground">
            Instructional Videos on Odoo Development, History of Computing, Boolean Logic and Circuitverse, Assembly Language Programming, Database Desktop Development using C#, Introduction to Javascript, HTML and CSS.{" "}
            <span className="font-semibold">Youtube channel:</span>{" "}
            <a
              href="https://www.youtube.com/@roytek7667/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand underline underline-offset-4"
            >
              <Youtube className="size-4" aria-hidden />
              <span>www.youtube.com/@roytek7667/playlists</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
