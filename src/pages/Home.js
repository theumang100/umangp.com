import React, { useState, useEffect } from "react";
import '../css/style.css';
import Header from "./Header";

function Home() {
    const [repos, setPublicRepoCount] = useState(0)

    useEffect(() => {
        async function getGithubAPI() {
            const response = await fetch('https://api.github.com/users/theumang100')
            const data = await response.json()

            return data
        }

        getGithubAPI().then((data) => {
            setPublicRepoCount(data.public_repos)
        })
    }, [])

    return (<>
        <Header />

        <div className="intro_container">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <h1>I'm Umang Patel.</h1>
                        <p>I'm <b>computer engineer</b>. This website is my mind's reflection - a compendium of the things I've
                            learned and created over the years.</p>
                        <p>
                            <a rel="noreferrer" href="https://github.com/theumang100" target="_blank" className="github_button" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    className="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                &nbsp; {Number(repos).toLocaleString()} GitHub Repository
                            </a>
                        </p>
                    </div>
                </div>


            </div>
        </div>

        <div className="smallinfo_container">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <h1>Connect With Me</h1>
                        <ul>
                            <li>
                                <a rel="noreferrer" href="https://twitter.com/the_umang_" target="_blank">Twitter</a>
                            </li>
                            <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/umangpatel100/" target="_blank">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>





    </>);
}

export default Home;