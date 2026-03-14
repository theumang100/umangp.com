import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Description from './Description';
import blogPosts from '../data/blogPosts';

function Blog() {
    return (
        <>
            <Header />

            <Description
                title="Blog."
                subtitle="Random code rants, debugging horror stories, hot takes that will age like milk, tutorials disguised as cries for help, and the occasional moment of clarity."
            />

            <div
                style={{
                    maxWidth: '860px',
                    margin: '0 auto',
                    padding: '2rem 1rem 4rem',
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '2.5rem',
                        fontSize: '1.8rem',
                        color: '#0ea5e9',
                    }}
                >
                    Recent Crimes Against Code
                </h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                    }}
                >
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            style={{
                                border: '1px solid #2a2a2a',
                                borderRadius: '14px',
                                padding: '1.5rem',
                                background: '#111',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#0ea5e9';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#2a2a2a';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div
                                style={{
                                    color: '#888',
                                    fontSize: '0.9rem',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {post.date} • {post.readTime} read
                            </div>

                            <h3
                                style={{
                                    margin: '0 0 0.75rem',
                                    fontSize: '1.4rem',
                                    lineHeight: 1.3,
                                }}
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    style={{
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {post.title}
                                </Link>
                            </h3>

                            <p
                                style={{
                                    margin: 0,
                                    color: '#b8c0cc',
                                    lineHeight: 1.7,
                                    fontSize: '1rem',
                                }}
                            >
                                {post.excerpt}
                            </p>
                        </article>
                    ))}
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        margin: '3rem 0 0',
                        color: '#777',
                        fontSize: '0.95rem',
                    }}
                >
                    <p>More posts loading... eventually. Procrastination remains fully operational.</p>
                    <p style={{ marginTop: '0.75rem' }}>
                        Total words written: suspiciously low • Bugs introduced while writing: too many • Regrets: infinite
                    </p>
                </div>
            </div>

            <footer
                style={{
                    textAlign: 'center',
                    padding: '3rem 1rem 2rem',
                    color: '#555',
                    fontSize: '0.9rem',
                    borderTop: '1px solid #222',
                }}
            >
                Built with blood, sweat, Stack Overflow, and questionable life choices.
                <br />
                No warranties expressed or implied — especially regarding my sleep schedule.
            </footer>
        </>
    );
}

export default Blog;