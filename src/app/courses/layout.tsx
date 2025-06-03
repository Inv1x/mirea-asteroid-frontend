import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Курсы по астрономии и космосу | Asteroid",
  description: "Изучайте космос через экспертные курсы по астрономии, физике, планетологии, астрофизике и космическим технологиям. Более 50 курсов от ведущих специалистов.",
  keywords: ["курсы астрономии", "космические курсы", "обучение астрономии", "физика космоса", "планетология", "астрофизика", "космические технологии", "онлайн курсы"],
  authors: [{ name: "Asteroid Education Team" }],
  creator: "Asteroid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://asteroid.edu/courses",
    title: "Курсы по астрономии и космосу | Asteroid",
    description: "Изучайте космос через экспертные курсы по астрономии, физике, планетологии, астрофизике и космическим технологиям.",
    siteName: "Asteroid",
    images: [
      {
        url: "/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "Курсы по астрономии и космосу на Asteroid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Курсы по астрономии и космосу | Asteroid",
    description: "Изучайте космос через экспертные курсы по астрономии, физике, планетологии, астрофизике и космическим технологиям.",
    images: ["/og-courses.jpg"],
    creator: "@asteroid_edu",
  },
  alternates: {
    canonical: "https://asteroid.edu/courses",
  },
  category: "education",
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}