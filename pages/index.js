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
                <h1>Hello world</h1>
            </main>
        </div>
    )
}