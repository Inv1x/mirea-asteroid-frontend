  export interface Author {
    name: string
    role: string
    description: string
    avatar: string
    email: string
    github: string
    specialization: string[]
  }
  
  export const authors: Author[] = [
    {
      name: "Ульяна Фролова",
      role: "Соосновательница и ведущий разработчик",
      description: "Специалист по фронтенд-разработке и UI/UX дизайну. Отвечает за пользовательский интерфейс и опыт взаимодействия с платформой.",
      avatar: "/avatars/uliana.jpg",
      email: "ulyana@asteroid.edu",
      github: "Uliana-hash",
      specialization: ["Frontend", "UI/UX", "React", "TypeScript"]
    },
    {
      name: "Денис Ширяев",
      role: "Сооснователь и технический директор",
      description: "Эксперт в области бэкенд-разработки и архитектуры систем. Руководит технической стороной проекта и разработкой образовательного контента.",
      avatar: "/avatars/denis.jpg",
      email: "denis@asteroid.edu",
      github: "TrIIfa",
      specialization: ["Backend", "DevOps", "Python", "Архитектура"]
    }
  ]