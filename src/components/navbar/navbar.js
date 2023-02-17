import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/temporary-icon.svg";
import style from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={style.navbar}>

            <Link href={'/'}>
                <Image
                    src={icon}
                    alt={'icon'}
                />
            </Link>

            <div className={style.links}>
                <Link href={"/"} className={style.link}>Home</Link>
                <Link href={"/mouse"} className={style.link}>Mouse Rankings</Link>
                <Link href={""} className={style.link}>Keyboard Rankings</Link>
            </div>
        </div>
    );
};

export {Navbar};