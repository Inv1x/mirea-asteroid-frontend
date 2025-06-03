"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Search, Star, Clock, Users, BookOpen, Rocket, Globe, Atom } from "lucide-react"
import { mockCourses, categories as mockCategories, Course } from "@/mocks/courses"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все курсы")
  const [displayedCourses, setDisplayedCourses] = useState(6)
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])

  const categories = [
    { name: "Все курсы", count: mockCategories[0].count, icon: BookOpen },
    { name: "Астрономия", count: mockCategories[1].count, icon: Star },
    { name: "Физика", count: mockCategories[2].count, icon: Atom },
    { name: "Технологии", count: mockCategories[3].count, icon: Rocket },
    { name: "Планетология", count: mockCategories[4].count, icon: Globe },
    { name: "История", count: mockCategories[5].count, icon: BookOpen },
    { name: "Астрофизика", count: mockCategories[6].count, icon: Star }
  ]

  // Filter courses based on search and category
  useEffect(() => {
    let filtered = mockCourses

    // Filter by category
    if (selectedCategory !== "Все курсы") {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    // Filter by search query (title only)
    if (searchQuery.trim()) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredCourses(filtered)
    setDisplayedCourses(6) // Reset to show first 6 courses when filters change
  }, [searchQuery, selectedCategory])

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Search is already handled in the above useEffect
    }, 150)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleLoadMore = () => {
    setDisplayedCourses(prev => prev + 6)
  }

  const coursesToShow = filteredCourses.slice(0, displayedCourses)
  const hasMoreCourses = displayedCourses < filteredCourses.length

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'Средний': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'Продвинутый': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
      case 'Эксперт': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-4">
            Исследуйте курсы
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Откройте для себя увлекательный мир космоса через наши экспертные курсы
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
              <Input 
                placeholder="Поиск курсов по названию..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              const isSelected = selectedCategory === category.name
              return (
                <Button
                  key={category.name}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.name)}
                  className={`h-9 px-3 ${
                    isSelected 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 h-5 px-1.5 text-xs ${
                      isSelected 
                        ? "bg-blue-500 text-white" 
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesToShow.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-fuchsia-100 dark:from-blue-900/20 dark:to-fuchsia-900/20 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-blue-500/50" />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {course.price}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight text-slate-900 dark:text-slate-100">{course.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2 text-slate-600 dark:text-slate-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {course.instructor}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white">
                  <Link href={`/courses/${course.id}`}>
                    Просмотреть курс
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {hasMoreCourses && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleLoadMore}
              className="px-8 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Загрузить еще курсы
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Курсы не найдены
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Попробуйте изменить критерии поиска или выбрать другую категорию
            </p>
          </div>
        )}
      </div>
    </div>
  )
}