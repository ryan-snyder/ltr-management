import { useLoaderData} from '@remix-run/react'
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
import { Info, DateTime } from "luxon"
import { useEffect } from 'react'
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
    const current = DateTime.now()
    const weekdays = Info.weekdays().slice(0, 5)
    /*
     logic for turning weekday into date
     1. Get current date and weekday I.e Thursday the 15th, or index 3
     2. Go through array, for each value, subtract the index of the current weekday from the array index
         I.E for monday, take 0-3 = -3
      3. Add that number from todays date I.E for monday, take the 15th - 3 days = the 12th


      For the current day, I.E thursday it would be 0 which means it doesn't change

      Right now, we're going to do it in the same map as the cards, 
      but we should do it either as a loader (because that will also get the api data) or as a react hook
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
                    <Stack spacing={4} align='center' direction='row'>
                            {weekdays.map((day, ind) => 
                                <Card variant='filled' key={ind}>
                                    <CardHeader>
                                        <Heading size='md'>{day}</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>X hours worked</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Text>{current.minus({days: (current.weekday-1) - ind}).toLocaleString(DateTime.DATE_MED)}</Text>
                                    </CardFooter>
                              </Card>
                            )}
                    </Stack>
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
