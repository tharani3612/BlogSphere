import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <>
        <Header />

        <main className="blog-not-found">
          <h1>Blog Not Found</h1>
          <p>
            The article you are looking for does not exist.
          </p>

          <a href="/blogs">
            ← Back to Blogs
          </a>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="details-page">

        {/* =========================
            ARTICLE HEADER
        ========================== */}

        <section className="article-header">

          <div className="article-category">
            {blog.category}
          </div>

          <h1>{blog.title}</h1>

          <p className="article-description">
            {blog.description}
          </p>

          <div className="article-meta">

            <div className="article-author">
              <div className="author-avatar">
                {blog.author.charAt(0)}
              </div>

              <div>
                <strong>{blog.author}</strong>
                <span>Author</span>
              </div>
            </div>

            <div className="meta-divider"></div>

            <div className="article-info">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

          </div>

        </section>


        {/* =========================
            HERO IMAGE
        ========================== */}

        <section className="article-hero-image">

          <img
            src={blog.images[0].url}
            alt={blog.images[0].caption}
          />

          <p>
            {blog.images[0].caption}
          </p>

        </section>


        {/* =========================
            ARTICLE CONTENT
        ========================== */}

        <article className="article-content">

          {blog.content.map((item, index) => {

            /* INTRO */
            if (item.type === "intro") {
              return (
                <section
                  className="content-intro"
                  key={index}
                >
                  <h2>{item.heading}</h2>

                  <p>{item.text}</p>

                  {item.imageIndex && (
                    <figure className="content-image">

                      <img
                        src={
                          blog.images[
                            item.imageIndex - 1
                          ].url
                        }
                        alt={
                          blog.images[
                            item.imageIndex - 1
                          ].caption
                        }
                      />

                      <figcaption>
                        {
                          blog.images[
                            item.imageIndex - 1
                          ].caption
                        }
                      </figcaption>

                    </figure>
                  )}
                </section>
              );
            }


            /* PARAGRAPH */
            if (item.type === "paragraph") {
              return (
                <section
                  className="content-section"
                  key={index}
                >
                  <h2>{item.heading}</h2>

                  <p>{item.text}</p>
                </section>
              );
            }


            /* IMAGE */
            if (item.type === "image") {

              const image =
                blog.images[item.imageIndex - 1];

              return (
                <figure
                  className="content-image"
                  key={index}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                  />

                  <figcaption>
                    {image.caption}
                  </figcaption>
                </figure>
              );
            }


            /* CODE */
            if (item.type === "code") {
              return (
                <section
                  className="code-section"
                  key={index}
                >
                  <h2>{item.heading}</h2>

                  <div className="code-wrapper">

                    <div className="code-top">

                      <div className="code-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span className="code-label">
                        React / JavaScript
                      </span>

                    </div>

                    <pre>
                      <code>
                        {item.code}
                      </code>
                    </pre>

                  </div>
                </section>
              );
            }


            return null;
          })}

        </article>


        {/* =========================
            ARTICLE FOOTER
        ========================== */}

        <section className="article-footer">

          <div>
            <span>Category</span>
            <strong>{blog.category}</strong>
          </div>

          <div>
            <span>Written by</span>
            <strong>{blog.author}</strong>
          </div>

          <div>
            <span>Reading time</span>
            <strong>{blog.readTime}</strong>
          </div>

        </section>


        {/* =========================
            BACK BUTTON
        ========================== */}

        <div className="back-to-blogs">

          <a href="/blogs">
            ← Explore More Articles
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default BlogDetails;