"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, GraduationCap, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  // Toggle search dialog
  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <header className="sticky flex justify-center top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-600 text-white">
      <div className="container flex h-16 items-center justify-between not-lg:mx-8">
        {/* Логотип - видно на всех экранах */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-xl">Asteroid</span>
          </Link>
        </div>

        {/* Навигация для десктопа - скрыто на мобильных устройствах */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="bg-transparent">
            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className="bg-transparent text-white hover:bg-white/10 px-4 py-2 rounded-md">
                  Курсы
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                Ресурсы
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-fuchsia-500/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <BookOpen className="h-6 w-6 mb-2 text-blue-600 dark:text-blue-400" />
                        <div className="mb-2 mt-4 text-lg font-medium text-slate-900 dark:text-white">
                          Библиотека обучения
                        </div>
                        <p className="text-sm leading-tight text-slate-700 dark:text-slate-300">
                          Получите доступ к нашей обширной коллекции учебных материалов и ресурсов.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 dark:hover:bg-blue-900/30 dark:focus:bg-blue-900/30"
                        href="/resources/articles"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900 dark:text-white">Статьи</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-700 dark:text-slate-300">
                          Подробные статьи на различные образовательные темы.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 dark:hover:bg-blue-900/30 dark:focus:bg-blue-900/30"
                        href="/resources/videos"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900 dark:text-white">
                          Видеоуроки
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-700 dark:text-slate-300">
                          Смотрите обучающие видео и уроки.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 dark:hover:bg-blue-900/30 dark:focus:bg-blue-900/30"
                        href="/resources/downloads"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900 dark:text-white">Загрузки</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-700 dark:text-slate-300">
                          Загружайте рабочие листы, шаблоны и учебные материалы.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" legacyBehavior passHref>
                <NavigationMenuLink className="bg-transparent text-white hover:bg-white/10 px-4 py-2 rounded-md">
                  Телеграм
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Поиск и профиль для десктопа - скрыто на мобильных */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleSearch} className="text-white hover:bg-white/10">
            <Search className="h-4 w-4" />
            <span className="sr-only">Поиск</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800"
            >
              <DropdownMenuLabel className="text-slate-900 dark:text-white">Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-blue-100 dark:bg-blue-800" />
              <DropdownMenuItem>Профиль</DropdownMenuItem>
              <DropdownMenuItem>Мои курсы</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Выход</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu - using Sheet component */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" className="mr-2 hover:bg-white/10" onClick={toggleSearch}>
            <Search className="h-4 w-4" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r-blue-200 bg-white dark:bg-slate-900">
              <SheetHeader>
                <SheetTitle className="flex items-center text-slate-900 dark:text-white">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Asteroid
                </SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <nav className="flex flex-col space-y-6">
                  <Link
                    href="/courses"
                    className="text-base font-medium text-slate-900 dark:text-white transition-colors hover:text-blue-500"
                  >
                    Курсы
                  </Link>
                  <div>
                    <h3 className="font-medium mb-2 text-slate-900 dark:text-white">Resources</h3>
                    <div className="pl-4 border-l border-blue-200 dark:border-blue-800 space-y-2">
                      <Link
                        href="/resources/articles"
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-blue-500"
                      >
                        Статьи
                      </Link>
                      <Link
                        href="/resources/videos"
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-blue-500"
                      >
                        Видеоуроки
                      </Link>
                      <Link
                        href="/resources/downloads"
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-blue-500"
                      >
                        Загрузки
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/community"
                    className="text-base font-medium text-slate-900 dark:text-white transition-colors hover:text-blue-500"
                  >
                    Телеграм
                  </Link>

                  <div className="pt-4 space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 dark:border-blue-800 text-slate-900 dark:text-white"
                    >
                      <Avatar className="h-5 w-5 mr-2">
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      Профиль
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 dark:border-blue-800 text-slate-900 dark:text-white"
                    >
                      Мои курсы
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 dark:border-blue-800 text-slate-900 dark:text-white"
                    >
                      Настройки
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Command Menu for Search */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <CommandInput
            placeholder="Поиск курсов, материалов..."
            className="border-none focus-visible:ring-0 text-slate-900 dark:text-white"
          />
          <CommandList className="border-t border-blue-200 dark:border-blue-800">
            <CommandEmpty className="text-slate-700 dark:text-slate-300">Результатов не найдено.</CommandEmpty>
            <CommandGroup heading="Популярные запросы" className="text-slate-900 dark:text-white">
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <Search className="mr-2 h-4 w-4" />
                <span>Основы программирования</span>
              </CommandItem>
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <Search className="mr-2 h-4 w-4" />
                <span>Математика</span>
              </CommandItem>
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <Search className="mr-2 h-4 w-4" />
                <span>Изучение языков</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator className="bg-blue-100 dark:bg-blue-800" />
            <CommandGroup heading="Категории" className="text-slate-900 dark:text-white">
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <span>Наука</span>
              </CommandItem>
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <span>Технологии</span>
              </CommandItem>
              <CommandItem className="text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                <span>Искусство</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </header>
  )
}
