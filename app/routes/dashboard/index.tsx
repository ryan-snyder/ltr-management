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
import { Info, DateTime } from "luxon"

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request)
    console.log(userId)
    //if they aren't signed in, redirect them to sign in page
    if (!userId) return redirect('/sign-in')
    return null
}


export default function Dashboard() {
    const current = DateTime.now()
    const weekdays = Info.weekdays().slice(0, 5)
   /*
   Since the below will be our dashboard, it should be in the dashboard route
   As per remix convention
   See: https://remix.run/docs/en/v1/guides/routing
   */
    return (
                    <Stack spacing={4} align='center' direction='row'>
                            {weekdays.map((day, ind) => 
                                <Card key={ind} bgColor={ind == (current.weekday-1) ? 'darkgray' : 'white'} textColor='black'>
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
    )
}
