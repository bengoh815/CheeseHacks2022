import Head from 'next/head'
import MainBox from '../src/MainBox'
import NavBar from '../src/navBar/NavBar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>CheeseHacks Project</title>
                <link rel="icon" href="/random.ico"/>
            </Head>
            <main>
                <MainBox/>
            </main>
        </div>
    )
}