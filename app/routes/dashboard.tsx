import { Outlet, useLoaderData} from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { SignedIn, useAuth} from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { LogoBanner } from 'components'
import { getDB } from 'utils'
import { users } from '@clerk/clerk-sdk-node'

const dbErrorMessage =
    'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.'

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request)
    console.log(userId)
    //if they aren't signed in, redirect them to sign in page
    if (!userId) return redirect('/sign-in')
    const {firstName, lastName } = await users.getUser(userId);
    console.log('Got user in loader...');
    console.log(`${firstName} ${lastName}`)
    const db = await getDB(request)
    if (!db) {
        return json({ error: dbErrorMessage })
    }

    const { data } = await db.from('songs').select()

    if (!data) {
        return json({ error: dbErrorMessage })
    }

    return json({firstName, lastName })
}

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const { userId } = await getAuth(request)

    const song = formData.get('add-song')

    const db = await getDB(request)
    if (!db) return null

    await db.from('songs').insert({ body: song, user_id: userId })
    return null
}

export default function Index() {
    const { signOut } = useAuth()
    const data = useLoaderData()
    const headingSize = useBreakpointValue({ base: 'lg', sm: '2xl', lg: '4xl' })
   /*
   Since the below will be our dashboard, it should be in the dashboard route
   As per remix convention
   See: https://remix.run/docs/en/v1/guides/routing
   */
    return (
        <Stack
            justify='center'
            textAlign='center'
            h='100vh'
            flex={1}
            color='white'
            gap={20}
        >
            <Stack gap={4} p={{ base: 4, md: 8 }} align='center'>
                <Heading
                    as='h1'
                    size={headingSize}
                    textTransform='uppercase'
                    color='green.400'
                >
                    {`Welcome ${data.firstName} ${data.lastName}`}
                </Heading>
                <SignedIn>
                    <Outlet/>
                    <Stack align='center' gap={4}>
                        <Button onClick={() => signOut()} bg='gray.500'>
                            Sign out
                        </Button>
                    </Stack>
                </SignedIn>
            </Stack>
            <LogoBanner />
        </Stack>
    )
}
