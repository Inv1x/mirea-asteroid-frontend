"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff, GraduationCap, AlertCircle, CheckCircle, Loader2 } from "lucide-react"

const signupSchema = z.object({
  fullName: z
    .string()
    .min(1, "Полное имя обязательно")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов"),
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Некорректный формат email"),
  password: z
    .string()
    .min(1, "Пароль обязателен")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .regex(/(?=.*[a-zA-Z])(?=.*\d)/, "Пароль должен содержать буквы и цифры"),
  confirmPassword: z
    .string()
    .min(1, "Подтверждение пароля обязательно"),
  agreeToTerms: z
    .boolean()
    .refine(val => val === true, "Необходимо согласиться с условиями использования"),
  subscribeNewsletter: z.boolean().optional()
}).refine(data => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"]
})

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      subscribeNewsletter: false
    },
    mode: "onChange"
  })

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = form

  const watchedAgreeToTerms = watch("agreeToTerms")
  const watchedSubscribeNewsletter = watch("subscribeNewsletter")

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setServerError(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically make an API call to register the user
      console.log('Form submitted:', data)
      
      setIsSuccess(true)
    } catch {
      setServerError('Произошла ошибка при регистрации. Попробуйте снова.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: 'google' | 'vk') => {
    console.log(`Login with ${provider}`)
    // Implement social login logic here
  }

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                Регистрация успешна!
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Проверьте вашу почту для подтверждения аккаунта
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white">
                <Link href="/login">Перейти к входу</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-fuchsia-100 dark:from-blue-900/20 dark:to-fuchsia-900/20">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-2">
              Присоединяйтесь к нам
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Создайте аккаунт и начните свое космическое путешествие
            </p>
          </div>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">Регистрация</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Заполните форму для создания нового аккаунта
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                {/* Server Error */}
                {serverError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{serverError}</AlertDescription>
                  </Alert>
                )}

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300">Полное имя</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Введите ваше полное имя"
                      className={`pl-10 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 ${errors.fullName ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400' : ''}`}
                      disabled={isLoading}
                      {...register("fullName")}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-500 dark:text-red-400">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={`pl-10 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 ${errors.email ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400' : ''}`}
                      disabled={isLoading}
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Создайте надежный пароль"
                      className={`pl-10 pr-10 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 ${errors.password ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400' : ''}`}
                      disabled={isLoading}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500 dark:text-red-400">{errors.password.message}</p>
                  )}
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Минимум 8 символов, включая буквы и цифры
                  </p>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300">Подтвердите пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Повторите пароль"
                      className={`pl-10 pr-10 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 ${errors.confirmPassword ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400' : ''}`}
                      disabled={isLoading}
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 dark:text-red-400">{errors.confirmPassword.message}</p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      className="mt-1 border-slate-300 dark:border-slate-600 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-600 dark:data-[state=checked]:border-blue-500"
                      checked={watchedAgreeToTerms}
                      onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean, { shouldValidate: true })}
                      disabled={isLoading}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer inline text-slate-700 dark:text-slate-300">
                      Я соглашаюсь с{" "}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline inline">
                        условиями использования
                      </Link>{" "}
                      и{" "}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline inline">
                        политикой конфиденциальности
                      </Link>
                    </Label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-sm text-red-500 dark:text-red-400">{errors.agreeToTerms.message}</p>
                  )}
                </div>

                {/* Newsletter */}
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox 
                    id="newsletter"
                    className="border-slate-300 dark:border-slate-600 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-600 dark:data-[state=checked]:border-blue-500"
                    checked={watchedSubscribeNewsletter}
                    onCheckedChange={(checked) => setValue("subscribeNewsletter", checked as boolean)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="newsletter" className="text-sm cursor-pointer text-slate-700 dark:text-slate-300">
                    Получать новости о новых курсах и обновлениях
                  </Label>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white"
                  size="lg"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Создание аккаунта...
                    </>
                  ) : (
                    'Создать аккаунт'
                  )}
                </Button>

                {/* Divider */}
                <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200 dark:border-slate-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-slate-800 px-2 text-slate-500 dark:text-slate-400">
                      или
                    </span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    type="button"
                    onClick={() => handleSocialLogin('google')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    type="button"
                    onClick={() => handleSocialLogin('vk')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z">
                      </path>
                    </svg>
                    VK
                  </Button>
                </div>

                {/* Login Link */}
                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Уже есть аккаунт?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium">
                    Войти
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}