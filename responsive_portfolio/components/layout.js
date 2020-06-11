import Head from "next/head";
import style from "./layout.module.scss";
import Link from "next/link";
import Nav from "../components/header/nav";
import Footer from "../components/footer/footer";

const jobTitle = "Fullstack Web Developer";
const name = "Nathaniel Mosco";

export default function Layout({ children, home, projects, resume, certifications, blog }) {
    return (
        <div className={style.container}>
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" />
                <meta name="description" content="Nathaniel Mosco's portfolio" />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            <Nav />
            <header className={style.header}>
                {home && <div className={style.splash} />}
                {blog && (
                    <div className={style.image_container}>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className={`${style.headerImage}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <h2>{name}</h2>
                            </a>
                        </Link>
                    </div>
                )}
            </header>
            <main>{children}</main>
            {(blog || certifications) && (
                <div className={style.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            {home ? <Footer home /> : <Footer />}
        </div>
    );
}
