import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Home/Footer";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img className="cover-img" src={blog.cover} alt="cover" />
          {/* <p className="blog-desc">{blog.description}</p> */}
          {blog.description.map((paragraph, index) => (
            <p key={index} className="blog-desc">
              {paragraph}
            </p>
          ))}
          <br />
          {blog.images.length > 0 && (
            <div>
              {blog.images.map((image, index) => (
                <div key={index}>
                  <img className="article-img" src={image.src} alt={index} />
                  <p>
                    <b>
                      <h6>{image.caption}</h6>
                    </b>
                  </p>
                  <br></br>

                  <p>{image.description}</p>

                  <div className="code-div">
                    {image.code !== "" ? (
                      <pre className="code">
                        <code>{image.code}</code>
                      </pre>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}

          {Array.isArray(blog.codeSnippet) && (
            <div>
              {blog.codeSnippet.map((snippet, index) => {
                if (snippet.description === "") {
                  return null; // Skip rendering if description is empty
                }

                return (
                  <div key={index}>
                    <br />
                    <pre>
                      <code>{snippet.code}</code>
                    </pre>
                    <br />
                    <p>{snippet.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
