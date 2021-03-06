import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Skills from "../components/skills";
import BulletpointSkills from "../components/bullet_point_skills";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Nathaniel Mosco App</title>
                <meta name="description" content="Nathaniel Mosco's portfolio" />
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>

            <Layout home>
                <main>
                    <Link href="/projects" className="projects_link">
                        <a>
                            <h3>See Projects Here</h3>
                        </a>
                    </Link>
                    <Skills className="skills_icon_view" />
                    <BulletpointSkills className="skills_bulletpoint_view" />
                    <h2> About Me</h2>
                    <p className="description">
                        I'm a web developer. I love web design and problem solving and am here to
                        help you with your web development needs. I am passionate about learning,
                        intuitive design, and database management. In fact, I learned to use a new
                        technology, Next.JS, to build this portfolio.
                        <br />
                        My background is in sales with a brief time working in the medical field as
                        an RN. My passion for helping people is met through web development as I can
                        design solutions to meet the needs of others. My goal is to make technology
                        work for us to produce an online experience that is both intuitive and
                        accessible.
                        <br />
                    </p>
                    <img
                        src="/images/familyphoto.jpg"
                        alt="family photo"
                        className="family_photo"
                    />
                </main>
            </Layout>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    // padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                h2 {
                    font-size: 2.2rem;
                    margin: 3.5rem 0 0 0;
                }
                h3 {
                    font-size: 1.8rem;
                    margin: 0.5rem 0;
                }
                h3:hover {
                    color: blue;
                    background-color: #f5f5f58c;
                    border-radius: 15%;
                }

                a {
                    color: inherit;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                    padding: 0 4rem;
                }

                @media (max-width: 800px) {
                    .description {
                        padding: 0 2rem;
                    }
                }
                .family_photo {
                    max-width: 100%;
                    padding: 1rem;
                    height: auto;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
                        Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                .logo {
                    height: 1em;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}
