import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import BlogCard from "../../components/BlogCard/BlogCard";

import blogs from "../../data/blogs";

import "./Blogs.css";

function Blogs() {

  // URL-la irukkura category-a read pannum
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category");

  const [search, setSearch] = useState("");

  // URL category irundha atha active category-aa use pannum
  const activeCategory = categoryFromURL || "All";


  // Categories
  const categories = [
    "All",
    ...new Set(
      blogs.map((blog) => blog.category)
    ),
  ];


  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {

    const matchesSearch =
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      blog.description
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      activeCategory === "All" ||
      blog.category === activeCategory;


    return (
      matchesSearch &&
      matchesCategory
    );
  });


  // Category button click
  const handleCategory = (category) => {

    setSearch("");

    if (category === "All") {

      setSearchParams({});

    } else {

      setSearchParams({
        category: category,
      });

    }
  };


  // Clear filters
  const clearFilters = () => {

    setSearch("");

    setSearchParams({});
  };


  return (
    <>
      <Header />


      <main className="blogs-page">


        {/* =========================
            HEADER
        ========================= */}

        <section className="blogs-header">

          <span>
            EXPLORE OUR ARTICLES
          </span>

          <h1>
            Learn. Build. <strong>Grow.</strong>
          </h1>

          <p>
            Discover practical tutorials,
            technical guides, career insights
            and real-world development knowledge.
          </p>

        </section>



        {/* =========================
            SEARCH + CATEGORY
        ========================= */}

        <section className="blogs-controls">


          {/* SEARCH */}

          <div className="search-box">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />


            {search && (

              <button
                className="clear-search"
                onClick={() =>
                  setSearch("")
                }
              >
                ×
              </button>

            )}

          </div>



          {/* CATEGORY FILTER */}

          <div className="category-filter">

            {categories.map((category) => {

              const count =
                category === "All"
                  ? blogs.length
                  : blogs.filter(
                      (blog) =>
                        blog.category === category
                    ).length;


              return (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    handleCategory(category)
                  }
                >

                  {category}

                  <span className="category-count">
                    {count}
                  </span>

                </button>

              );

            })}

          </div>

        </section>



        {/* =========================
            RESULT INFO
        ========================= */}

        <section className="blogs-result-info">

          <p>

            Showing{" "}

            <strong>
              {filteredBlogs.length}
            </strong>{" "}

            {filteredBlogs.length === 1
              ? "article"
              : "articles"}

          </p>


          {(search ||
            activeCategory !== "All") && (

            <button
              onClick={clearFilters}
            >
              Clear filters
            </button>

          )}

        </section>



        {/* =========================
            BLOGS
        ========================= */}

        <section className="blogs-list">

          {filteredBlogs.length > 0 ? (

            <div className="blogs-grid">

              {filteredBlogs.map((blog) => (

                <BlogCard
                  key={blog.id}
                  blog={blog}
                />

              ))}

            </div>

          ) : (

            <div className="no-results">

              <div className="no-results-icon">
                🔍
              </div>

              <h2>
                No articles found
              </h2>

              <p>
                Try another search keyword
                or choose a different category.
              </p>

              <button
                onClick={clearFilters}
              >
                View All Articles
              </button>

            </div>

          )}

        </section>


      </main>


      <Footer />

    </>
  );
}

export default Blogs;