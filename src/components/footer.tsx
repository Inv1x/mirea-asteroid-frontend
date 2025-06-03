import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl text-slate-900 dark:text-slate-100">Asteroid</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              Образовательная платформа для изучения космоса и астрономии. Откройте для себя увлекательный мир Вселенной через наши экспертные курсы.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Курсы
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Сообщество
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Вход
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Asteroid Team. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}