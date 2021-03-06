import React, { useState } from "react";
import Layout from "../components/layout";
import { GithubSvg, NetlifySvg, HerokuSvg, ZeitSvg } from "../components/svg";

export default function Projects() {
    const [spotifyGithub, setSpotifyGithub] = useState(false);
    const [spotifyDeployed, setSpotifyDeployed] = useState(false);

    const [beTaggerGithub, setBeTaggerGithub] = useState(false);
    const [beTaggerDeployed, setBeTaggerDeployed] = useState(false);

    const [feTaggerGithub, setFeTaggerGithub] = useState(false);
    const [feTaggerDeployed, setFeTaggerDeployed] = useState(false);

    const [comakeGithub, setComakeGithub] = useState(false);
    const [comakeDeployed, setComakeDeployed] = useState(false);

    return (
        <Layout projects>
            <main className="container">
                <h1 className="title">Projects</h1>

                <div className="grid">
                    <div className="card">
                        <h3>Spotify Song Suggester</h3>
                        <p>
                            React | Spotify API | Axios | Axios-OAuth-client | Styled-Components |
                            Material-UI | Netlify
                            <br />
                            <br /> A Front-End Application that interfaces with the Spotify API and
                            uses Data Structures and Algorithms to narrow search functionality to
                            match either the trending music preferences or the designated search
                            criteria.
                        </p>
                        <div className="icon_div">
                            <a
                                href="https://github.com/bw-spotify-oct/Front-End"
                                target="blank"
                                onMouseEnter={() => {
                                    setSpotifyGithub(true);
                                }}
                                onMouseLeave={() => {
                                    setSpotifyGithub(false);
                                }}
                            >
                                <GithubSvg color={spotifyGithub ? "#d2b48c" : "black"} />
                                Repository
                            </a>

                            <a
                                href="https://spotify-song-suggester-oct.netlify.app/"
                                target="blank"
                                onMouseEnter={() => {
                                    setSpotifyDeployed(true);
                                }}
                                onMouseLeave={() => {
                                    setSpotifyDeployed(false);
                                }}
                            >
                                <NetlifySvg color={spotifyDeployed ? "#d2b48c" : "#00C7B7"} />
                                Spotify <br /> Webpage
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Backend Tagger Email Client</h3>
                        <p>
                            Node | Express | IMAP | OAuth | Jest | Heroku
                            <br />
                            <br />
                            This Backend API fetches emails from an existing email account using
                            IMAP and parses through the incoming data to stream the emails to the
                            Front-End application. Additionally, this process stores relevant
                            email-id information to identify when new emails need to be fetched.
                        </p>
                        <div className="icon_div">
                            <a
                                href="https://github.com/natemosco/tagger-be"
                                target="blank"
                                onMouseEnter={() => {
                                    setBeTaggerGithub(true);
                                }}
                                onMouseLeave={() => {
                                    setBeTaggerGithub(false);
                                }}
                            >
                                <GithubSvg color={beTaggerGithub ? "#d2b48c" : "black"} />
                                Repository
                            </a>
                            <a
                                href="https://tagger-be-dev.herokuapp.com/"
                                target="blank"
                                onMouseEnter={() => setBeTaggerDeployed(true)}
                                onMouseLeave={() => setBeTaggerDeployed(false)}
                            >
                                <HerokuSvg color={beTaggerDeployed ? "#d2b48c" : "#430098"} />
                                Tagger <br /> API
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <h3> Frontend Tagger Email Client</h3>
                        <p>
                            React | Redux | OAuth | Styled-Components | Sass | Axios | Moment |
                            Heroku <br />
                            <br />
                            This Front-End application Solves the issue of locating similar emails
                            by topic, and without exact keywords. Integrating Data Structures and
                            Algorithms to create a relational map of email contents and pairing with
                            FuseJS the mapped emails can be filtered down to the most relevant
                            search query allowing for a client to retain thousands of emails without
                            stumbling to find the exact email in mind.
                        </p>
                        <div className="icon_div">
                            <a
                                href="https://github.com/natemosco/tagger-fe"
                                target="blank"
                                onMouseEnter={() => {
                                    setFeTaggerGithub(true);
                                }}
                                onMouseLeave={() => {
                                    setFeTaggerGithub(false);
                                }}
                            >
                                <GithubSvg color={feTaggerGithub ? "#d2b48c" : "black"} />
                                Repository
                            </a>
                            <a
                                href="https://tagger-fe.herokuapp.com/"
                                target="blank"
                                onMouseEnter={() => setFeTaggerDeployed(true)}
                                onMouseLeave={() => setFeTaggerDeployed(false)}
                            >
                                <HerokuSvg color={feTaggerDeployed ? "#d2b48c" : "#430098"} />
                                Tagger <br /> Webpage
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Co-Make</h3>
                        <p>
                            React | Use Context | Styled-Components | Axios | Yup | Animate-CSS |
                            Zeit
                            <br />
                            <br />
                            This Front-End application is a simple platform to create, vote, and
                            escalate issues in your local area or within your business. All issues
                            can be filtered by location and number of votes to see what is most
                            relevant to the people allowing those in a position to act work together
                            to "Co-Make" a change for the better and to raise awareness of the
                            issues the people deem important.
                        </p>
                        <div className="icon_div">
                            <a
                                href="https://github.com/Build-Week-CoMake/Front-End"
                                target="blank"
                                onMouseEnter={() => {
                                    setComakeGithub(true);
                                }}
                                onMouseLeave={() => {
                                    setComakeGithub(false);
                                }}
                            >
                                <GithubSvg color={comakeGithub ? "#d2b48c" : "black"} />
                                Repository
                            </a>
                            <a
                                href="https://comake-bw.now.sh/"
                                target="blank"
                                onMouseEnter={() => setComakeDeployed(true)}
                                onMouseLeave={() => setComakeDeployed(false)}
                            >
                                <ZeitSvg color={comakeDeployed ? "#d2b48c" : "black"} />
                                Co-Make <br /> Webpage
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .icon_div {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
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

                    width: 100vw;
                    margin-top: 2rem;
                }

                .card {
                    margin: 1rem;
                    height: 30rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                @media (max-width: 1300px) {
                    .card {
                        height: 33rem;
                    }
                }
                @media (max-width: 1100px) {
                    .card {
                        height: 36rem;
                    }
                }
                @media (max-width: 970px) {
                    .card {
                        height: 38rem;
                    }
                }
                @media (max-width: 890px) {
                    .card {
                        height: 45rem;
                    }
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card:hover a {
                    color: black;
                }
                .card:hover a:hover {
                    color: #d2b48c;
                }

                .card h3 {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    padding: 1rem 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                .logo {
                    height: 1em;
                }

                @media (max-width: 770px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </Layout>
    );
}
