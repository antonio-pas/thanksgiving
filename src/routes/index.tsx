import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-5xl w-full px-8 mx-auto flex items-center justify-center min-h-screen flex-col gap-4">
      <h1 className="text-gray-200 text-6xl font-medium">Enter Your Room Code</h1>
      <p className="text-muted-foreground">Enter a room code to get started with appname.dom</p>
      <div className="flex gap-2">
        <button 
          className="text-sm h-7.5 rounded-[5px] bg-primary px-2.75"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}
