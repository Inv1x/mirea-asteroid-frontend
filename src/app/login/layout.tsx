import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Вход в аккаунт | Asteroid",
  description: "Войдите в свой аккаунт на образовательной платформе Asteroid и продолжите изучение космоса и астрономии. Быстрый и безопасный вход.",
  keywords: ["вход", "логин", "авторизация", "аккаунт", "Asteroid", "образование", "астрономия"],
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
    url: "https://asteroid.edu/login",
    title: "Вход в аккаунт | Asteroid",
    description: "Войдите в свой аккаунт на образовательной платформе Asteroid и продолжите изучение космоса и астрономии.",
    siteName: "Asteroid",
    images: [
      {
        url: "/og-login.jpg",
        width: 1200,
        height: 630,
        alt: "Вход в аккаунт Asteroid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вход в аккаунт | Asteroid",
    description: "Войдите в свой аккаунт на образовательной платформе Asteroid и продолжите изучение космоса и астрономии.",
    images: ["/og-login.jpg"],
    creator: "@asteroid_edu",
  },
  alternates: {
    canonical: "https://asteroid.edu/login",
  },
  category: "education",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}