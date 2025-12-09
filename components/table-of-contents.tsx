import { ChevronRight } from "lucide-react"

const sections = [
  { id: "introduction", title: "1. Introduction", description: "Project overview and objectives" },
  { id: "system-model", title: "2. System Model Definition", description: "MuJoCo simulation setup" },
  {
    id: "parameter-identification",
    title: "3. Parameter Identification",
    description: "Servo, stiffness, and friction parameters",
  },
  { id: "optimization", title: "4. Design Optimization", description: "Parameter sweep methodology" },
  { id: "manufacturing", title: "5. Manufacturing", description: "5-layer laminate assembly" },
  { id: "experimental", title: "6. Experimental Validation", description: "Tracker analysis and testing" },
  { id: "results", title: "7. Results & Discussion", description: "Hardware vs simulation comparison" },
  { id: "future-work", title: "8. Future Work", description: "Design and modeling improvements" },
  { id: "conclusions", title: "9. Conclusions", description: "Summary of findings" },
]

export function TableOfContents() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50 transition-colors group"
              >
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
                <div>
                  <p className="font-medium text-slate-900 group-hover:text-cyan-700">{section.title}</p>
                  <p className="text-sm text-slate-500">{section.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
