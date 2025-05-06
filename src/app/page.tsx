import { Navbar } from "@/components/navbar"
import { FeatureCard } from "@/components/feature-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, GraduationCap, FileText, Video } from "lucide-react"

export default function EducationalPlatform() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      {/* Главный Блок (Hero Section) */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600">
                  Раскройте свой образовательный потенциал
                </h1>
                <p className="max-w-[600px] text-slate-700 dark:text-slate-300 md:text-xl">
                  Откройте для себя мир космоса с нашей образовательной платформой. Учитесь в удобном для вас темпе благодаря курсам и интерактивному контенту
                </p>
              </div>
              <div className="flex flex-col gap-2 min-lg:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-600 hover:from-blue-700 hover:via-violet-700 hover:to-fuchsia-700 text-white border-0"
                >
                  <Link href="/explore">Изучить курсы</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-transparent hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700 dark:text-slate-300"
                >
                  <Link href="/signup">Бесплатная регистрация</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="absolute inset-0 flex items-center justify-center text-8xl sm:text-9xl opacity-60 z-0">
                  <GraduationCap className="w-32 h-32 text-blue-500/30" />
                </div>
              </div>
              <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-blue-500/10 to-fuchsia-500/10 blur-2xl" />
            </div>
          </div>

          {/* Карточки возможностей */}
          <div className="mt-12 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={BookOpen}
              iconColor="text-blue-600 dark:text-blue-400"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
              borderColor="border-blue-200 dark:border-blue-800"
              title="Интерактивные курсы"
              description="Вовлекайтесь в обучение с помощью наших материалов, разработанных экспертами"
              linkText="Просмотреть курсы"
              linkUrl="/courses"
            />

            <FeatureCard
              icon={Video}
              iconColor="text-violet-600 dark:text-violet-400"
              iconBgColor="bg-violet-100 dark:bg-violet-900/30"
              borderColor="border-violet-200 dark:border-violet-800"
              title="Видеоуроки"
              description="Смотрите подробные видеоуроки по различным темам"
              linkText="Смотреть видео"
              linkUrl="/videos"
            />

            <FeatureCard
              icon={FileText}
              iconColor="text-fuchsia-600 dark:text-fuchsia-400"
              iconBgColor="bg-fuchsia-100 dark:bg-fuchsia-900/30"
              borderColor="border-fuchsia-200 dark:border-fuchsia-800"
              title="Тестирование знаний"
              description="Проверьте свои навыки с помощью наших интерактивных тестов и викторин"
              linkText="Пройти тесты"
              linkUrl="/tests"
              colSpan="sm:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
