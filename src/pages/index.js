import Head from 'next/head';
import Image from 'next/image';
import {Inter} from '@next/font/google';
import {Navbar} from "@/components/navbar/navbar";
import Link from "next/link";
import style from './index.module.scss';
import {Footer} from "@/components/footer/footer";

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <>
            <Head>
                <title>Mouserank</title>
                <meta name="description" content="The one-stop website for your gaming mouse and keyboard"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/temporary-icon.svg"/>
            </Head>
            <Navbar/>
            <main>
                <div className={style.entry}>
                    <h1>The one-stop website for your gaming mouse and keyboard</h1>
                </div>
                <div className={style.boxlinks}>
                    <Link href="">Mouse Rankings
                        <Image
                            alt="mouseimage"
                            src={"/mouseimgcrop.jpeg"}
                            width={200}
                            height={250}
                            quality={100}
                        />
                    </Link>
                    <Link href="">Keyboard Rankings
                        <Image
                            alt="keyboardimage"
                            src={"/keyboardcrop.jpeg"}
                            width={200}
                            height={250}
                            quality={100}
                        />
                    </Link>
                    <Link href="">Popular Among Pros
                        <Image
                            alt="tenzimage"
                            src={"/tenzcrop.jpeg"}
                            width={200}
                            height={250}
                            quality={100}
                        />
                    </Link>
                    <Link href={""}>Search by Brand
                        <Image
                            alt="razerimage"
                            src={"/razercrop.jpeg"}
                            width={200}
                            height={250}
                            quality={100}
                        />
                    </Link>

                </div>
            </main>

            <Footer/>
        </>
    );
}
