"use client"

import { BriefcaseBusiness, Sparkles } from "lucide-react"

export function AirConditioning() {
  return (
    <>
      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
          >
            <BriefcaseBusiness className="size-4" />
          </span>
          <h3 className="text-sm font-semibold text-foreground">My Services</h3>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-foreground">
          <li>✔ Odoo Development and Customization</li>
          <li>✔ Odoo Installation (On-Premise and Cloud)</li>
          <li>✔ Legacy System Modernization (C#, Delphi to Web)</li>
          <li>✔ Fullstack Web Development (React, NextJS)</li>
          <li>✔ Database Design and Optimization</li>
          <li>✔ API Development and Integration</li>
          <li>✔ ERP Implementation for Medium and Small Businesses</li>
           <li>✔ Technical Support & Training for Software Systems, Automation & SEO</li>

        </ul>
      </div>
      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center gap-2 ">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
          >
            <Sparkles className="size-4" />
          </span>
          <h3 className="text-sm font-semibold text-foreground">Skills</h3>
        </div>

        <div className="mt-4">
          {[
            { name: "NodeJS, ReactJS, NextJS", value: 90 },
            { name: "GraphQL", value: 80 },
            { name: "Python Fullstack Web Development Using Odoo 18/19", value: 90 },
            { name: "Delphi Desktop and Fullstack Web Development using UNIGUI", value: 90 },
            { name: "HTML, Javascript, CSS", value: 95 },
            { name: "Database Management using PostgreSQL, MySQL, MS SQL", value: 95 },
            { name: "CRM (Go High Level, GHL)", value: 70 },
          ].map((skill, idx) => (
            <div key={idx} className="mb-3">
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
              <div className="mt-1 w-full rounded-full bg-muted">
                <div
                  className="rounded-full bg-brand px-2 py-1 text-right text-xs font-medium text-primary-foreground"
                  style={{ width: `${skill.value}%` }}
                >
                  {skill.value}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
