'use client'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-purple-950 p-4'>
      <div className='relative w-full max-w-4xl'>
        <div className='absolute inset-0 flex items-center justify-center text-8xl sm:text-9xl opacity-60 z-0'>☄️</div>
        <h1 className='relative z-10 text-center text-5xl font-extrabold tracking-wider text-white sm:text-7xl md:text-8xl'>
          ASTEROID
        </h1>
      </div>
    </div>
  )
}
