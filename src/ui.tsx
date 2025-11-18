import { tv } from 'tailwind-variants'

// type Props<
//   T extends keyof JSX.IntrinsicElements | React.ElementType,
//   V extends (...args: any[]) => any,
// > = ComponentProps<T> & VariantProps<V>

export const buttonVariants = tv({
  base: [
    'flex items-center justify-center gap-3 rounded-md',
    'font-semibold active:brightness-70 disabled:opacity-50',
    'focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-primary',
  ],
  variants: {
    size: {
      sm: 'h-7.5 px-2.5 text-sm',
      md: 'h-9 px-3.5 text-[1rem]',
    },
    variant: {
      primary: 'bg-primary hover:bg-primary-hover shadow-sm',
      transparent: 'bg-primary/20 hover:bg-primary-hover/20',
      outline: 'bg-transparent hover:bg-hover border border-border',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'outline',
  },
})

export const inputVariants = tv({
  base: [
    'flex items-center justify-center gap-3 rounded-md',
    'font-medium disabled:opacity-50',
    'bg-background placeholder:text-muted-foreground border border-border',
    '-focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-primary',
  ],
  variants: {
    size: {
      md: 'h-9 px-2.5 text-[1rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
