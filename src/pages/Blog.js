import React from 'react';
import Header from "./Header";
import Description from './Description';

function Blog() {
  const posts = [
    {
      title: "Debugging at 3 AM: A Love Letter to My Imminent Divorce",
      slug: "debugging-at-3am",
      date: "March 10, 2026",
      readTime: "4 min",
      excerpt: "Turns out the bug was me. Who knew? Spoiler: everyone except future-me. Featuring console.log prayers and existential dread.",
    },
    {
      title: "Tabs vs Spaces: The War Is Over and We All Lost",
      slug: "tabs-vs-spaces-the-final-verdict",
      date: "February 28, 2026",
      readTime: "3 min",
      excerpt: "I used tabs. My team used spaces. HR used therapy. Here's what really happened (and why we're all in counseling now).",
    },
    {
      title: "Why I Still Use console.log in 2026 Like It's 2008",
      slug: "console-log-in-2026",
      date: "January 15, 2026",
      readTime: "5 min",
      excerpt: "React DevTools? Fancy debuggers? Nah. Print statements or GTFO. Fight me (but only after I console.log('fight me') first).",
    },
    {
      title: "Imposter Syndrome: Now Available in 4K Ultra HD",
      slug: "imposter-syndrome-4k",
      date: "December 5, 2025",
      readTime: "6 min",
      excerpt: "Every commit feels like a performance review. Every merge request is a cry for validation. Send help (or likes).",
    },
    {
      title: "How I Fixed the Bug by Deleting the Code. You're Welcome.",
      slug: "delete-to-fix",
      date: "November 20, 2025",
      readTime: "2 min",
      excerpt: "Sometimes the best solution is rm -rf. Change my mind. (Don't actually change my mind, I just got it working.)",
    },
  ];

  return (
    <>
      <Header />

      <Description
        title="Blog."
        subtitle="Random code rants, debugging horror stories, hot takes that will age like milk, tutorials disguised as cries for help, and the occasional moment of clarity (rare)."
      />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1rem',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          fontSize: '1.8rem',
          color: '#0ea5e9', // or whatever accent color you use
        }}>
          Recent Crimes Against Code
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
        }}>
          {posts.map((post, index) => (
            <article
              key={index}
              style={{
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '1.5rem',
                background: '#111',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0ea5e9'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.4rem' }}>
                <a
                  href={`/blog/${post.slug}`} // ← change to your actual routing (e.g. React Router)
                  style={{
                    color: '#0ea5e9',
                    textDecoration: 'none',
                  }}
                >
                  {post.title}
                </a>
              </h3>

              <div style={{
                color: '#888',
                fontSize: '0.9rem',
                marginBottom: '0.75rem',
              }}>
                {post.date} • {post.readTime} read
              </div>

              <p style={{
                margin: '0',
                color: '#ccc',
                lineHeight: '1.5',
              }}>
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Fake coming soon + stats for extra humor */}
        <div style={{
          textAlign: 'center',
          margin: '3rem 0 1rem',
          color: '#777',
          fontSize: '0.95rem',
        }}>
          <p>More posts loading... eventually. (Procrastination sponsored by caffeine and existential dread.)</p>
          <p style={{ marginTop: '1rem' }}>
            Total words written: 42 • Bugs introduced while writing: 1,937 • Regrets: infinite
          </p>
        </div>
      </div>

      {/* Optional funny footer note */}
      <footer style={{
        textAlign: 'center',
        padding: '3rem 1rem 2rem',
        color: '#555',
        fontSize: '0.9rem',
        borderTop: '1px solid #222',
      }}>
        Built with blood, sweat, Stack Overflow, and questionable life choices.<br />
        No warranties expressed or implied — especially regarding my sleep schedule.
      </footer>
    </>
  );
}

export default Blog;