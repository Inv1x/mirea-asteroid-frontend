import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Регистрация | Asteroid",
  description: "Создайте бесплатный аккаунт на образовательной платформе Asteroid и начните изучение космоса и астрономии. Присоединяйтесь к тысячам студентов.",
  keywords: ["регистрация", "создать аккаунт", "бесплатная регистрация", "Asteroid", "образование", "астрономия", "космос", "курсы"],
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
    url: "https://asteroid.edu/signup",
    title: "Регистрация | Asteroid",
    description: "Создайте бесплатный аккаунт на образовательной платформе Asteroid и начните изучение космоса и астрономии.",
    siteName: "Asteroid",
    images: [
      {
        url: "/og-signup.jpg",
        width: 1200,
        height: 630,
        alt: "Регистрация на Asteroid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Регистрация | Asteroid",
    description: "Создайте бесплатный аккаунт на образовательной платформе Asteroid и начните изучение космоса и астрономии.",
    images: ["/og-signup.jpg"],
    creator: "@asteroid_edu",
  },
  alternates: {
    canonical: "https://asteroid.edu/signup",
  },
  category: "education",
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}