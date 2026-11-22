import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPost } from "../lib/posts.js";

function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="description_container page_start">
        <div className="container">
          <h1>Not found.</h1>
          <p>This post is not in the blog.</p>
          <p>
            <Link to="/blog">Back to the blog</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="description_container page_start">
        <div className="container">
          <h1>{post.title}</h1>
          <p>
            {post.date}
            {post.repo ? (
              <>
                {" · "}
                <a href={post.repo}>Repository</a>
              </>
            ) : null}
          </p>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container post_body">
          <p>
            <Link to="/blog">All posts</Link>
          </p>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
