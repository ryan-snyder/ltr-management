import React from 'react'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import { rootAuthLoader } from '@clerk/remix/ssr.server'
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix'
import { Box, ChakraProvider, cookieStorageManagerSSR, Image, localStorageManager } from '@chakra-ui/react'
import { theme } from 'theme'
import 'focus-visible' // Remove Chakra's outline caused by clicks
import SidebarWithHeader from './components/sidebar-with-header'
import NavBar from './components/sidebar-with-header'

// Define and export your loader
export const loader: LoaderFunction = args => {
  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    // fetch data
    return { cookie: request.headers.get("cookie") ?? '' }
  });
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
  
//todo: Add nav
function App() {
    const { cookie } = useLoaderData();
    return (
        <Document>
            <ChakraProvider theme={theme}
              colorModeManager={typeof cookie === 'string'
              ? cookieStorageManagerSSR(cookie)
              : localStorageManager}
            >
              <NavBar>
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
              </NavBar>
            </ChakraProvider>
        </Document>
    )
}

export default ClerkApp(App)