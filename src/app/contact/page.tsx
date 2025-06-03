import Link from "next/link"
import Image from "next/image"
import { Mail, Github, GraduationCap, Users, MessageCircle, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { authors } from "@/mocks/authors"

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-fuchsia-100 dark:from-blue-900/20 dark:to-fuchsia-900/20">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-4">
            Наша команда
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Познакомьтесь с создателями образовательной платформы Asteroid, которые делают изучение космоса доступным и увлекательным
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {authors.map((author, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-fuchsia-100 dark:from-blue-900/20 dark:to-fuchsia-900/20 flex items-center justify-center">
                    {author.avatar ? (
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-slate-900 dark:text-slate-100 mb-1">
                      {author.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {author.role}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {author.specialization.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {author.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Link 
                      href={`mailto:${author.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {author.email}
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Link 
                      href={`https://github.com/${author.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      github.com/{author.github}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                  Общие вопросы
                </CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Есть вопросы о платформе или курсах?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Link 
                    href="mailto:info@asteroid.edu"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    info@asteroid.edu
                  </Link>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Мы отвечаем на письма в течение 24 часов
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                  Техническая поддержка
                </CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Нужна помощь с техническими вопросами?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Link 
                    href="mailto:support@asteroid.edu"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    support@asteroid.edu
                  </Link>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Техподдержка работает круглосуточно
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-fuchsia-50 dark:from-blue-900/20 dark:to-fuchsia-900/20 border-blue-200 dark:border-blue-800 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Присоединяйтесь к нам!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Хотите стать частью команды Asteroid или предложить сотрудничество? Мы всегда открыты для новых идей и партнерств.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white">
                  <Link href="mailto:careers@asteroid.edu">
                    Карьерные возможности
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <Link href="/community">
                    Сообщество
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}