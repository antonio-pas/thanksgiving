import { tv, VariantProps } from 'tailwind-variants'
import { ComponentProps, JSX } from 'react'
export const buttonVariants = tv({
  base:['flex items-center justify-center rounded-md gap-3 font-semibold focus-visible:outline focus-visible:outline-2 -focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-primary'],
  variants: {
    size: {
      sm: 'h-7.5 px-2.5 text-sm',
      md: 'h-9 px-3.5 text-[1rem]',
    },
    variant: {
      primary: 'bg-primary hover:bg-primary-hover',
      outline: 'bg-transparent hover:bg-hover border border-border',
    }
  },
  defaultVariants: {
    size: 'sm',
    variant: 'outline'
  }
})
