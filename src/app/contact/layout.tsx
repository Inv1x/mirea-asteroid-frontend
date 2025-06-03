import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты | Asteroid",
  description: "Свяжитесь с командой Asteroid. Контактная информация авторов образовательной платформы по изучению космоса и астрономии.",
  keywords: ["контакты", "связаться", "авторы", "команда", "Asteroid", "образование", "астрономия", "поддержка"],
  authors: [
    { name: "Ульяна Фролова" },
    { name: "Денис Ширяев" }
  ],
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
    url: "https://asteroid.edu/contact",
    title: "Контакты | Asteroid",
    description: "Свяжитесь с командой Asteroid. Контактная информация авторов образовательной платформы по изучению космоса и астрономии.",
    siteName: "Asteroid",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты команды Asteroid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты | Asteroid",
    description: "Свяжитесь с командой Asteroid. Контактная информация авторов образовательной платформы по изучению космоса и астрономии.",
    images: ["/og-contact.jpg"],
    creator: "@asteroid_edu",
  },
  alternates: {
    canonical: "https://asteroid.edu/contact",
  },
  category: "education",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}