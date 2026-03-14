import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import blogPosts from "../data/blogPosts";

function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find((item) => item.slug === slug);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    if (!post) {
        return (
            <>
                <Header />

                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: "4px",
                        width: `${scrollProgress}%`,
                        background: "#fdb63a",
                        zIndex: 9999,
                        transition: "width 0.1s ease-out"
                    }}
                />

                <div
                    className="container"
                    style={{
                        padding: "6rem 1rem",
                        textAlign: "center"
                    }}
                >
                    <h1>404</h1>
                    <p>This blog post does not exist. Much like my clean git history.</p>
                    <Link
                        to="/"
                        style={{
                            color: "#0ea5e9",
                            textDecoration: "none"
                        }}
                    >
                        ← Go back home
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "4px",
                    width: `${scrollProgress}%`,
                    background: "#fdb63a",
                    zIndex: 9999,
                    transition: "width 0.1s ease-out"
                }}
            />

            <div
                style={{
                    background: "#fff",
                    minHeight: "100vh",
                    padding: "5rem 0 6rem"
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className="col-md-10 col-lg-8"
                            style={{
                                maxWidth: "720px",
                                margin: "0 auto"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginBottom: "2rem",
                                    flexWrap: "wrap",
                                    paddingTop: "0.5rem"
                                }}
                            >
                                <Link
                                    to="/"
                                    style={{
                                        color: "#0ea5e9",
                                        textDecoration: "none",
                                        fontWeight: "500",
                                        fontSize: "0.95rem"
                                    }}
                                >
                                    ← Back to home
                                </Link>

                                <span
                                    style={{
                                        padding: "0.35rem 0.75rem",
                                        borderRadius: "999px",
                                        background: "#f4f6f8",
                                        color: "#666",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    {post.date} • {post.readTime} read
                                </span>
                            </div>

                            <h1
                                style={{
                                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                                    lineHeight: 1.1,
                                    marginBottom: "1.5rem",
                                    color: "#1b1d25"
                                }}
                            >
                                {post.title}
                            </h1>

                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    color: "#6b7280",
                                    lineHeight: 1.8,
                                    marginBottom: "2.5rem"
                                }}
                            >
                                {post.excerpt}
                            </p>

                            <div
                                style={{
                                    color: "#2b313b",
                                    fontSize: "1.08rem",
                                    lineHeight: "1.9",
                                    letterSpacing: "0.01em"
                                }}
                            >
                                {post.content.map((paragraph, index) => (
                                    <p key={index} style={{ marginBottom: "1.5rem" }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPost;