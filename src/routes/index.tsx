import { createFileRoute } from '@tanstack/react-router'
import { buttonVariants, inputVariants } from '@/ui'
import { Input, Button, Form, Field, Dialog } from '@base-ui-components/react'
import { Plus } from 'lucide-react'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-sm w-full px-8 mx-auto flex py-36 min-h-screen flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-5xl tracking-tight font-semibold mb-4">Get Started</h1>
        <Form className="flex flex-col items-start gap-4">
          <Field.Root className="flex flex-col gap-1.5">
            <Field.Label className="font-medium">Room Code</Field.Label>
            <Field.Control placeholder="Enter a room code..." className={inputVariants()} />
            <Field.Error className="text-rose-500 font-semibold">Error</Field.Error>
          </Field.Root>
          <Button className={buttonVariants({ size: 'md', variant: 'primary' })}>
            Get Started
          </Button>
          <div className="flex items-center grid-cols-3 w-full text-muted-foreground gap-2">
          <div className="h-px bg-border w-full"></div>
            or
          <div className="h-px bg-border w-full"></div>
          </div>
          <Dialog.Root>
            <Dialog.Trigger render={
              <Button className={buttonVariants({ size: 'md', variant: 'outline', className: 'w-full' })}>
                <Plus size={18} />
                Create a New Room
              </Button>
            } />
            <Dialog.Portal>
              <Dialog.Backdrop className="inset-0 absolute bg-black/50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition duration-150" />
              <Dialog.Popup className="absolute px-6 pb-6 bg-surface pt-4.5 border-border rounded-lg border max-w-sm w-full max-h-96 overflow-y-auto top-1/2 left-1/2 -translate-1/2 data-[starting-style]:opacity-0 data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 transition duration-150">
                <Dialog.Title className="text-xl sm:text-2xl tracking-tight font-semibold mb-4">Create a New Room</Dialog.Title>
                <Form className="flex flex-col items-start gap-4">
                  <Field.Root className="flex flex-col gap-1.5">
                    <Field.Label className="font-medium">Room Name</Field.Label>
                    <Field.Control placeholder="Enter a name..." className={inputVariants()} />
                    <Field.Error className="text-rose-500 font-semibold">Error</Field.Error>
                  </Field.Root>
                  <Field.Root className="flex flex-col gap-1.5">
                    <Field.Label className="font-medium">Room Code</Field.Label>
                    <Field.Control placeholder="Enter a room code..." className={inputVariants()} />
                    <Field.Error className="text-rose-500 font-semibold">Error</Field.Error>
                  </Field.Root>
                </Form>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </Form>
      </div>
    </div>
  )
}
