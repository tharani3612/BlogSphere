import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <article className="blog-card">

      {/* =========================
          BLOG IMAGE
      ========================== */}

      <a
        href={`/blogs/${blog.id}`}
        className="blog-image-link"
      >
        <div className="blog-image">

          <img
            src={blog.image}
            alt={blog.title}
          />

          <span className="image-overlay">
            Read Article →
          </span>

        </div>
      </a>


      {/* =========================
          BLOG CONTENT
      ========================== */}

      <div className="blog-content">

        <div className="blog-top-row">

          <span className="blog-category">
            {blog.category}
          </span>

          <span className="blog-read-time">
            ◷ {blog.readTime}
          </span>

        </div>


        <a
          href={`/blogs/${blog.id}`}
          className="blog-title-link"
        >
          <h3>{blog.title}</h3>
        </a>


        <p className="blog-description">
          {blog.description}
        </p>


        {/* =========================
            ARTICLE INFO
        ========================== */}

        <div className="blog-bottom">

          <div className="blog-author">

            <div className="author-avatar">
              {blog.author.charAt(0)}
            </div>

            <div className="author-info">

              <strong>
                {blog.author}
              </strong>

              <small>
                {blog.date}
              </small>

            </div>

          </div>


          <a
            href={`/blogs/${blog.id}`}
            className="read-more"
            aria-label={`Read ${blog.title}`}
          >
            →
          </a>

        </div>

      </div>

    </article>
  );
}

export default BlogCard;