import Head from "next/head";
import {Navbar} from "@/components/navbar/navbar";
import {Footer} from "@/components/footer/footer";
import style from './mouse.module.scss';

const MouseRanking = () => {
    return (
        <>
            <Head>
                <title>Rankings</title>
                <meta name="description" content="The one-stop website for your gaming mouse and keyboard"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/temporary-icon.svg"/>
            </Head>
            <Navbar/>
            <main>
                <h1 className={style.title}>Mouse Rankings</h1>
                <p>This list is based on a collection of recommendations from pros, user reviews, and other weighted factors to bring you the most accurate rankings.</p>


            </main>

            <Footer/>
        </>
    );
};

export default MouseRanking;