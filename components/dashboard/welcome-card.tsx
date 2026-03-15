"use client"

import { FileDown, Github, Home, Linkedin, Mail, Youtube } from "lucide-react"
import { useState } from "react"
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

export function WelcomeCard() {
  const [playKey, setPlayKey] = useState(0)
  const [cvDialogOpen, setCvDialogOpen] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-3xl bg-sidebar-gradient px-6 pb-6 pt-4 text-white transform hover:scale-105 transition-transform duration-200">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        {/* Left Side (Text) */}
        <div className="max-w-xl md:w-3/5">
          <div className="space-y-2 mt-10">
            <p className="flex items-center gap-2">
              <Home className="size-4 shrink-0" aria-hidden />
              <span>Davao City, Philippines</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden />
              <a
                href="mailto:jrgeralde@gmail.com"
                className="underline underline-offset-4 hover:opacity-90"
              >
                jrgeralde@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/@roytek7667/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline underline-offset-4 hover:opacity-90"
              >
                <Youtube className="size-4 shrink-0 no-underline" aria-hidden />
                My YouTube Channel
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/john-geralde-20141593/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline underline-offset-4 hover:opacity-90"
              >
                <Linkedin className="size-4 shrink-0 no-underline" aria-hidden />
                My LinkedIn Profile
              </a>
            </p>
            <p>
              <a
                href="https://jrageralde.github.io/ITC/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline underline-offset-4 hover:opacity-90"
              >
                <Github className="size-4 shrink-0 no-underline" aria-hidden />
                My JavaScript GitHub Demos
              </a>
            </p>
          </div>
        </div>

        {/* Right Side (Image fills 50%) */}
        <div className="relative lg:w-2/5">
          <div className="flex w-full h-64 md:h-full min-h-[250px] flex-col gap-2">
            <button
              type="button"
              onClick={() => setPlayKey((k) => k + 1)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-center font-semibold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <Youtube className="size-5 shrink-0" aria-hidden />
              <span>Get to Know Me</span>
            </button>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/20">
              {playKey > 0 ? (
                <iframe
                  key={playKey}
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/AhfS9e8bw-U?autoplay=1&rel=0"
                  title="Get to Know Me"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center px-6 text-center text-white/80">
                  Click “Get to Know Me” to play
                </div>
              )}
            </div>
            <AlertDialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-center font-semibold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
                  aria-label="Download My CV"
                >
                  <FileDown className="size-5 shrink-0" aria-hidden />
                  <span>Download My CV</span>
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
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
    </div>
  )
}
