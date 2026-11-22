import { Link } from "react-router-dom";
import { posts } from "../lib/posts.js";

function BlogIndex() {
  return (
    <>
      <div className="description_container page_start">
        <div className="container">
          <h1>Blog.</h1>
          <p>Walkthroughs of public repositories, written from the code and READMEs.</p>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container">
          {posts.map((post) => (
            <article className="role_block" key={post.slug}>
              <h2>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="role_meta">{post.date}</p>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogIndex;
