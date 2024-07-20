// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"
import { DrawerProvider } from '@/components/SidebarContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        {children}
      </DrawerProvider>
    </ChakraProvider>
  )
}