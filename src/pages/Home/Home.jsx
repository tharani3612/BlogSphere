import "./Home.css";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import BlogCard from "../../components/BlogCard/BlogCard";

import blogs from "../../data/blogs";


// ===============================
// FEATURED BLOGS
// ===============================

const featuredBlogs = blogs.slice(0, 3);


// ===============================
// CATEGORIES
// ===============================

const categories = [
  {
    name: "React",
    icon: "⚛️",
  },
  {
    name: "JavaScript",
    icon: "JS",
  },
  {
    name: "Cloud & AWS",
    icon: "☁️",
  },
  {
    name: "Docker & DevOps",
    icon: "◈",
  },
  {
    name: "Git & GitHub",
    icon: "⑂",
  },
  {
    name: "Frontend",
    icon: "</>",
  },
];


function Home() {

  return (
    <>
      <Header />


      <main className="home-page">


        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="home-hero">


          {/* HERO CONTENT */}

          <div className="hero-content">

            <div className="hero-badge">
              <span>●</span>
              Latest Insights on Tech & Beyond
            </div>


            <h1>
              Learn Today
              <br />
              Build a Brighter
              <br />
              <span>Tomorrow</span>
            </h1>


            <p>
              Explore practical tutorials, technical
              guides and real-world insights on modern
              technology and development.
            </p>


            <div className="hero-buttons">

              <a
                href="/blogs"
                className="primary-btn"
              >
                Explore Blogs
                <span>→</span>
              </a>


              <a
                href="/categories"
                className="secondary-btn"
              >
                Browse Categories
              </a>

            </div>


            {/* STATS */}

            <div className="hero-stats">

              <div className="stat">

                <h3>{blogs.length}+</h3>

                <p>
                  Articles
                </p>

              </div>


              <div className="stat-divider"></div>


              <div className="stat">

                <h3>6</h3>

                <p>
                  Categories
                </p>

              </div>


              <div className="stat-divider"></div>


              <div className="stat">

                <h3>100%</h3>

                <p>
                  Practical
                </p>

              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="hero-visual">

            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85"
              alt="Modern workspace"
            />

          </div>

        </section>



        {/* =========================
            FEATURED ARTICLES
        ========================= */}

        <section className="content-section">


          <div className="section-top">

            <div>

              <div className="section-title-row">

                <span className="section-line"></span>

                <h2>
                  Featured Articles
                </h2>

              </div>


              <p>
                Explore some of our latest technical
                articles and practical guides.
              </p>

            </div>


            <a
              href="/blogs"
              className="view-all"
            >
              View All →
            </a>

          </div>



          <div className="featured-grid">

            {featuredBlogs.map((blog) => (

              <BlogCard
                key={blog.id}
                blog={blog}
              />

            ))}

          </div>

        </section>



        {/* =========================
            CATEGORIES
        ========================= */}

        <section className="content-section category-section">


          <div className="section-top">

            <div>

              <div className="section-title-row">

                <span className="section-line"></span>

                <h2>
                  Explore Categories
                </h2>

              </div>


              <p>
                Choose a topic and start learning.
              </p>

            </div>


            <a
              href="/categories"
              className="view-all"
            >
              View All →
            </a>

          </div>



          <div className="category-grid">

            {categories.map((category) => (

              <a
                key={category.name}
                href={`/blogs?category=${encodeURIComponent(
                  category.name
                )}`}
                className="category-card"
              >

                <div className="category-icon">

                  {category.icon}

                </div>


                <div className="category-info">

                  <span>
                    {category.name}
                  </span>

                  <small>

                    {
                      blogs.filter(
                        (blog) =>
                          blog.category ===
                          category.name
                      ).length
                    }{" "}
                    Articles

                  </small>

                </div>


                <span className="category-arrow">
                  →
                </span>

              </a>

            ))}

          </div>

        </section>


      </main>


      <Footer />

    </>
  );
}


export default Home;