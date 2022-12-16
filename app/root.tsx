import React from 'react'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import { rootAuthLoader } from '@clerk/remix/ssr.server'
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix'
import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import { theme } from 'theme'
import 'focus-visible' // Remove Chakra's outline caused by clicks

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, { loadUser: true });
};
export const CatchBoundary = ClerkCatchBoundary()

function Document({
    children,
    title = "LRT Management",
  }: {
    children: React.ReactNode;
    title?: string;
  }) {
    return (
      <html lang="en">
        <head>
          <Meta />
          <title>{title}</title>
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' ? (
                        <LiveReload />
                    ) : null}
        </body>
      </html>
    );
  }
  
function App() {
    return (
        <Document>
            <ChakraProvider theme={theme}>
                <Box as='main' minH='100vh' pos='relative'>
                    <Outlet />

                    <Image
                        src='images/cover.png'
                        alt='Bossa Nova Stack cover'
                        boxSize='full'
                        objectFit='cover'
                        pos='absolute'
                        top={0}
                        zIndex={-1}
                    />
                </Box>
            </ChakraProvider>
        </Document>
    )
}

export default ClerkApp(App)