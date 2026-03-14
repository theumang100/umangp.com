import React, { useState, useEffect } from "react";
import '../css/style.css';
import Header from "./Header";
import { Link } from "react-router-dom";

function Home() {
    const [repos, setPublicRepoCount] = useState(0);

    useEffect(() => {
        async function getGithubAPI() {
            try {
                const response = await fetch('https://api.github.com/users/theumang100');
                const data = await response.json();
                setPublicRepoCount(data.public_repos || 0);
            } catch {
                setPublicRepoCount(0);
            }
        }

        getGithubAPI();

        console.log(`
Hey 👋 curious developer.

If you're reading this, you definitely opened DevTools.

Yes... I still debug using console.log.

– Umang
        `);
    }, []);

    const fixBugs = () => {
        alert("Nice try. All bugs remain. Please restart your life.");
    };

    const recentRants = [
        {
            title: "Debugging at 3 AM: A Love Letter to My Imminent Divorce",
            slug: "debugging-at-3am",
            date: "March 10, 2026",
            readTime: "4 min",
            excerpt: "Turns out the bug was me. Who knew? Spoiler: everyone except future-me.",
        },
        {
            title: "Tabs vs Spaces: The War Is Over and We All Lost",
            slug: "tabs-vs-spaces-the-final-verdict",
            date: "February 28, 2026",
            readTime: "3 min",
            excerpt: "I used tabs. My team used spaces. HR used therapy.",
        },
        {
            title: "Why I Still Use console.log in 2026 Like It's 2008",
            slug: "console-log-in-2026",
            date: "January 15, 2026",
            readTime: "5 min",
            excerpt: "React DevTools? Nah. Print statements or GTFO. Fight me.",
        },
        {
            title: "How I Fixed the Bug by Deleting the Code. You're Welcome.",
            slug: "delete-to-fix",
            date: "November 20, 2025",
            readTime: "2 min",
            excerpt: "Sometimes rm -rf is the only correct solution.",
        },
    ];

    const statCards = [
        { value: "1,247,392", label: "Lines of code written" },
        { value: "12,247", label: "Bugs introduced" },
        { value: "0", label: "StackOverflow visits today" },
        { value: "Fluctuating", label: "Confidence level" },
    ];

    const connectLinks = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M13.3174 10.7744L19.1457 3H20.9999L13.8945 11.9999L21.9999 21H15.7174L10.3174 14.2256L4.1457 21H2.2915L9.7174 11.9999L3 3H9.2826L13.3174 10.7744ZM16.1805 19.5H17.5L4.5 4.5H3.18L16.1805 19.5Z" />
                </svg>
            ),
            title: "@oomangpatel",
            subtitle: "Bad takes, shipped daily",
            href: "https://x.com/oomangpatel",
            external: true,
        }, ,
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 12.5V5.5H2.5v7h2.443zm-1.222-8a1.222 1.222 0 1 1 0-2.444 1.222 1.222 0 0 1 0 2.444zM12.5 12.5v-3.778c0-.896-.2-1.59-.632-2.078-.432-.488-1.02-.732-1.77-.732-.75 0-1.338.244-1.77.732-.432.488-.632 1.182-.632 2.078V12.5h2.443v-3.5c0-.828.2-1.46.6-1.895.4-.435 1.005-.653 1.813-.653.808 0 1.413.218 1.813.653.4.435.6 1.067.6 1.895V12.5h2.443z" />
                </svg>
            ),
            title: "LinkedIn",
            subtitle: "Professional me (allegedly)",
            href: "https://www.linkedin.com/in/umangpatel100/",
            external: true,
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
            ),
            title: "Email",
            subtitle: "I usually reply",
            href: "mailto:umang.patel.tech@gmail.com",
            external: false,
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            ),
            title: "GitHub",
            subtitle: `${Number(repos).toLocaleString()} repos of chaos`,
            href: "https://github.com/theumang100",
            external: true,
        },
    ];

    return (
        <>
            <Header />

            <div
                className="intro_container"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "7rem 0 5.5rem",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "520px",
                        height: "520px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(253,186,58,0.15) 0%, rgba(253,186,58,0.06) 35%, rgba(253,186,58,0) 70%)",
                        pointerEvents: "none",
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 text-center">
                            <div
                                style={{
                                    display: "inline-block",
                                    padding: "0.4rem 0.85rem",
                                    marginBottom: "1.25rem",
                                    borderRadius: "999px",
                                    background: "rgba(0,0,0,0.05)",
                                    color: "#666",
                                    fontSize: "0.95rem",
                                }}
                            >
                                Software engineer • bug manufacturer • occasional philosopher
                            </div>

                            <h1
                                style={{
                                    fontSize: "clamp(2.7rem, 6vw, 4.5rem)",
                                    lineHeight: 1,
                                    marginBottom: "1.25rem",
                                }}
                            >
                                Hey, I&apos;m Umang
                            </h1>

                            <p
                                style={{
                                    maxWidth: "760px",
                                    margin: "0 auto",
                                    fontSize: "1.35rem",
                                    lineHeight: "1.7",
                                    color: "#58606b",
                                }}
                            >
                                Computer engineer who writes code, breaks things, and occasionally
                                gets promoted to family tech support. This site is where I put my
                                projects, thoughts, and evidence that I can almost center a div.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                    marginTop: "2.25rem",
                                }}
                            >
                                <a
                                    rel="noreferrer"
                                    href="https://github.com/theumang100"
                                    target="_blank"
                                    className="github_button"
                                    role="button"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.65rem",
                                        margin: 0,
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    {Number(repos).toLocaleString()} Public Repos
                                </a>

                                <button
                                    onClick={fixBugs}
                                    style={{
                                        padding: "0.95rem 1.15rem",
                                        borderRadius: "10px",
                                        border: "1px solid #d6d9de",
                                        background: "#fff",
                                        color: "#1b1d25",
                                        cursor: "pointer",
                                        fontWeight: 700,
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                                    }}
                                >
                                    Fix All Bugs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    background: "#ffffff",
                    padding: "3rem 0 4.5rem",
                }}
            >
                <div className="container">
                    <div className="row">
                        {statCards.map((item, index) => (
                            <div className="col-md-6 col-lg-3 mb-4" key={index}>
                                <div
                                    style={{
                                        height: "100%",
                                        background: "#fff",
                                        border: "1px solid #e6e8ec",
                                        borderRadius: "18px",
                                        padding: "1.4rem 1.2rem",
                                        textAlign: "center",
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.04)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "var(--heading-font-family)",
                                            fontSize: item.value === "Fluctuating" ? "1.5rem" : "1.9rem",
                                            color: "#1b1d25",
                                            marginBottom: "0.35rem",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {item.value}
                                    </div>
                                    <div
                                        style={{
                                            color: "#6c7480",
                                            fontSize: "0.96rem",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="rants_container"
                style={{
                    padding: "5rem 0",
                    background: "#0d0d0d",
                }}
            >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12 text-center">
                            <div
                                style={{
                                    display: "inline-block",
                                    padding: "0.35rem 0.8rem",
                                    marginBottom: "1rem",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.06)",
                                    color: "#aab2bf",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Blog-ish things
                            </div>

                            <h2
                                style={{
                                    color: "#ffffff",
                                    marginBottom: "1rem",
                                    fontSize: "2.1rem",
                                }}
                            >
                                Recent Crimes Against Code
                            </h2>

                            <p
                                style={{
                                    maxWidth: "650px",
                                    margin: "0 auto 3rem",
                                    color: "#8d96a3",
                                    fontSize: "1.05rem",
                                }}
                            >
                                Debugging horror stories, questionable opinions, and occasional
                                breakthroughs disguised as sarcasm.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {recentRants.map((post, index) => (
                            <div className="col-md-6 col-lg-3 mb-4" key={index}>
                                <Link to={`/blog/${post.slug}`} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                                    <div
                                        style={{
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            borderRadius: "18px",
                                            padding: "1.5rem",
                                            height: "100%",
                                            background: "linear-gradient(180deg, #161616 0%, #111111 100%)",
                                            boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                                            transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-8px)";
                                            e.currentTarget.style.borderColor = "rgba(253, 186, 58, 1)";
                                            e.currentTarget.style.boxShadow = "0 18px 50px rgba(0,0,0,0.32)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)";
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "rgba(253, 186, 58, 1)",
                                                fontSize: "0.85rem",
                                                marginBottom: "0.85rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.02em",
                                            }}
                                        >
                                            {post.date} • {post.readTime} read
                                        </div>

                                        <h3
                                            style={{
                                                marginBottom: "0.9rem",
                                                fontSize: "1.2rem",
                                                lineHeight: 1.35,
                                                color: "#ffffff",
                                            }}
                                        >
                                            {post.title}
                                        </h3>

                                        <p
                                            style={{
                                                color: "#9ea7b3",
                                                lineHeight: 1.65,
                                                margin: 0,
                                                fontSize: "0.98rem",
                                            }}
                                        >
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div
                        className="text-center mt-4"
                        style={{
                            color: "#6f7782",
                            fontSize: "0.95rem",
                        }}
                    >
                        More rants coming soon™. Assuming I stop procrastinating long enough to write them.
                    </div>
                </div>
            </div>

            <div
                className="connect_panel"
                style={{
                    background: "#ffffff",
                    padding: "5rem 0 5.5rem",
                    borderTop: "1px solid #eceef2",
                }}
            >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12 text-center">
                            <h2
                                style={{
                                    marginBottom: "0.9rem",
                                    color: "#1b1d25",
                                    fontSize: "2rem",
                                }}
                            >
                                Connect With Me
                            </h2>

                            <p
                                style={{
                                    color: "#707784",
                                    maxWidth: "560px",
                                    margin: "0 auto 3rem",
                                    fontSize: "1.05rem",
                                }}
                            >
                                Reach out before I disappear into another completely avoidable debugging session.
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {connectLinks.map((item, index) => (
                            <div className="col-md-6 col-lg-3 mb-4" key={index}>
                                <a
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noreferrer" : undefined}
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        textAlign: "center",
                                        background: "#fff",
                                        border: "1px solid #e7e9ee",
                                        borderRadius: "18px",
                                        padding: "1.6rem 1rem",
                                        textDecoration: "none",
                                        color: "#1b1d25",
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.04)",
                                        transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-6px)";
                                        e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.08)";
                                        e.currentTarget.style.borderColor = "#d9dde5";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.04)";
                                        e.currentTarget.style.borderColor = "#e7e9ee";
                                    }}
                                >
                                    <div style={{ fontSize: "2.3rem", marginBottom: "0.6rem" }}>
                                        {item.icon}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "1.08rem",
                                            marginBottom: "0.35rem",
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.93rem",
                                            color: "#66707d",
                                        }}
                                    >
                                        {item.subtitle}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "2.5rem",
                            color: "#8a919d",
                            fontSize: "0.92rem",
                        }}
                    >
                        Built with blood, sweat, StackOverflow, and questionable life choices.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;