import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
  borderColor: string // Added border color prop
  title: string
  description: string
  linkText: string
  linkUrl: string
  className?: string
  colSpan?: string
}

export function FeatureCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  borderColor, // Use the border color prop
  title,
  description,
  linkText,
  linkUrl,
  className = "",
  colSpan = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border ${borderColor} bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 shadow transition-all hover:shadow-lg ${colSpan} ${className}`}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className={`${iconBgColor} p-2 w-10 h-10 rounded-full flex items-center justify-center mb-3`}>
            <Icon className={`${iconColor} h-5 w-5`} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Link href={linkUrl} className={`inline-flex items-center text-sm font-medium ${iconColor} hover:underline`}>
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
