import Head from 'next/head'
import Box from '../src/Box'
import NavBar from '../src/navBar/NavBar'

export default function Home() {
    return (
        <div >
            <Head>
                <title>CheeseHacks Project</title>
                <link rel="icon" href="/random.ico"/>
            </Head>
            <NavBar/>
            <main>
                <Box/>
            </main>
        </div>
    )
}