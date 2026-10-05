import { Link } from "react-router-dom";
import "./Categories.css";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";

import blogs from "../../data/blogs";

const categories = [
  {
    name: "React",
    description:
      "Learn React.js, components, hooks and modern frontend development.",
    color: "#61dafb",
    bgColor: "rgba(97, 218, 251, 0.1)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />

        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(60 12 12)"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(120 12 12)"
        />

        <circle
          cx="12"
          cy="12"
          r="2"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "JavaScript",
    description:
      "Explore JavaScript concepts, ES6 features and practical techniques.",
    color: "#f7df1e",
    bgColor: "rgba(247, 223, 30, 0.15)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },

  {
    name: "Cloud & AWS",
    description:
      "Understand cloud technologies, AWS services and modern infrastructure.",
    color: "#0ea5e9",
    bgColor: "rgba(14, 165, 233, 0.1)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17.5 19.125A5.5 5.5 0 0 0 17.5 8.125c-.24 0-.48.017-.714.051a7 7 0 0 0-13.286 3.784 4.5 4.5 0 0 0 .5 8.965" />
      </svg>
    ),
  },

  {
    name: "Docker & DevOps",
    description:
      "Learn Docker, containers, CI/CD pipelines and modern DevOps workflows.",
    color: "#2496ed",
    bgColor: "rgba(36, 150, 237, 0.1)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="15"
          rx="2"
        />

        <path d="M7 8h2" />
        <path d="M11 8h2" />
        <path d="M15 8h2" />

        <path d="M7 12h2" />
        <path d="M11 12h2" />
        <path d="M15 12h2" />

        <path d="M8 19v2" />
        <path d="M16 19v2" />
      </svg>
    ),
  },

  {
    name: "Git & GitHub",
    description:
      "Master Git, GitHub, branches, commits and professional collaboration workflows.",
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.1)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />

        <path d="M8.5 7.5L10.5 16" />
        <path d="M15.5 7.5L13.5 16" />
      </svg>
    ),
  },

  {
    name: "Frontend",
    description:
      "Explore HTML, CSS, JavaScript and modern frontend development techniques.",
    color: "#6366f1",
    bgColor: "rgba(99, 102, 241, 0.1)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
        />

        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

function Categories() {
  return (
    <>
      <Header />

      <main className="categories-page">

        <section className="categories-header">

          <span className="badge">
            EXPLORE TOPICS
          </span>

          <h1>
            Browse by Category
          </h1>

          <p>
            Find articles based on the topics you
            are interested in and start learning
            something new today.
          </p>

        </section>

        <section className="categories-grid">

          {categories.map((category) => {

            const count = blogs.filter(
              (blog) =>
                blog.category === category.name
            ).length;

            return (
              <div
                className="category-card"
                key={category.name}
              >

                <div
                  className="category-icon"
                  style={{
                    color: category.color,
                    backgroundColor:
                      category.bgColor,
                  }}
                >
                  {category.icon}
                </div>

                <h2>
                  {category.name}
                </h2>

                <p>
                  {category.description}
                </p>

                <div className="category-bottom">

                  <span className="count-tag">
                    {count}{" "}
                    {count === 1
                      ? "Article"
                      : "Articles"}
                  </span>

                  {/* DIRECT TO BLOGS PAGE */}

                  <Link
                    to={`/blogs?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className="explore-btn"
                  >
                    Explore

                    <span className="arrow">
                      →
                    </span>
                  </Link>

                </div>

              </div>
            );
          })}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Categories;